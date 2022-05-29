import React from "react";

import eye from "../img/eye.png";
import rocket from "../img/rocket.svg";
import RoadMap from "./RoadMap";

const WhatWeDo = () => {
  return (
    <div className="whatwedo" id="navbar">
      <div className="what-banner">
        <h1>What We Do</h1>
      </div>

      <div className="what-container">
        <div className="whatwedo-inner-cn">
           <div className="what-card">
          <div className="what-svg">
            <img src={rocket} alt="Peniel Day" />
          </div>

          <div className="podcast-title">
            <h1>missions</h1>
          </div>

          <p>
            Street & Prisons Outreach in Nigeria. Scholarships. Training and
            counseling of sponsored adolescents. Ultimately build a sustainable
            system where saved and educated adolescents can pay it forward.
          </p>
        </div>

        <div className="what-card">
          <div className="what-svg">
            <img src={eye} alt="Peniel Day" style={{ width: "20rem" }} />
          </div>

          <div className="podcast-title">
            <h1>vision</h1>
          </div>

          <p>
            To see adolescents in Nigeria saved and have access to good
            education.
          </p>
        </div>

        <div className="what-card">
          <div className="podcast-title">
            <h1>activities</h1>
          </div>

          <p>
            Below are the kinds of activities that we hope to get involved in as
            time goes on. We are concerned about doing all within our power to
            reach out to adolescents in Nigeria with the love of Christ, that
            their lives may be saved.
          </p>
        </div>
        
        <RoadMap />
        </div>
       
      </div>
    </div>
  );
};

export default WhatWeDo;
