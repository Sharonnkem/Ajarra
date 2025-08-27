import React, { useState } from "react";
import Apple from "../svg/Apple.svg";
import Playstore from "../svg/Playstore.svg";
import message from "../svg/message.svg";
import facebook from "../svg/facebook.svg";
import tiktok from "../svg/tiktok.svg";
import instagram from "../svg/instagram.svg";
import twitter from "../svg/twitter.svg";
import "./footer.css";



const Footer = () => {
    const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 2200);
    }
  }
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="col about">
          <p className="about-text">
            <b>Ajarra</b> has revolutionized the way businesses approach event planning and vendor management.
            We bridge the gap between event organizers and service providers, creating seamless connections
            that drive exceptional experiences.
          </p>

          <p className="download-note">Download AJARRA on Google Play or the App Store.</p>

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

        <div className="col links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Vendors</a></li>
          </ul>
        </div>

        <div className="col links">
          <h4>Terms</h4>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="col touch">
          <h4>Information</h4>
          <p className="touch-note">
            Have a question? Give us a call. we’d love to hear from you.
          </p>
          <div style={{display:"flex", color:"#ffff"}}><img src={message} alt="message" /> <p> admin@ajarra.com</p></div>
          </div>

        <div className="col touch">
          <h4>Get in Touch</h4>
          <p className="touch-note">
            Get access to exclusive deals and discounts when you sign up for our newsletter.
          </p>

          <form className="subscribe-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="visually-hidden">Email Address</label>
            <input
              id="email"
              type="email"
              className="email-input"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="subscribe-btn" type="submit" aria-label="Subscribe">
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>

          <div className="socials" >
            <div className="social"><img src={facebook} alt="facebook" /></div>
            <div className="social"><img src={tiktok} alt="tiktok" /></div>
            <div className="social"><img src={instagram} alt="instagram" /></div>
            <div className="social"><img src={twitter} alt="twitter" /></div>
          </div>
        </div>
      </div>

      <div className="footer-line" />

      <div className="container footer-bottom">
        <div className="copy">© Copyright 2025, All Rights Reserved by <strong>Ajarra</strong></div>
      </div>
    </footer>
  )
}

export default Footer
