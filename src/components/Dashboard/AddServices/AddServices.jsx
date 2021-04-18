import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";

const AddServices = () => {
  const [file, setFile] = useState(null);

  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("servicePrice", info.servicePrice);
    formData.append("discount", info.discount);
    formData.append("serviceOff", info.serviceOff);
    formData.append("description", info.description);

    fetch("http://localhost:3500/addService", {
      method: "POST",
      // headers: {'content-Type':'application/json'},
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('Service Added Successfully')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="container">
        <div className="row ">
          <form className="form-group col-sm-8" onSubmit={handleSubmit}>
            <input
              className="form-control my-3"
              placeholder="Service Name"
              onBlur={handleBlur}
              name="name"
            />

            <input
              className="form-control my-3"
              onBlur={handleBlur}
              placeholder="Service Price"
              name="servicePrice"
            />

            <input
              className="form-control my-3"
              placeholder="Service discount "
              onBlur={handleBlur}
              name="discount"
            />

            <input
              className="form-control my-3"
              onBlur={handleBlur}
              placeholder="Service Off "
              name="serviceOff"
            />

            <input
              type="file"
              className="form-control my-3"
              onChange={handleFileChange}
            />

            <textarea
              className="form-control my-3"
              placeholder="Description"
              onBlur={handleBlur}
              name="description"
            ></textarea>

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
