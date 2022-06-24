import 'animate.css';
import { Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
function UpdateCard() {
    const { register, handleSubmit, formState:{errors} } = useForm();
    let [img,setImg]=useState(null);
    const onImageSelect =(event) =>{
        setImg(event.target.files[0]);
        console.log(event);
    }
    const onFormSubmit = (Data) =>{
              console.log(Data)
              let formData=new FormData();
              formData.append("userObj",JSON.stringify(Data));
              formData.append("photo",img);
              axios.put("https://travellingagencywebsite.herokuapp.com/product-api/update-card", formData)
              .then((response)=>{
                  alert((response.data.message));
              })
              .catch((error)=>{
                  console.log(error)
                  alert("Something went wrong in updating Card")
              })
      }
  return (
      <div className='body1 container-fluid'>
          <Form className="w-50 mx-auto p-3 m-3" onSubmit={handleSubmit(onFormSubmit)}>
              <h1 className='Heading display-4  formtitle text-center'>Update Card</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter City" {...register("heading",{required: true})}/>
    {errors.heading?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter Cost" {...register("cost",{required: true})}/>
    {errors.cost?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter Ending" {...register("end",{required: true})}/>
    {errors.end?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter Background url" {...register("picbg",{required: true})}/>
    {errors.picbg?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
   <Form.Group controlId="formFile" className="mb-3">
     <Form.Label className="fw-bolder fst-italic text-light">Choose Photo for City</Form.Label>
     <Form.Control type="file" {...register("photo1",{required: true})}
     onChange={(event)=> onImageSelect(event)}
     />
     {errors.Photo?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
   </Form.Group>
   <Form.Group
       className="mb-3"
       controlId="exampleForm.ControlTextarea1"
     >
       <Form.Control as="textarea" rows={4} placeholder="Enter Description" {...register("para",{required: true})}/>
       {errors.para?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
     </Form.Group>
  <Button variant="primary" className="d-block mx-auto p-2 ps-4 pe-4 fw-bolder fst-italic" type="submit">
    Submit
  </Button>
</Form>

      </div>

  );
}

export default UpdateCard;