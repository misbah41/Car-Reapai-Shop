import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../SideBar/Sidebar";

const Review = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    data.createDate = new Date();
    fetch('https://obscure-hamlet-08357.herokuapp.com/addReview',{
      method: 'POST',
      headers: {'content-Type':'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success =>{
      if(success){
        alert('thank you for give me your greate review')
      }
    })
  }






  return (
    <div className="d-flex" id='reviews'>
      <div>
        <Sidebar />
      </div>
      <div className="container">
        <div className="row ">
          <form
            className="form-group col-sm-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input className="form-control my-3" {...register("name", { required: true })} placeholder="Enter Your Name" />
            {errors.name && <span>Plese Enter Your Name </span>}
            <input className="form-control my-3" {...register("email", { required: true })} placeholder="Enter Your Email" />
            {errors.email && <span>Plese Enter Your Name </span>}
            <input className="form-control my-3" {...register("company", { required: true })} placeholder="Company Name" />
            {errors.company && <span>This field is required</span>}

            <input className="form-control my-3" {...register("position", { required: true })} placeholder="Enter Your Position (CEO)" />
            {errors.position && <span>This field is required</span>}

            <textarea className="form-control my-3" {...register("description", { required: true })} placeholder="Description"></textarea>
            {errors.description && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
