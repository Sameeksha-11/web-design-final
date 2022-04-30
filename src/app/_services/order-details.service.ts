// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class OrderDetailsService {

//   constructor() { }
  
// }
import { Injectable } from '@angular/core';

@Injectable({

providedIn: 'root'

})

export class OrderDetailsService {

constructor() { }

packageDetails = [

    {
        id:1,
        packageName:"Museum of Fine Arts",
        packageDetails:" MFA is one of the most comprehensive art museums in the world, the collection encompasses nearly 500,000 works of art.We welcome more than one million visitors each year to experience art from ancient Egyptian to contemporary and all forms",
        packageCost:50,
        packageImg:"https://i.pinimg.com/originals/f9/bc/fe/f9bcfe267ae18f957c33430454ba8ee7.jpg"
      },
      {
        id:2,
        packageName:" The New England Aquarium",
        packageDetails:"The New England Aquarium is a global leader in ocean exploration and marine conservation. With more than 1.3 million visitors a year, the Aquarium is one of the premier visitor attractions in Boston and a major public education resource for the region. ",
        packageCost:150,
        packageImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f8/e2/65/new-england-aquarium.jpg?w=1200&h=-1&s=1"
      },
      {
        id:3,
        packageName:" Hop-On Hop-Off Trolley Tour",
        packageDetails:"Old Town Trolley has provided Boston sightseeing tours highlighting the best of the city. Hop aboard one of our trolleys-Everyone will experience a delightful combination of transportation and entertainment viewing the beauty of the city.",
        packageCost:120,
        packageImg:"https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/ff/c7/58.jpg"
      },
  
      {
        id:4,
        packageName:" Boston Duck Tour",
        packageDetails:" A Boston Duck Tour is a great way to start off your visit to boston.You'll enjoy a great overview of the city, while seeing many unique neighborhoods, and then splash you into the Charles River for a breathtaking view of the Boston and Cambridge skylines.",
        packageCost:150,
        packageImg:"https://cdn.theculturetrip.com/wp-content/uploads/2019/05/shutterstock_213905203.jpg"
      },
      {
        id:5,
        packageName:" Martha's Vineyard",
        packageDetails:"Martha's Vineyard is a very charming beautiful place with a great sense of community and diversity.It is actually a bigger island than most people think. MV is comprised of six towns spread than most people think. It is comprised of six towns spread.",
        packageCost:500,
        packageImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/dc/fa/64/harborside-inn.jpg?w=600&h=400&s=1"
      },
      {
        id:6,
        packageName:" Whale Watch",
        packageDetails:"Our destination:Stellwagen Bank Marine Sanctuary, a rich feeding ground for whales, dolphins, sea birds and other marine creatures. Stellwagen is home to many species of large whales, including humpbacks, finbacks and minkes, and the critically endangered right whales. ",
        packageCost:800,
        packageImg:"https://media.timeout.com/images/105496903/750/562/image.jpg"
      },
      {
        id:7,
        packageName:" Boston Harbor Cruise",
        packageDetails:"Boston's inner and outer harbors are awash in legend and lore, not only beauty but also a fully narrated 60min narration where we'll regale you with hero tales of the Revolutionary War, local legends of the sea, and stories of characters past and present",
        packageCost:700,
        packageImg:"https://media.tacdn.com/media/attractions-splice-spp-674x446/09/11/68/1c.jpg"
      },
      {
        id:8,
        packageName:" Freedom Trial ",
        packageDetails:"Experience more than 250 years of history, The Freedom Trail is a red brick line on the sidewalk to follow on foot. The red line connects 16 historic sites along a gentle 2.5-mile walking trail, from Boston Common to Bunker Hill Monument in Charlestown. ",
        packageCost:170,
        packageImg:"https://tallgirlbigworld.com/wp-content/uploads/2017/05/Boston-Old-State-House.jpg"
      }
  
]

}