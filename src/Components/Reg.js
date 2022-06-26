import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import 'animate.css';
import Button from 'react-bootstrap/Button'
import {FcCalendar} from "react-icons/fc";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FcApproval} from "react-icons/fc";
import CreditCard from "./Images1/Creditlogo.svg"
import { useSelector, useDispatch } from "react-redux";
const Reg = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  let navigate=useNavigate();
    const onSubmit = data =>{ 
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      data.Time=date
      data.Name=userObj.Name
        console.log(data)
        let token=localStorage.getItem("token");
        axios.post("https://travellingagencywebsite.herokuapp.com/trip-api/create-trip",data,{
          headers:{ Authorization: "Bearer "+ token}
        })
        .then((response)=>{
            alert((response.data.message));
            if(response.data.message==="New Trip is Created"){
              navigate("/Payment")
            }
        })
        .catch((error)=>{
            console.log(error)
            alert("Something went wrong in Making Trip")
        })
    }


  return(
    <div className="container-fluid body-10 pb-4 pt-4" >
        <div className="container">
          <div className="formup">
          <h2 className="Heading display-4 text-warning formtitle text-center">Register</h2>
          </div>
 
       
       <Form onSubmit={handleSubmit(onSubmit)} className='formbreak text-center lead border border-6 w-75 mx-auto body1 p-5 shadow-lg text-center border rounded border-2 border-dark p-3 m-1 mt-3 form1 bg-white'>
    <div className='text-start'>
    <h1 className='googleFont fw-bold regtext'>Regisitration Form</h1>
    <p>Travel Anywhere in the World</p>
    <hr></hr>
    </div>

  <Form.Group className="mb-3" controlId="Email">
  <Form.Label className="fw-bolder fst-italic text-light">PickUp Place</Form.Label>
    <Form.Control type="text" placeholder="Enter PickUp point" {...register("Pickup",{required: true})}/>
    {errors.Pickup?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>


  <Form.Group className="mb-3" controlId="DOB">
  <Form.Label className='text-end fw-bolder fst-italic text-light'>Enter Date of Trip<FcCalendar/></Form.Label>
    <Form.Control type="date" {...register("DateofTravel",{required: true})} />
    {errors.DateofTravel?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="Email">
  <Form.Label className="fw-bolder fst-italic text-light">No of Members</Form.Label>
    <Form.Control type="text" placeholder="No of members" {...register("Members",{required: true})}/>
    {errors.Members?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>

  <Form.Label className="fw-bolder fst-italic text-light">Destination</Form.Label>
  <Form.Select aria-label="Gender" className='mb-3' {...register("City")}>
  <option disabled >Open this select menu</option>
  <option value="Paris" >Paris ( $75 )</option>
  <option value="Tokoyo">Tokoyo ( $45)</option>
  <option value="Rome">Rome ( $47 )</option>
  <option value="Tahiti">Tahiti ( $15 )</option>
  <option value="Glacier National Park">Glacier National Park ( $40 )</option>
  <option value="Maldives">Maldives ( $27 )</option>
</Form.Select>

<p className='terms'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
     You may receive SMS notifications from us and can opt out at any time.</p>
    <Button variant="success" size="lg" className='w-100' type='submit' >
    Pay & Register
  </Button>
</Form>
        </div>

        </div>
  )
}

export default Reg;