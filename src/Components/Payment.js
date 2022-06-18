import 'animate.css';
import { FcApproval} from "react-icons/fc";
import CreditCard from "./Images1/Creditlogo.svg"
import Spinner from 'react-bootstrap/Spinner'
import { Route,Routes, useNavigate } from 'react-router-dom';
import Home from './Home';

function Payment() {
    const navigate=useNavigate();
    setTimeout(() => {
      navigate('/Table')
      
    }, 4000);
  return (
    <div className='body1 p-4'>
    <div className="bg-light animabox text-center shake mt-3 mx-auto">
            <img src={CreditCard} className='w-25 pt-3' />
                         <h1><FcApproval/></h1>
              <h1 className="text-success pb-3">Payment Done</h1>
              </div>
 </div>
  );
}

export default Payment;