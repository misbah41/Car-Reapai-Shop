import React from "react";
import {
  faDesktop,
  faPumpSoap,
  faTaxi,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ChoseCard from "../ChoseCard/ChoseCard";
import chooseImage from '../Chose/chose.jpg';
import './Choose.css';
const choseData = [
  {
    id:"647gdbdge64",
    choseTitle: "BEST DIAGNOSTICS",
    choseDesc: "Lorem ipsum dolor sit amet, consectetur",
    choseIcon: faDesktop,
  },
  {
    id:"bdgs46357sb",
    choseTitle: "BEST MATERIALS",
    choseDesc: "Lorem ipsum dolor sit amet, consectetur",
    choseIcon: faPumpSoap,
  },
  {
    id:"ggte6gbdge64",
    choseTitle: "BEST PROFESSIONAL",
    choseDesc: "Lorem ipsum dolor sit amet, consectetur",
    choseIcon: faUser,
  },
  {
    id:"8kiys736bsg",
    choseTitle: "BEST SERVICES",
    choseDesc: "Lorem ipsum dolor sit amet, consectetur",
    choseIcon: faTaxi,
  },
];

const Chose = () => {
  return (
    <div className="chose-wrapper mb-5 ">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
          <img style={{width:'100%', height:'350px'}} src={chooseImage} alt=""/>
          </div>
          <div  className="col-sm-7 ">
            <h3 className='text-center'>Why Choose Us ?</h3>
            <div className="row mt-5 justify-content-center">
              {choseData.map((data) => (
                <div className="col-sm-12 col-md-6">
                  <ChoseCard key={data.id} data={data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chose;
