import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AwardCards = ({ award }) => {
  return (
    <div className="text-danger text-center">
      <div className="awardCard">
        <span>
          <FontAwesomeIcon icon={award.awardsIcon} />
        </span>
        <div className="award-content">
          <h4>{award.awardsTitle}</h4>
          <p>{award.awardsNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default AwardCards;
