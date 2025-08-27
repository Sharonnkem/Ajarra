import React from 'react'
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import "./solution.css";

const Solution = () => {
  return (
    <section className="solutions-wrap" aria-labelledby="solutions-heading">
      <header className="solutions-header">
        <h2 id="solutions-heading">Comprehensive Event Solutions</h2>
        <p>
          From full-service event management to connecting you with the perfect
          vendors, we&apos;ve got all your event needs covered.
        </p>
      </header>

      <div className="solutions-grid">
        <div className="features">
          <div className="feature">
            <h3>Events that fit your budget</h3>
            <p>
              Share your event details, requirements, and budget through our
              intuitive platform.
            </p>
          </div>

          <div className="feature">
            <h3>Professional Coordination.</h3>
            <p>
              Our system matches you with the perfect vendors based on your
              specific needs.
            </p>
          </div>

          <div className="feature">
            <h3>Access to exclusive vendor network.</h3>
            <p>
              Compare vendor profiles, reviews, and portfolios to make
              informed decisions.
            </p>
          </div>

          <div className="cta">
            <button className="btn-pill">
              Get Started
              <span className="icon-circle" style={{background:"#F3E9E2", color:"#424142"}} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="collage" aria-label="Event planning visuals">

          <figure className="card-main">
            <img src={card1} alt="Planner reviewing mood board and photos at a desk" />
          </figure>

          <figure className="card-side">
            <img src={card2} alt="Smiling woman with flowers set on a table" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Solution;
