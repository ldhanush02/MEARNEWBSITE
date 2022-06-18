import React from "react";
import { useSelector } from 'react-redux';
import Account from './Images1/Account.svg';


function MyAccount(){
  // let [List1,setList1]=useState([]);
  //   axios.get("http://localhost:4000/product-api/get-cards")
  //   .then((response)=>{
  //     console.log(response.data.payload)
  //     setList1(response.data.payload)
  //   })
  //   .catch((err)=>{alert('err occured')})

  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
    
 

  
    
    return (
             <div className="fluid-container body1 pb-5 text-center">
            <h4 className="text-center Heading display-4 p-5 formtitle">My Account</h4>
            <hr></hr>
            <img src={Account} className="w-25"/>
            <hr></hr>
            <img  src={userObj.profileImg}  className="myPic1 d-block mx-auto p-3" />
            <h1 className="mt-4 display-4 text-primary"><span> NAME : </span>{userObj.Name}</h1>
            <h2 className="mt-4 display-6 text-secondary"><span>User Type : </span>{userObj.Type}</h2>
            <h2 className="mt-4 display-6 text-secondary"><span>Email Id : </span>{userObj.Email}</h2>
            <h2 className="mt-4 display-6 text-secondary"><span>Date of Birth : </span>{userObj.DOB}</h2>
            <h2 className="mt-4 display-6 text-secondary"><span>Gender :</span>{userObj.Gender}</h2>
            </div>
         
    )
}
export default MyAccount