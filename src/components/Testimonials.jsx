import React, { useState, useEffect } from "react";
import trust1 from "../images/trust1.png";
import trust2 from "../images/trust2.png";
import trust3 from "../images/trust3.png";
import quoteIcon from "../svg/quote.svg"; 
import "./testimonials.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Ajarra transformed our annual conference planning process. The vendor connections saved us countless hours of research and negotiation.",
    name: "Sarah Johnson",
    role: "Events Director, NexaCorp",
    avatar: trust1,
  },
  {
    id: 2,
    quote:
      "The end-to-end event management service exceeded our expectations. Every detail was handled professionally.",
    name: "Daniel Ikor",
    role: "Marketing Manager, Global Retail",
    avatar: trust2,
  },
  {
    id: 3,
    quote:
      "We found the perfect vendor quickly and the communication tools made coordination painless.",
    name: "Tunde Ade",
    role: "Founder, LaunchCo",
    avatar: trust3,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="stars" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 .587l3.668 7.431L23.4 9.75l-5.668 5.528L18.9 24 12 20.201 5.1 24l1.168-8.722L.6 9.75l7.732-1.732z" />
        </svg>
      ))}
    </div>
  );
}

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visible = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
  ];

  return (
    <section className="testimonials-section">
      <h3>Over 1000+ people trust us</h3>
      <p className="lead">
        Don’t just take our word for it. Here’s what businesses and vendors have
        to say about Ajarra.
      </p>

      <div className="testimonial-slider">
        <div className="testimonial-cards">
          {visible.map((t) => (
            <article key={t.id} className="testimonial-card">
              <img className="avatar" src={t.avatar} alt={t.name} />

              <p className="quote">
                <img src={quoteIcon} alt="quote icon" className="quote-icon" />
                {t.quote}
              </p>

              <div className="meta">
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
                <Stars count={5} />
              </div>
            </article>
          ))}
        </div>

        <div className="edge-card right">
          <article className="testimonial-card small">
            <img
              className="avatar"
              src={testimonials[(startIndex + 2) % testimonials.length].avatar}
              alt="preview avatar"
            />
          </article>
        </div>

        <div className="edge-card left">
          <article className="testimonial-card small">
            <img
              className="avatar"
              src={
                testimonials[
                  (startIndex - 1 + testimonials.length) % testimonials.length
                ].avatar
              }
              alt="preview avatar"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
