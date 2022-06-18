import videoBg from './Video/BG1.mp4';
import React from 'react';
import { Routes, Route, NavLink, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearLoginStatus } from "../slices/userSlice";
import { useDispatch } from 'react-redux';
import { Button,Dropdown } from 'react-bootstrap';
import {IoLogOutSharp,IoStar} from 'react-icons/io5';
import { RiLockPasswordFill } from "react-icons/ri";
import {MdOutlineAccountCircle} from 'react-icons/md';
import Search from './Search';
import { FaRegRegistered } from "react-icons/fa";

function Navbar() {
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
        (state) => state.user
      );
      let dispath = useDispatch();
      const navigate=useNavigate();
    const Logout =()=>{
      localStorage.clear();
      dispath(clearLoginStatus());
      navigate("/");
    }
    const ShiftAccount=()=>{
        navigate('/MyAccount')
    }
    const ChangePass=()=>{
        navigate('/ChangePassword')
    }

  return (
      <div>
                      <div className="container-fluid">
                    <div >
                    <video  autoPlay muted loop
            style={
              {
                position:"absolute",
                width:"100%",
                height:"180%",
                left:"50%",
                right:"50%",
                objectFit:"cover",
                transform: "translate(-50%, -50%)",
                zIndex:"-1"
              }
            }
            >
                <source src={videoBg} type='video/mp4'/>
              </video>

                    <nav className="navbar sticky-top navbar-expand-xxl navbar-dark">
                    <div className="container">
                        <a href="#" className="navbar-brand text-info">
              <img className='d-block mx-auto mt-1' src='https://res.cloudinary.com/ddtaj2w6b/image/upload/v1654702034/Personal/LD_uqxuwk.png' 
              width='100px' height="100px"></img>
                        </a>
                        <Search/>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="menu">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item me-4 ">
                                    <NavLink  className="nav-link text-info" to=""><i class="fa-solid fa-house"></i>Home</NavLink >
                                </li>
                                <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-info" to="BestPlaces" ><i class="fa-solid fa-landmark"></i>Best Places</NavLink >
                                </li>

                                
                                {
                                    (isSuccess===true)?(
                                        <>
                                        {
                                            (userObj.Type=="admin")?
                                            (<>
                                    <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-info" to="AddCard" ><i class="fa-solid fa-pen-to-square"></i>Add New Place</NavLink >
                                   </li> 
                                   <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-info" to="UpdateCard" ><i class="fa-solid fa-pen-to-square"></i>Update Place</NavLink >
                                   </li> 
                                   <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-info" to="DeleteCard" ><i class="fa-solid fa-pen-to-square"></i>Delete Place</NavLink >
                                   </li> 

                                            </>)
                                            :
                                            (<>
                                <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-info" to="Reg" ><i class="fa-solid fa-pen-to-square"></i>Register</NavLink >
                                </li> 
                                <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-info" to="Favorites" ><span className='star text-info'><IoStar/></span>Favorites</NavLink >
                                </li>
                                <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-info" to="Table" ><FaRegRegistered/>Registration Table</NavLink >
                                </li>

                                            </>)
                                        }
                                        <Dropdown>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic" className='bg-secondary'>
                                            <img src={userObj.profileImg} className="myPic" />
                                            <h6 className='text-warning'>{userObj.Name}</h6>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item className='Nameicons fw-bold '  onClick={ShiftAccount} ><span className='display-6 text-info pe-4'><MdOutlineAccountCircle/></span>My Account</Dropdown.Item>
                                            <Dropdown.Item className='Nameicons fw-bold ' onClick={ChangePass}><span className='display-6 text-success pe-4'><RiLockPasswordFill/></span>Change Password</Dropdown.Item>
                                            <Dropdown.Item className='Nameicons fw-bold ' onClick={Logout} ><span className='display-6 text-danger pe-4'><IoLogOutSharp/></span>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>

                                        </>

                                    ):
                                    (
                                    <>
                                 <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-info" to="Login" ><i class="fa-solid fa-right-to-bracket"></i>Login/Register</NavLink >
                                </li>
                                    </>
                                    )
                                }

                            </ul>
                        </div>
                    </div>
        
        
                </nav>
                <div >
                        <Outlet/>
                </div>
                    </div>
            </div>

      </div>

  );
}

export default Navbar;