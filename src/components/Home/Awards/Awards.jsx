import React from "react";
import {
  faTaxi,
  faUsers,
  faThumbsUp,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import AwardCards from "./AwardCards/AwardCards";
import './Award.css';
const awardsData = [
  {
    awardsTitle: "VEHICLES SERVICED",
    awardsNumber: "754",
    awardsIcon: faTaxi,
  },
  {
    awardsTitle: "HAPPY CLIENTS",
    awardsNumber: "4,469",
    awardsIcon: faUsers,
  },
  {
    awardsTitle: "PEOPLE LIKES",
    awardsNumber: "1,106",
    awardsIcon: faThumbsUp,
  },
  {
    awardsTitle: "AWARDS WON",
    awardsNumber: "154",
    awardsIcon: faTrophy,
  },
];

const Awards = () => {
  return (
    <section className='award-wrapper'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h3>We Got Many Award For Good Quality Work</h3>
            </div>
          </div>
          {awardsData.map((award) => (
            <div className="col-sm-4 col-md-3">
              <AwardCards award={award} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
