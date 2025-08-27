import React from "react";
import main from "../images/main.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import "./hero.css";

const ArchFrame = () => {
  return (
    <div className="arch">
      <div className="arch-ring">
        <div className="arch-clip">
          <img
            src={main}
            alt="Gorgeous wedding reception with greenery and warm lights"
          />
        </div>
      </div>

      
      <div className="bubble vendor" aria-live="polite">
        <img className="avatar" src={avatar2} alt="Vendor avatar" />
        <div className="text">
          As a vendor, I can easily get clients and manage my
          bookings effortlessly.
        </div>
      </div>

      
      <div className="bubble planner" aria-live="polite">
        <img className="avatar" src={avatar1} alt="Planner avatar" />
        <div className="text">Event planning just got less stressful.</div>
      </div>
    </div>
  );
};

export default ArchFrame;

