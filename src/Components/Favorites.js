import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Cardtwo from "./Cardtwo";
import videoBg from './Video/BG1.mp4';
import {useCart} from "react-use-cart"
import Cardfive from "./Cardfive";
import { useSelector } from "react-redux";
function Favorites(){
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
        (state) => state.user
      );
        let [favdata,setfavdata]=useState([]);
        axios.get('https://travellingagencywebsite.herokuapp.com/favorite-api/get-fav/'+userObj.Name)
        .then((response)=>{
            setfavdata(response.data.payload)
        })
        .catch((err)=>{alert('Something went wrong in getting from favorite')})
         return (

    <div>
        {
            (favdata.length==0)?
            <>
            <h1 className='Heading display-4 body1 formtitle text-center pt-4 pb-4'>Please Select any place to Favorites to view</h1>
            </>
            :
            <>
                        {
                            favdata.map((item,index)=>
                            <Cardfive item={item} key={index}/>
                            )
              
             }
            </>
        }

    </div>
    )
}
export default Favorites