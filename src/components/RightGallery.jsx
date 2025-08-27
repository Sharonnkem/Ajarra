import React from "react";
import right1 from "../images/right1.png";
import right2 from "../images/right2.png";
import right3 from "../images/right3.png";
import "./hero.css";

const RightGallery = () => {
  return (
    <aside className="right-stack" aria-label="Event highlights">
      <figure className="card">
        <img src={right1} alt="Elegant ballroom venue" />
      </figure>
      <figure className="card">
        <img src={right2} alt="Birthday/party balloon decor" />
      </figure>
      <figure className="card">
        <img src={right3} alt="Wedding aisle with arch decor" />
      </figure>
    </aside>
  );
};

export default RightGallery;
