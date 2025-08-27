import React from 'react'
import "./hero.css";
import ArchFrame from "./ArchFrame";
import RightGallery from "./RightGallery";


const Hero = () => {
  return (
    
      <section className="hero">
      <div className="hero-left">
        <div className="hero-div">
        <h1>
          Seamless <br />
          Event <br />
          Management <br />
          &amp; Vendor <br />
          Connections
        </h1>

        <p>
          Your one-stop platform for planning events and finding premium vendors.
          Streamline your event planning process from start to finish.
        </p>
        </div>

        <div className="hero-ctass">
          <button className="btn btn-outline" style={{background:"#D9B8A3", color:"#424142"}}>
            Get Started
            <span className="cta-icon" aria-hidden style={{background:"#F3E9E2", borderRadius: "100%", padding: "5px"}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>

          <button className="btn btn-outline" style={{background:"#FAF6F1", color:"#424142"}}>
            Get The App
          </button>
        </div>
      </div>

      <ArchFrame/>

      <RightGallery/>
    </section>
  
   
  )
}

export default Hero;
