import React, { useEffect } from 'react';
import Cardfour from './Cardfour';
import Cardone from './Cardone'
import Cardthree from './Cardthree';
import Cardtwo from './Cardtwo'
import videoBg2 from './Video/BG2.mp4'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
function Home() {

  let [List1,setList1]=useState([]);
  useEffect(()=>{
  axios.get("https://travellingagencywebsite.onrender.com/product-api/get-cards")
  .then((response)=>{
    console.log(response.data.payload)
    setList1(response.data.payload)
  })
  .catch((err)=>{alert('err occured')})},{})
  let navigate=useNavigate();
  const tranfertoreg=()=>{
    navigate('/Reg')
  }


  return (
    <div>
    <video  autoPlay muted loop
    style={
      {
        position:"absolute",
        width:"100%",
        height:"100%",
        left:"50%",
        right:"50%",
        objectFit:"cover",
        transform: "translate(-50%,0%)",
        zIndex:"-1"
      }
    }
    >
        <source src={videoBg2} type='video/mp4'/>

      </video>
      <div className='container example'>
      <div className='text-end text-light '>
      <div className='Title'>
      <h1 className='display-1 pt-1 head'>TRAVEL</h1>
            <h1 className='display-1 head'>ANY WHERE</h1>
            <h1 className='display-1 head'>IN THE</h1>
            <h1 className='display-1 head'>WORLD<i class="fa-solid fa-earth-africa"></i></h1>
      </div>
     
      <button onClick={tranfertoreg} className='btn-grad float-end'><i class="fa-solid fa-suitcase-rolling"></i> Make my trip</button>
      
          
        </div>
      </div>

      <div className='container-fluid d-flex card-group body1 parent'>
        {
                            List1.map((item)=>
                            <Cardone item={item}/>
                            )
              
        }
      </div>
      
            </div>
  )};

  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>

export default Home;
