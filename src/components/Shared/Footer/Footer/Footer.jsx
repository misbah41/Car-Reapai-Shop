import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <section className='footerWrapper'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="usefullLink">
              <h3>Usefull Links</h3>
              <ul>
                <li>Body Building</li>
                <li>Fitness Classes</li>
                <li>Weight lifting</li>
                <li>Yoga Courses</li>
                <li>Training</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="usefullLink">
              <h3>Services</h3>
              <ul>
                <li>Oil Change</li>
                <li>Engine Service</li>
                <li>Wheel Alignment</li>
                <li>Looking Glass</li>
                <li>Coloring</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="usefullLink">
              <h3>Opening Hours</h3>
              <ul>
                <li>Mon - Tues : <small>6.00 am - 10.00 pm</small></li>
                <li>Wednes - Thurs : <small>8.00 am - 6.00 pm</small></li>
                <li>Fri: <small>3.00 pm - 8.00 pm</small></li>
                <li>Sun <small>Closed</small></li>
                <li>Coloring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;