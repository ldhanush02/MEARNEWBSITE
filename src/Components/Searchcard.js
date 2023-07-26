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
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../slices/userSlice';
import Loginpic from './Images1/Login.svg';
import Register from './Register';
import { FcSearch } from "react-icons/fc";
import Cardtwo from './Cardtwo';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaLuggageCart } from "react-icons/fa";
function Searchcard() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [found,setfound]=useState(true);
      const { register, handleSubmit, formState:{errors} } = useForm();
      let [searchData,setsearchData]=useState([]);
      let displayplace;
    const onSubmit = data =>{ 
        console.log(data)
        displayplace=data.SearchName
        axios.get("https://travellingagencywebsite.onrender.com/product-api/search-product/"+data.SearchName)
        .then((response)=>{
            if(response.data.message==="Search found"){
                    console.log(response.data.payload)
                    setsearchData(response.data.payload)
            }
            if(response.data.message==="Search Not found"){
                setfound(false)
            }
        })
        .catch((error)=>{
            console.log(error)
           alert("Something went wrong in searching places")
         })
  
      };
 
  return (
    <div>
        <div className='body1'>
          {(searchData.length==0)?
          <>
           {
               (found)?
               <><h1 className='Heading display-4  formtitle text-center pt-4 pb-4'>Please Search for any Place</h1></>
               :
               <>
               <h1 className='Heading display-4  formtitle text-center pt-4 pb-4 text-danger'>Currently, We are not providing trip to that Place</h1>
               </>
           }
          </>
          :
          <>
           <h1 className='Heading display-4  formtitle text-center pt-4 pb-4 text-success'>Element found</h1>
          {
              
              searchData.map((item,index)=>
              <Cardtwo key={index} item={item}/>

              )
              
          }


          </>

          }
           
           <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="SearchTitle" ><span className='searchicons pe-1 display-6'><FcSearch/></span>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter City Name (Eg: Paris)"
                autoFocus {...register("SearchName",{required: true})} 
              />
               {errors.SearchName?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
            </Form.Group>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
            Search
          </Button>
        </Modal.Footer>
   
          </Form>
          </Modal.Body>

      </Modal>

         </div>
  


         </div>
    </div>
  );
}

export default Searchcard;