import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({infoData}) => {
  return (
    <>
      <span><FontAwesomeIcon icon={infoData.infoIcon} /></span>
      <h5>{infoData.infoTitle}</h5>
      <small>{infoData.infoPost}</small>
    </>
  );
};

export default InfoCard;