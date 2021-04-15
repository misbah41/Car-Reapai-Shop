import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ChoseCard.css';
const ChoseCard = ({ data }) => {
  return (
    <div className="d-flex justify-content-aound mt-5">
      <div className="choseIcon">
        <FontAwesomeIcon icon={data.choseIcon} />
      </div>
      <div className="chose-content ml-3">
        <h5 className='chooseTitle'>{data.choseTitle}</h5>
        <small>{data.choseDesc}</small>
      </div>
    </div>
  );
};

export default ChoseCard;
