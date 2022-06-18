import 'animate.css';
import { useEffect, useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useForm } from "react-hook-form";
import { AiFillYoutube,AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import { userLogin } from '../slices/userSlice';
import Loginpic from './Images1/Login.svg';
import Register from './Register';
import { FcSearch } from "react-icons/fc";
import Searchcard from './Searchcard';
function Search() {
    let navigate=useNavigate();
    const ShiftSearch = () =>{ 
        navigate('/Logo1');
  
      };
  return (
    <div>
        <div>
         <button onClick={ShiftSearch} className='rounded-pill text-dark bg-light searchicon border border-info pe-4 ps-2'><span className='searchicons pe-3 ps-2'><FcSearch/></span>Search</button>
         </div>
      
    </div>
    
  );
}
export default Search;