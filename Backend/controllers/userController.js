const User = require('../models/user')
const stripe = require("stripe")("sk_test_51KrvpxEzgKwEXW8k2jArJKoroGe43qh0FG1Q8KPZasOAznuF8NKoyrM2G1HusYOTYLmxqfsF8QAOtfi4xd3xXjnD00LNVFoFsY");
const path = require("path");
var jwt = require('jsonwebtoken');
var secretKey = "rtyui"

const bcrypt = require('bcrypt');
const YOUR_DOMAIN = "http://localhost:3000";
module.exports = {
    signup: function(req, res) {
        // user find if the username already exists or not
        var regexusername = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        var regexpassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

        
        // if(!req.body.username){res.json({"status":false,"message":"email is null"})}
         if (!req.body.username.trim().match(regexusername)) {
            // res.status(400);
            res.status(400)
               // console.log("error authenticating", err)
             res.json({"message": "Email Input does not match"});
             
        // }  else if(!req.body.password){res.json({"status":false,"message":"password is null"})}
         }
        else if (!req.body.password.trim().match(regexpassword)) {
            // res.status(400);
            res.status(400)
            return res.json({
                "message": "Please enter minimum eight characters, at least one lowercase and uppercase letter"
            });
        } else {
            //find if the user with that username already exists
            User.find({
                username: req.body.username
            }).exec(function(err, user) {
                if (err) {
                    res.status(400)
                    res.json({"message": 'error exec find user'});
                }
                //if user.length is >0 then the username already exists and we cant create a user with the same username
                else if (user.length > 0) {
                    res.status(400)
                    res.json({"message": 'email already exists'});
                } else {
                    
                    //Hashing the password with salt =12
                    bcrypt.hash(req.body.password, 12, function(err, hash) {
                        // console.log(hash)
                        if (err) {
                            //if errors occours here the hashing is failed and the error status is 500
                            res.status(400);
                            res.json({
                                "message": 'Hashing failed'
                            });
                        } else {
                            //As the username doesnt already exist we are creating a new user .

                            let new_user = {
                                "username": req.body.username,
                                "password": hash,
                                "role": req.body.role
                            }
                            //creating the new user and saving it in mongodb.
                            let user = new User(new_user);
                            user.save(function(err, obj) {
                                if (err) {
                                    res.status(400)
                                    //if errors occours during the creation of the user.
                                    console.log(err);
                                    console.log('Unable to create users. Try again!!!');
                                    res.json({
                                        "status": false,
                                        "message": 'Failed to create users'
                                    });
                                } else {
                                    res.status(200);
                                    res.json({
                                        "status": true,
                                        "message": 'User created successfully'
                                    });
                                }
                            });
                        }
                        //  }   
                    })
                }
            })
        }
    },
//API for login
    login: function(req, res) {
        // bcrypt.compare(req.body.password,)
        User.findOne({
            username: req.body.username
        }).exec(function(err, db_user) {
            if (err) {
                res.status(400)
                res.json({
                    "messgae": 'query error'
                });
            } else if (db_user == null) {
                res.status(400)
                res.json({
                    "status": "",
                    "error":
                    {
                        "message": "username does not exist"
                    },
                    "message": "username does not exist"
                   
                })
            } else {
                bcrypt.compare(req.body.password, db_user.password).then(doMatch => {
                    if (doMatch) {
                        var payLoad = {
                            username: db_user.username,
                            user_id: db_user._id,
                            role: db_user.role
                        }
                        var token = jwt.sign(payLoad, secretKey);
                        // res.json(db_user.role);
                        res.status(200)
                        res.json({
                            "message": 'signin is successful',
                            "accessToken": token,
                             "role": db_user.role
                        })
                        console.log(db_user);
                        // res.send(db_user);
                    } else {
                        res.status(400)
                        res.json({
                            "message": "password is incorrect"
                        })
                    }
                })
            }
        })
    },
    
    confirmPayment: function(req, res) {
        const stripe = require('stripe')("sk_test_51KrvpxEzgKwEXW8k2jArJKoroGe43qh0FG1Q8KPZasOAznuF8NKoyrM2G1HusYOTYLmxqfsF8QAOtfi4xd3xXjnD00LNVFoFsY");
        //Stripe method to create a charge for that card
        stripe.charges.create({
            source: req.body.token,
            currency: "USD",
            amount: req.body.amount * 100
        }, (err, charge) => {
            if (err) {
                res.status(400)
                console.log(err);
                return res.json({
                    success: false,
                    status: "payment failed"
                })
            }
            res.status(200)
            res.json({
                success: true,
                status: "payment success"
            })
        })
    },

    
}
