import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Cardtwo from "./Cardtwo";
import videoBg from './Video/BG1.mp4';


function BestPlaces(){
  let [List1,setList1]=useState([]);
  useEffect(()=>{
    axios.get("https://travellingagencywebsite.onrender.com/product-api/get-cards")
    .then((response)=>{
      console.log(response.data.payload)
      setList1(response.data.payload)
    })
    .catch((err)=>{alert('err occured')})},[]);



 

    // let List2=[
    //     {
    //       id:"1",  
    //       picbg:"https://live.staticflickr.com/8297/8021303712_4974698930_b.jpg",  
    //       pic:"https://live.staticflickr.com/721/31846804332_9076fd6b52_b.jpg",
    //       heading:"Tokyo",
    //       price:"$45",
    //       para:"Tokyo is one of the best cities to visit. It's full of nightlife, culture, amazing temples and shopping to see and do in life. It is is also a tourist friendly place and easy to get around.",
    //       end:"FLIGHTS|BEST HOTELS"
    //     },
    //     {
    //       id:"2",  
    //         picbg:"https://www.ilariamarsilirometours.com/uploads/6/5/6/5/6565225/7133121_orig.jpg",  
    //       pic:"https://th.bing.com/th/id/OIP.xXUakXOCDQt2vRaoIpedWwHaFj?pid=ImgDet&rs=1",
    //       heading:"Rome",
    //       price:"$45",
    //       para:"Rome is a city with layers of history abd has modern state-of-the-art buildings. Rome, the Italian capital has very much remained true to itself to enjoy.",
    //       end:"BEST HOTELS|FLIGHTS|THINGS TO DO"
    //     },
    //     {
    //       id:"3",  
    //         picbg:"https://4.bp.blogspot.com/-oix68uLyKIo/UklViwUWj5I/AAAAAAAAOjc/CX7QlvYc_nI/s0/Eiffel+Tower+and+the+moon+ultra+hd+wallpapers.jpg",  
    //       pic:"https://th.bing.com/th/id/OIP.WMt0_WGOizap9tf77SjHGAHaE7?pid=ImgDet&rs=1",
    //       heading:"Paris",
    //       price:"$45",
    //       para:" In Paris you will find everything you need. Paris has a long history of art and culture. From museums to cafe Paris offers endless activities to experience French culture.",
    //       end:"BEST HOTELS|FLIGHTS|THINGS TO DO"
    //     },
    //     {
    //       id:"4",  
    //         picbg:"https://c2.staticflickr.com/4/3317/4572503722_d5830ebe98_b.jpg",  
    //       pic:"https://4.bp.blogspot.com/-wurv6ibPYyg/U5rGwgCgEaI/AAAAAAAAKwM/jFX6JL36Suo/s1600/5.+Tahiti,+French+Polynesia+-+7+Islands+You+Wouldn%E2%80%99t+Mind+Being+Stuck+On.jpg",
    //       heading:"Tahiti",
    //       price:"$45",
    //       para:"The stunning lagoons of French Polynesia makes Tahiti so famous and Great, especially when you picture the overwater bungalows of Bora Bora and Moorea and The best time to visit Tahiti is between May and October",
    //       end:"BEST HOTELS|THINGS TO DO"
    //     },
    //     {
    //       id:"5",  
    //         picbg:"https://i1.wp.com/parkquest.net/wp-content/uploads/2020/09/lake-mcdonald-1984316_1920.jpg?w=1920&ssl=1",  
    //       pic:"https://parkquest.net/wp-content/uploads/2020/08/3C7FF0EB-1DD8-B71B-0BDB1379DE9714E1.jpg",
    //       heading:"Glacier National Park",
    //       price:"$45",
    //       para:"Glacier National Park is with 25 active glaciers, the park is one of the few places in the lower 48 states where you can view glaciers.This gives you good and awesome time to drive Going-to-the-Sun Road, hiking.",
    //       end:"BEST HOTELS|THINGS TO DO"
    //     },
    //     {
    //       id:"6",  
    //         picbg:"https://fotos.piqs.de/1/f/3/6/2/e08de65d4dec88d37587ecc167771383.jpg",  
    //       pic:"https://i0.wp.com/privatekeymagazine.com/wp-content/uploads/2020/07/image1-7.png?resize=1050%2C700&ssl=1",
    //       heading:"Maldives",
    //       price:"$45",
    //       para:"It is not cheap or easy to reach, but this isolated paradise between the Arabian and Laccadive seas is the personification of a dreamy tropical vacation. In this South Asian destination, which is made up of more than 1,000 islands.",
    //       end:"BEST HOTELS|THINGS TO DO"
    //     },
    //     {
    //         picbg:"https://th.bing.com/th/id/R.9819e43cd2a277bb0b11aeb56432637f?rik=%2bSct8x80noXiBg&riu=http%3a%2f%2fwww.technocrazed.com%2fwp-content%2fuploads%2f2015%2f12%2fNew-York-Wallpaper-Background-19.jpg&ehk=R7yAaVdULwKInEKm61S1DVpCyHldilmsPGUQF7HuT%2bk%3d&risl=&pid=ImgRaw&r=0",  
    //       pic:"https://travel.usnews.com/images/main_image_september_2013_cropped_445x280_uNdHVwH.jpg",
    //       heading:"New York City",
    //       para:"New York City hosts infinite urban adventures: You can wander through Central Park, tour art exhibits at the Met, catch a Broadway show or peruse SoHo's stylish boutiques. At night, admire Manhattan's glittering skyscrapers from the top of the Empire State Building.",
    //       end:"BEST HOTELS|THINGS TO DO"
    //     },
    //     {
    //         picbg:"https://wallpapercave.com/wp/wp6494605.jpg",  
    //       pic:"https://travel.usnews.com/images/grand_canyon_main_2014_-_shutterstock-kojihirano_kUxSzuP.jpg",
    //       heading:"Grand Canyon",
    //       para:"Measuring roughly 277 miles long, 18 miles wide and a mile deep, the Grand Canyon offers plenty of outdoor activities for everyone from day-trippers to adventure junkies. Hike along the national park's popular Rim and Bright Angel trails for unparalleled vistas.",
    //       end:"BEST HOTELS|FLIGHTS|THINGS TO DO"
    //     },
    //     {
    //         picbg:"https://wallpapercave.com/wp/wp2684730.jpg",  
    //       pic:"https://travel.usnews.com/images/sydney_opera_house_new_cropped_445x280_98PJC7W.jpg",
    //       heading:"Sydney",
    //       para:"Sydney offers more than just a dizzying array of landmarks, such as the Sydney Opera House, Mrs. Macquarie's Chair and the Sydney Harbour Bridge. This Australian city boasts a warm, sunny climate that is ideal for relaxing or surfing at world-renowned beaches.",
    //       end:"BEST HOTELS|FLIGHTS|THINGS TO DO"
    //     },
    //     {
    //         picbg:"https://www.wallpapers13.com/wp-content/uploads/2016/01/Dubai-Hd_city-wallpaper-2560x1600-1920x1080.jpg",  
    //       pic:"https://travel.usnews.com/images/183346577_JrseKsM.jpg",
    //       heading:"Dubai",
    //       para:"Stunning Persian Gulf views, heart-pumping activities and historical landmarks await you in Dubai. This Middle Eastern city is filled with some of the world's most notable and unique attractions, including the Burj Khalifa, the Dubai Mall and indoor Ski Dubai. ",
    //       end:"BEST HOTELS|FLIGHTS|THINGS TO DO"
    //     },
    //     {
    //         picbg:"https://cdn.wallpapersafari.com/64/52/JAnoHl.jpg",  
    //       pic:"https://travel.usnews.com/images/gettyimages-599456588_v8Ztsa6.jpg",
    //       heading:"Yosemite",
    //       para:"Year after year, millions of visitors travel to California's Yosemite National Park to stand in awe of natural wonders like Half Dome and Yosemite Falls. Take in the panoramic views from the Glacier Point and Tunnel View overlooks.",
    //       end:"BEST HOTELS|THINGS TO DO"
    //     },
    //     {
    //         picbg:"https://images3.alphacoders.com/746/746151.jpg",  
    //       pic:"https://travel.usnews.com/images/main-2016-getty-resized_445x280_u6z3l3P.jpg",
    //       heading:"Florence",
    //       para:"Florence offers plenty of world-famous attractions, including the Duomo, Piazzale Michelangelo and Piazza della Signoria. Plus, it's a haven for art lovers thanks to art-focused museums like the Galleria dell'Accademia and the Uffizi Gallery.",
    //       end:"BEST HOTELS|FLIGHTS|THINGS TO DO"
    //     },
    //     {
    //         picbg:"https://cdn.wallpapersafari.com/33/73/cmf283.jpg",  
    //       pic:"https://travel.usnews.com/images/aquatic_life_main_445x280_RQs4BXN.jpg",
    //       heading:"Great Barrier Reef",
    //       para:"The globe's largest coral reef system – and one of the original Seven Natural Wonders of the World – touts incredible scenery. At Australia's Great Barrier Reef, you'll find more than 600 islands and 1,500-plus species of fish.",
    //       end:"BEST HOTELS|THINGS TO DO"
    //     },
    //     {
    //         picbg:"https://th.bing.com/th/id/R.722781597bdfb946292b9aa10a0ec7b1?rik=8BjDgYW0%2bkGZtg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fb%2f7%2f699255-large-patagonia-wallpapers-1920x1080-for-ipad.jpg&ehk=N7K%2bP4g0%2bVqVFZPL%2bI3A2QqeusVmyngcEQXJJVGDAiw%3d&risl=&pid=ImgRaw&r=0",  
    //       pic:"https://travel.usnews.com/images/main_image_lOUOzDh.jpg",
    //       heading:"Argentine Patagonia",
    //       para:"Argentine Patagonia is a must-visit destination if you consider yourself an adventurous traveler. Otherworldly landscapes await you in Southern Patagonia, while endangered species (think: Magellanic penguins) roam Península Valdés",
    //       end:"BEST HOTELS|THINGS TO DO"
    //     },
    //     {
    //         picbg:"https://www.wallpapertip.com/wmimgs/5-52305_tasman-lake-on-south-island-new-zealand.jpg",  
    //       pic:"https://travel.usnews.com/images/edited_south_island_nz_getty_irma_ferreira_445x280_dxgXWlc.jpg",
    //       heading:"South Island, New Zealand",
    //       para:"New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers. Here, you can admire the mountains of Fiordland National Park, a UNESCO World Heritage Site, from hiking trails.",
    //       end:"BEST HOTELS|FLIGHTS|THINGS TO DO"
    //     }
    //   ]
    
    return (
        <div>
           {
                            List1.map((item,index)=>
                            <Cardtwo  key={index} item={item}  />
                            )
              
        }  

{/* {
                            List2.map((item,index)=>
                            <Cardtwo item={item} key={index}/>
                            )
              
        } */}

    </div>
    )
}
export default BestPlaces