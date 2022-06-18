import React from "react";
import axios from "axios";
import BestPlaces from "./BestPlaces";
import Blog from "./Blog";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {MdFavorite} from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";



function Cardone(props){
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
        (state) => state.user
      );
    let navigate=useNavigate();
    const shifttoReg=()=>{
        navigate('/Reg')
    }
    const addFav =()=>{
        let data=props.item;
        data.Name=userObj.Name;
        let token=localStorage.getItem("token");
        axios.post('http://localhost:4000/favorite-api/put-fav',props.item,{
            headers:{ Authorization: "Bearer "+ token}
          })
        .then((response)=>{
            alert(response.data.message)
        })
        .catch((err)=>alert('Something went wrong in adding to favorite'))
    }
    return(
  
        <div >
                <div className="card p-2">
                <img className="w-100 d-block mx-auto" src={props.item.pic}></img>
                <div  style={{
                        textDecoration: "none",
                        color: "black"
                    }}>
                 <div className="card-body">
                 <h3 className="text-center ps-2">{props.item.heading}</h3>
                 <h5 className="text-center">{props.item.para}</h5>
                   <p className="text-center"><span className="likeicon2"><GiCommercialAirplane/></span>{props.item.end}</p>
                   <button className="btn-grad3 d-block mx-auto" onClick={addFav}><span className="text-danger likeicon"><MdFavorite/></span> Add to  Favorites List</button>
                 </div>
                 </div>
                
                 <button className="btn-grad2 d-block mx-auto" onClick={shifttoReg}><i class="fa-solid fa-suitcase"></i> Make My trip</button>
                 
                    </div>
                </div>

    )
};

export default Cardone