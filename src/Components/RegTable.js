import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Register from './Register';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import {Navbar,Nav,Container,NavDropdown,FormControl} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { Route,Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Travel from './Images1/Travel.svg'
import {Table} from 'react-bootstrap'
import { RiDeleteBin3Fill} from "react-icons/ri";
import Offcanvas from 'react-bootstrap/Offcanvas'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { FaLuggageCart } from "react-icons/fa";
function RegTable() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const navigate=useNavigate();
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
      (state) => state.user
    );

      let [Data,setData]=useState(0);
      let [Datafinal,setDatafinal]=useState(0);
      useEffect(
        ()=>{
          axios.delete('https://travellingagencywebsite.onrender.com/trip-api/delete-trips/'+userObj.Name+'/'+Data)
            .then((response)=>{
              console.log(response.data.message)
            })
            .catch((err)=>{
              alert('Something went wrong in Canceling Trip')
            })


        },[Datafinal]
      )

    let [List1,setList1]=useState([]);
        axios.get("https://travellingagencywebsite.herokuapp.com/trip-api/get-trips/"+userObj.Name)
        .then((response)=>{
          setList1(response.data.payload)
    
        })
        .catch((err)=>{
          alert("Something went wrong in getting Trip details")
        })

  return (
    <div className='body1'>
    <div className='text-center p-5'>
    <h1 className='Heading display-4  formtitle text-center'>Registration Table</h1>
    <img src={Travel} className="w-25 mx-auto d-block"/>
    {
      (List1.length!=0)?(
        <>
         <h1 className='Heading display-6 text-secondary formtitle text-center'>If you cancel trip money will be refunded back</h1>
         <Table striped bordered hover variant="dark" className='mt-3'>
          <thead>
            <tr>
              <th className='lead fw-bold'>S.No</th>
              <th className='lead fw-bold'>Registration Date</th>
              <th className='lead fw-bold'>PickUp</th>
              <th className='lead fw-bold'>Destination</th>
              <th className='lead fw-bold'>No of Members</th>
              <th className='lead fw-bold'>Trip Date</th>
              <th className="bg-danger text-light">Cancel Trip</th>
            </tr>
          </thead>
        
        {
          List1.map((item,index)=>
          <tbody>
          <tr>
            <td className='lead'>{index+1}</td>
            <td className='lead'>{item.Time}</td>
            <td className='lead'>{item.Pickup}</td>
            <td className='lead'>{item.City}</td>
            <td className='lead'>{item.Members}</td>
            <td className='lead'>{item.DateofTravel}</td>
            <td className='lead'><Button className="bg-danger text-light" 
            onClick={()=>{
              setData(item.DateofRegister)
              handleShow()
            }}><RiDeleteBin3Fill/></Button></td>
          </tr>
        </tbody>
        )
         }
           </Table>
        
        </>

      ):(<>
          <h1 className='Heading display-4  formtitle text-center'>Table is empty please make a trip</h1>
        </>
      )
    };

 </div>


      <Offcanvas show={show} onHide={handleClose} backdrop={false} className="text-center">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="CancelTitle text-danger"><span className='cancelicons pe-1 display-4 text-secondary'><FaLuggageCart/></span>Cancel Trip</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='lastwarning'>
       Do you want to cancel the Trip?
       <hr></hr>
       <Button onClick={()=>{
          handleClose() 
          setDatafinal(Data)
          } }  className="mt-3 mb-3 ms-2 me-2 ps-5 pe-5 pt-2 pb-2" variant="info">Yes</Button>
        <Button className="mt-3 mb-3 ms-2 me-2 ps-5 pe-5 pt-2 pb-2" variant="danger" onClick={handleClose}>No</Button>
        </Offcanvas.Body>
        
 
 
      </Offcanvas>

 </div>
  );
}

export default RegTable;