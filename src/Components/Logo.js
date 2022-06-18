import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Register from './Register';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import {Navbar,Nav,Container,NavDropdown,FormControl} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { Route,Routes, useNavigate } from 'react-router-dom';
import Home from './Home';






function Logo() {
    const navigate=useNavigate();
    setTimeout(() => {
      navigate('/')
      
    }, 4000);
  return (
    <div className='body1'>
    <div className='logo container-fluid text-center p-5 '>
      <img className='d-block mx-auto w-25 rounded-pill  ' src="https://res.cloudinary.com/ddtaj2w6b/image/upload/v1654702034/Personal/LD_uqxuwk.png" />
      <h1 className='display-4 title1 '>LOKAM DHANUSH</h1>
      <Button variant="primary" disabled>
    <Spinner 
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>

 </div>
 </div>
  );
}

export default Logo;