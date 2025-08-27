import React from 'react'
import Apple from "../svg/Apple.svg";
import Playstore from "../svg/Playstore.svg";
import "./ctasection.css";
import PhoneMock from './PhoneMock';

const CTASection = () => {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-left">
        <h2 id="cta-heading">Ready to Transform Your Event Experience?</h2>
        <p>Join thousands of businesses and vendors on our platform and take your events to the next level. Download AJARRA on Google Play or the App Store.</p>

        <div className="store-badges" >
          <button className="badge" >
            <span className="logo" >
              <img src={Apple} alt="Apple" />
              </span>
              Download on the
            App Store
            
          </button>

          <button className="badge" aria-label="Get it on Google Play" style={{ background: "#111" }}>
            <span className="logo" aria-hidden>
              <img src={Playstore} alt="Playstore" />
            </span>
            GET IT ON 
            Google Play
          </button>
        </div>
      </div>

      <PhoneMock />
    </section>
  )
}

export default CTASection;
