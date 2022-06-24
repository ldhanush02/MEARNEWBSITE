import 'animate.css';
import { Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
function DeleteCard() {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onFormSubmit = (data) =>{
              console.log(data)
              axios.delete("https://travellingagencywebsite.herokuapp.com/product-api/delete-card/"+data.heading)
              .then((response)=>{
                alert((response.data.message));
                console.log(response.data.payload);
            })
            .catch((error)=>{
                console.log(error)
                alert("Something went wrong in deleting Card")
            })
      }
  return (
      <div className='body1 container-fluid'>
          <Form className="w-50 mx-auto p-3 m-3" onSubmit={handleSubmit(onFormSubmit)}>
              <h1 className='Heading display-4  formtitle text-center'>Delete Card</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter City" {...register("heading",{required: true})}/>
    {errors.heading?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
 
  <Button variant="primary" className="d-block mx-auto p-2 ps-4 pe-4 fw-bolder fst-italic" type="submit">
    Submit
  </Button>
</Form>

      </div>

  );
}

export default DeleteCard;