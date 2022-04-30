import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"China town Restaurant",
      foodDetails:"Chinatown is, without a doubt, one of Boston’s best food neighborhoods. Want to eat the greatest dumplings in the city? Head to Chinatown. Dim sum? Check. Offal? Check. Peking duck? You got it. Chinatown has ramen; Chinatown has udon; Chinatown has sushi; Chinatown has pho; Chinatown has hot pot. Chinatown is where you bring your friend who’s visiting from out of town and wants to eat.",
      foodImg:"https://www.linkpicture.com/q/chinatown.jpeg",
      foodlink:"http://www.winsordimsumhouse.com/"
    },
    {
      id:2,
      foodName:"Insomnia Cookies",
      foodDetails:"Insomnia Cookies is a chain of bakeries in the United States that specializes in delivering warm cookies, baked goods, and ice cream. Based in New York and Philadelphia, it was started in 2003 by Seth Berkowitz, a student at the University of Pennsylvania. f you're an avid Insomniac, then good news! Insomnia Cookies offers a customer loyalty program for the routine cookie-goers.",
      foodImg:"https://www.linkpicture.com/q/insomnia.jpeg",
      foodlink:"https://www.yelp.com/biz/insomnia-cookies-boston"
    },
    {
      id:3,
      foodName:"Contessa Newbury",
      foodDetails:"The newest rooftop restaurant, Contessa, debuts tomorrow, June 22, at the recently opened hotel the Newbury Boston on Newbury Street. The elaborately decorated space serves Italian cuisine and comes from international mega-group Major Food Group. Founders Mario Carbone, Rich Torrisi, and Jeff Zalaznick have opened restaurants such as Carbone and Sadelle’s in New York City and beyond.",
      foodImg:"https://www.thenewburyboston.com/sites/default/files/styles/gallery_1568x1024/public/2021-11/Ken%20Fulk%20-%20Contessa1188.jpg?itok=8Wed3DaR",
      foodlink:"https://www.thenewburyboston.com/dine/contessa"
    },
  
    {
      id:4,
      foodName:"Toro Restaurant",
      foodDetails:"Toro is a Spanish tapas restaurant and bar that has been serving the South End since 2005. Created by James Beard Award-winning Chefs Ken Oringer and Jamie Bissonnette, the menu features Barcelona-inspired hot and cold small plates.",
      foodImg:"https://www.linkpicture.com/q/toro.jpeg",
      foodlink:"https://www.toro-restaurant.com/"
    },
    {
      id:5,
      foodName:"Night Shade Noodle bar",
      foodDetails:"From Chef Rachel Miller, Nightshade Noodle Bar brings French & Vietnamese inspired seafood to the vibrant heart of downtown Lynn, featuring blind tasting menus, chic jungle vibes, tropical cocktails & curated natural wines.",
      foodImg:"https://www.linkpicture.com/q/noodlebar.jpeg",
      foodlink:"https://nightshadenoodlebar.com/"
    },
    {
      id:6,
      foodName:"Dumpking kingdom",
      foodDetails:"Dumpling Kingdom has a wide selection of dumplings, including vegetable options as well as duck, pork, chicken, beef, and seafood. There are also appetizers like chicken wings, scallion pancakes, and meatballs, in addition to the wide range of soups, house specialties.",
      foodImg:"https://www.linkpicture.com/q/dumpling.jpeg",
      foodlink:"https://www.dumplingkingdomallston.com/"
    },
    {
      id:7,
      foodName:"Mike’s Pastry",
      foodDetails:"Founded in 1946, Mike's Pastry is located in Boston's historic North End on Hanover Street. Michael Mercogliano (the “Mike” behind the famed Mike's Pastry) created the one-of-a-kind cannoli that keeps loyal Bostonians and tourists enjoy their visit.",
      foodImg:"https://www.mikespastry.com/wp-content/uploads/2020/08/The-Black-Seal-Rum-Infused-Cannoli-Kit-1200-800.jpg",
      foodlink:"https://www.mikespastry.com/"
    },
    {
      id:8,
      foodName:"Cheesecake factory",
      foodDetails:" Evelyn Overton found a recipe in her local Detroit newspaper that inspired her “Original” cheesecake. Everyone loved her recipe so much she decided to open a small bakery, but eventually gave it up to focus on raising her children, David and Renee.",
      foodImg:"https://www.linkpicture.com/q/cheesecake.jpeg",
      foodlink:"https://www.thecheesecakefactory.com/?gclsrc=aw.ds&"
    },
  
    {
      id:9,
      foodName:"Publico Street Bistro & Garden",
      foodDetails:"Publico’s dining space is reminiscent of an outdoor public market where food and culture intermingle to create a vibrant and welcoming atmosphere. Their cuisine is inspired by the many diverse flavors of Europe, South and North America.",
      foodImg:"https://www.linkpicture.com/q/bistro.jpeg",
      foodlink:"https://www.timeout.com/boston/restaurants/publico-street-bistro-garden"
    },
    // {
    //   id:10,
    //   foodName:"Bunker Hill Monument",
    //   foodDetails:"Bunker Hill Monument is a free stop for visitors seeking to commemorate our past. This 221-foot granite obelisk remembers the Battle of Bunker Hill. Rangers provide details about the history of the crucial battle, and seasonal musket-firings add a note of authenticity.",
     
    //   foodlink:"http://www.winsordimsumhouse.com/"
    // }
  ]
}
