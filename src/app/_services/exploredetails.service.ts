import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExploredetailsService {

  constructor() { }
  packageDetails1 = [
  {
    id:1,
    packageName:"Boston Commons Public Garden",
    packageDetails:"The landscaped, 24-acre Boston Public Garden, established in 1837, was the first public botanical garden in the U.S. The Public Garden contains lovely manicured paths, the famous “Make Way for Ducklings” statues, a 4-acre pond with swans .",
    packageImg:"https://cdn.traveltripper.io/site-assets/192_866_18602/media/2018-08-29-113233/small_boston-common-guide.jpg",
    packageLink:"https://www.google.com/maps/d/u/0/viewer?mid=1SJWzIopXrmtQEErh5Y4-BxJrijU&hl=en&ll=42.3547055668398%2C-71.0672065&z=16"
  },
  {
    id:2,
    packageName:"Reflection Pool",
    packageDetails:"The Boston Reflecting Pool can be found between the Prudential Center and the Christian Science Center.The stunning infinity edge of the curved, polished Minnesota red granite makes it a true work of art and a must-see Boston location", 
    packageImg:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/boston-reflecting-pool-christian-science-church-toby-mcguire.jpg",
    packageLink:"https://www.google.com/maps/d/u/0/viewer?mid=1SJWzIopXrmtQEErh5Y4-BxJrijU&hl=en&ll=42.3547055668398%2C-71.0672065&z=16"

  },
  {
    id:3,
    packageName:"Charles River",
    packageDetails:"This Boston walking tour takes in one of the most scenic features in Boston - the Charles River. Walking alongside the Charles is the best way to see incredible views of both Cambridge and Boston depending what side you're on ",
    packageImg:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/boston-ma-spring-tree-on-the-charles-river-esplanade-boston-ma-toby-mcguire.jpg",
    packageLink:"https://www.google.com/maps/d/u/0/viewer?mid=1SJWzIopXrmtQEErh5Y4-BxJrijU&hl=en&ll=42.3547055668398%2C-71.0672065&z=16"

  },

  {
    id:4,
    packageName:"Boston Public Library",
    packageDetails:" As the oldest large free-lending library in America, the Boston Public Library was designed as a “palace for the people.” The McKim building includes a children's room, the first in the country, and a sculpture garden with an arcaded gallery surrounding it",   
    packageImg:"https://www.thecateredaffair.com/assets/KaoriJohnWedding-EmilyTebbettsPhotography-393-1.jpg",
    packageLink:"https://www.google.com/maps/d/u/0/viewer?mid=1SJWzIopXrmtQEErh5Y4-BxJrijU&hl=en&ll=42.3547055668398%2C-71.0672065&z=16"

  },
  {
    id:5,
    packageName:"Downtown",
    packageDetails:"Downtown Boston is the heart of the city. But finding where it starts and ends can be tough. It is closely surrounded by Beacon Hill, Back Bay, and the Theater District. This central location, surrounded by other great neighborhoods allows Downtown to flourish day.",
    packageLink:"https://www.google.com/maps/d/u/0/viewer?mid=1SJWzIopXrmtQEErh5Y4-BxJrijU&hl=en&ll=42.3547055668398%2C-71.0672065&z=16",

    packageImg:"https://cdn.vox-cdn.com/thumbor/-bvxHxe3Y1VMGCgan1wUuKzxnMY=/0x0:7928x4505/1200x800/filters:focal(3330x1619:4598x2887)/cdn.vox-cdn.com/uploads/chorus_image/image/62867625/shutterstock_1214375812.0.jpg"
  },
  {
    id:6,
    packageName:"Fan Pier Park",
    packageDetails:"Fan Pier is often called the crown jewel of Boston Harbor for its incomparable location in the very heart of the harbor. It might just as easily be called that for the unique amenities it offers those seeking an ideal location for their business or home.",
    packageLink:"https://www.google.com/maps/d/u/0/viewer?mid=1SJWzIopXrmtQEErh5Y4-BxJrijU&hl=en&ll=42.3547055668398%2C-71.0672065&z=16",

    packageImg:"https://images.squarespace-cdn.com/content/v1/5de48132fbd78f1f180a4253/1585748577073-DNXXW2OY3DPM535UU5I6/_OS17669-Edit-2-2.jpg"
  },
  {
    id:7,
    packageName:"MIT And Harvard View",
    packageDetails:"Boston's inner and outer harbors are awash in legend and lore, not only beauty but also a fully narrated 60min narration where we'll regale you with hero tales of the Revolutionary War, local legends of the sea, and stories of characters past and present",
    packageLink:"https://www.google.com/maps/d/u/0/viewer?mid=1SJWzIopXrmtQEErh5Y4-BxJrijU&hl=en&ll=42.3547055668398%2C-71.0672065&z=16"
,
    packageImg:"https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F26d13096-2dc1-11ec-a1c0-649c1183346f.jpg?crop=3330%2C2220%2C0%2C0"
  },
  {
    id:8,
    packageName:"Newbury street",
    packageDetails:" A popular shopping, dining and entertainment district, Newbury Street's beautiful 19th century brownstones are home to hundreds of retail locations and eateries. And because of its numerous upscale boutiques and shops, it has earned a good reputation .",
    packageLink:"https://www.google.com/maps/d/u/0/viewer?mid=1SJWzIopXrmtQEErh5Y4-BxJrijU&hl=en&ll=42.3547055668398%2C-71.0672065&z=16"
    ,
    packageImg:"https://www.wilderco.com/wp-content/uploads/Q0A3318%C2%A9Jim-Raycroft-1200x800.jpg"
  },

  {
    id:9,
    packageName:"Rose Garden",
    packageDetails:"A HIDDEN GEM TUCKED BEYOND Boston's downtown parks, the James P. Kelleher Rose Garden dates back to 1931 and features over 1,500 roses behind its tall green yew hedge in the Back Bay Fens.This is one of the most expensive streets. ",
    
    packageImg:"https://pbs.twimg.com/media/EcQLakgWAAUOu0j.jpg"
  },
  // {
  //   id:10,
  //   packageName:"Bunker Hill Monument",
  //   packageDetails:"Bunker Hill Monument is a free stop for visitors seeking to commemorate our past. This 221-foot granite obelisk remembers the Battle of Bunker Hill. Rangers provide details about the history of the crucial battle, and seasonal musket-firings add a note of authenticity.",
   
  //   packageImg:"https://philip.greenspun.com/images/20061003-boston-aerials-r44/bunker-hill-monument-2.3.jpg"
  // }


]
}
