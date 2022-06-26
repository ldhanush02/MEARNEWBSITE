import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCard from './Components/AddCard';
import BestPlaces from './Components/BestPlaces';
import Blog from './Components/Blog';
import ChangePassword from './Components/ChangePassword';
import DeleteCard from './Components/DeleteCard';
import Favorites from './Components/Favorites';
import ForgetPassword from './Components/ForgetPassword';
import Home from './Components/Home';
import Login from './Components/Login';
import Logo from './Components/Logo';
import MyAccount from './Components/MyAccount';
import Navbar from './Components/Navbar';
import Payment from './Components/Payment';
import Reg from "./Components/Reg";
import Register from './Components/Register';
import RegTable from './Components/RegTable';
import UpdateCard from './Components/UpdateCard';
import videoBg from './Components/Video/BG1.mp4';
import Searchcard from './Components/Searchcard';
import Logo1 from './Components/Logo1'
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate=useNavigate();
    const tranfertoBlog=()=>{
      navigate('/Blog')
    }

  return (
    <div>
 
          <Navbar/>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/BestPlaces" element={<BestPlaces />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="Reg" element={<Reg />} />
                <Route path="Logo" element={<Logo />} />
                <Route path="Logo1" element={<Logo1 />} />
                <Route path="MyAccount" element={<MyAccount />}/>

                <Route path="Login" element={<Login />} />
                <Route path="Register" element={<Register />}/>
                <Route path="AddCard" element={<AddCard />}/>
                <Route path="UpdateCard" element={<UpdateCard />}/>
                <Route path="DeleteCard" element={<DeleteCard />}/>
                <Route path="ForgetPassword" element={<ForgetPassword />}/>
                <Route path="ChangePassword" element={<ChangePassword />}/>
                <Route path="Table" element={<RegTable />}/>
                <Route path="Payment" element={<Payment />}/>
                <Route path="Favorites" element={<Favorites />}/>
                <Route path="Search" element={<Searchcard />}/>
                <Route path="/Navbar" element={<Navbar />}/>
              </Routes>

              <div class="card-footer text-light">
              <video  autoPlay muted loop
            style={
              {
                position:"absolute",
                width:"100%",
                height:"84%",
                left:"50%",
                right:"50%",
                objectFit:"cover",
                transform: "translate(-50%,-5%)",
                zIndex:"-1"
              }
            }
            >
                <source src={videoBg} type='video/mp4'/>
              </video>
                    <div className="row pt-5 mt-5">
                        <div class="col ms-4 mt-5">
                            <a href="#" class="navbar-brand text-light">
                                <img width="120px" height="120px"
                                    src="https://res.cloudinary.com/ddtaj2w6b/image/upload/v1654702034/Personal/LD_uqxuwk.png"
                                    alt=""></img></a>
                                    <p className='brandlast'>IT'S A BRAND</p>
                        </div>
                        <div className="col last">
                                <h4>ADDRESS</h4><hr/>
                                <p>Post box No. 10</p>
                                <p>Harita, Housar-635 108</p>
                                <p>Ph:8897450872 </p>
                                <p>Fax: 04344-276865</p>
                        </div>
                        <div className="col last">
                            <h4>CALL US ON</h4><hr/>
                            <p>Toll Free: 18002587444</p>
                            <p>Ph:+91-9177100359</p>
                        </div>
                        <div className="col text-center mt-3 last">
                             <h5>Email:</h5>
                            <h6>ldhanush02@gmail.com</h6>
                            <h6>20071a6933@vnrvjiet.in</h6>
                            <button onClick={tranfertoBlog} class="d-block mx-auto btn-grad">ABOUT US</button>
                            
                        </div>
                    </div>

            </div>


    </div>
  )};

export default App;
