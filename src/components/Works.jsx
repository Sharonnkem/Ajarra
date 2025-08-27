import React from 'react'
import pattern from "../svg/pattern.svg";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import "./works.css";

const Works = () => {
  return (
    <section className="works">
      <div>
        <h2>
            How It Works
        </h2>
        <p>
            A simple, streamlined process for both event planners and vendors.
        </p>
      </div>
      <div className="together">
        <div className="plan">
            <img className="pat1" src={pattern} alt="Design pattern" />
            <img className="photo"  src={image1} alt="Wedding photo" />
            <img className="pat2" src={pattern} alt="Degin pattern" />
        </div>

        <div className="features ">
            <h2>
                For Event Planners
            </h2>

            <div className=" dot-icon"><span></span>
            <div className="feature">
            
            <h3>Define Your Event</h3>
            <p>
              Share your event details, requirements, and budget through our intuitive platform.
            </p>
          </div>
          </div>

          <div className=" dot-icon"><span></span>
          <div className="feature">
            <h3>Get Matched</h3>
            <p>
              Our system matches you with the perfect vendors based on your specific needs.
            </p>
          </div>
          </div>

          <div className=" dot-icon"><span></span>
          <div className="feature">
            <h3>Review & Select</h3>
            <p>
              Compare vendor profiles, reviews, and portfolios to make informed decisions.
            </p>
          </div>
          </div>

          <div className=" dot-icon"><span></span>
          <div className="feature">
            <h3>Coordinate & Execute</h3>
            <p>
              Manage all communications and logistics through our centralized platform.
            </p>
          </div>
          </div>

          <div  className= "vendor-btn">
            <button className="btn btn-primary">Plan Your Event</button>
          </div>
        </div>
      </div>

      <div className="together">
        

        <div className="features ">
            <h2>
                For Event Vendors
            </h2>

            <div className=" dot-icon"><span></span>
            <div className="feature">
            
            <h3>Create Your Profile</h3>
            <p>
              Showcase your services, portfolio, and pricing to attract the right clients.
            </p>
          </div>
          </div>

          <div className=" dot-icon"><span></span>
          <div className="feature">
            <h3>Get Discovered</h3>
            <p>
              Our algorithm matches you with events that align with your expertise and availability. </p>
          </div>
          </div>

          <div className=" dot-icon"><span></span>
          <div className="feature">
            <h3>Receive Inquiries</h3>
            <p>
              Get notified when event planners are interested in your services.
            </p>
          </div>
          </div>

          <div className=" dot-icon"><span></span>
          <div className="feature">
            <h3>Deliver Excellence</h3>
            <p>
              Provide outstanding service and build your reputation on our platform.
            </p>
          </div>
          </div>

          <div className= "vendor-btn">
            <button className="btn btn-primary">Become a Vendor</button>
          </div>
        </div>

        <div className="plan">
            <img className="pat3" src={pattern} alt="Design pattern" />
            <img className="photo"  src={image2} alt="Wedding photo" />
            <img className="pat4" src={pattern} alt="Degin pattern" />
        </div>
      </div>
    </section>
  )
}

export default Works
