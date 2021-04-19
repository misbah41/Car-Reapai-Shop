import React from "react";

const FooterSubscribe = () => {
  return (
    <div className="col-sm-10 mb-3 mt-5">
      <form className="form-group d-flex">
        <input
          className="form-control mr-sm-2"
          type="email"
          name='email'
          placeholder="Your Email"
          aria-label="Search"
        />
        <button className="btn-subcribe my-2 my-sm-0" type="submit">
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default FooterSubscribe;
