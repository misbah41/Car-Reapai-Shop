import React from "react";
import Sidebar from "../SideBar/Sidebar";
import { useForm } from "react-hook-form";

const CreateAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data, e) => {
    e.preventDefault();
    data.createDate = new Date();
    fetch('https://obscure-hamlet-08357.herokuapp.com/adminAccess',{
      method: 'POST',
      headers: {'content-Type':'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success =>{
      if(success){
        alert('thank you for add adminAccess your greate review')
      }
    })
  }

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-8 pt-5">
          <form
            className="form-group col-sm-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input className="form-control my-3" {...register("name", { required: true })} placeholder="Enter Admin Name" />
            {errors.name && <span>Plese Enter Admin Name </span>}
            <input className="form-control my-3" {...register("email", { required: true })} placeholder="Enter Admin Email" />
            {errors.email && <span>Plese Enter Admin Email </span>}

            <input type="submit" />
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
