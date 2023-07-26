import axios from "axios";
import React, { useEffect, useState } from "react";
import {useCart} from "react-use-cart"
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {MdFavorite} from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
function Cardfive(props){
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
        (state) => state.user
      );
    let navigate=useNavigate();
    let [deldata,setdeldata]=useState({});
    useEffect(()=>{
       
        axios.delete('https://travellingagencywebsite.onrender.com/favorite-api/delete-fav/'+deldata.Name+'/'+deldata.heading)
        .then((response)=>{
            console.log(response.data.message)
        })
        .catch((err)=>alert('Something went wrong in deleting from favorite'))
    },[deldata])

    const toreg=()=>{
        navigate('/Reg')
    }
    return(
        <div>
            <div className="fluid-container text-center pt-5 pb-5" style={
                {
                    backgroundImage: 
                    `url(${props.item.picbg})`  ,
                           height:'100%',
                           width: '100%',
                           backgroundAttachment: "fixed",
                           backgroundPosition: "center",
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover"
                           
                }

            }>
                <div className="card p-2 d-block mx-auto mt-3 mb-3">
                <img className="w-100 d-block mx-auto" src={props.item.pic}></img>

                 <div className="card-body">
                 <div  style={{
                        textDecoration: "none",
                        color: "black"
                    }}>
                 <h3 className="text-center ps-2">{props.item.heading}</h3>
                 <h5 className="text-center">{props.item.para}</h5>
                   <p className="ps-4"><span className="likeicon2"><GiCommercialAirplane/></span>{props.item.end}</p>
                   </div>
                   <button className="btn-grad3 d-block mx-auto" onClick={()=>{setdeldata(props.item)}}>
                   <span className="text-dark likeicon1"><MdFavorite/></span>Delete from Favorites</button>
                    </div>
                    
                 

                    <button className="btn-grad2 d-block mx-auto" onClick={toreg}><i class="fa-solid fa-suitcase"></i> Make My trip</button>
                                          
                </div>

            </div>

        </div>

    )
};

export default Cardfive