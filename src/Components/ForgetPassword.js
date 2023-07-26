import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {FcCalendar} from "react-icons/fc";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FPimage from './Images1/ForgetPassword.svg'
function ForgetPassword() {
    let navigate=useNavigate();
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = data =>{ 
        console.log(data)
        axios.put("http://localhost:4000/user-api/ForgetPassword",data)
        .then((response)=>{
            alert((response.data.message));
            if(response.data.message==="Password Changed"){
              navigate("/Login")
            }
        })
        .catch((error)=>{
            console.log(error)
            alert("Something went wrong in Changing Password")
        })
      };
  return (
    <div className='register body1 p-3'>
         <h1 className='Heading display-4  formtitle text-center'>Forget Password</h1>
         <img src={FPimage} className="w-25 mx-auto d-block"/>
 <Form onSubmit={handleSubmit(onSubmit)} className='shadow-lg text-center border rounded border-2 border-dark  w-50 p-3 m-1 mt-3 mx-auto form1 bg-white'>

    <Form.Group className="mb-3 " controlId="Name">
    <Form.Control type="text" placeholder="Name" {...register("Name",{required: true})} />
    {errors.Name?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="Password">
    <Form.Control type="password" placeholder= "New Password" {...register("Password",{required: true})} />
    {errors.Password?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>

    <Button variant="success" size="lg" className='w-100' type='submit'>
    Submit
  </Button>
</Form>
    </div>
  );
}

export default ForgetPassword;