import React, { useState } from "react";
import "./faq.css";



const ITEMS = [
  {
    id: 1,
    q: "What types of events do you handle?",
    a:
      "We specialize in delivering exceptional services for all events — from conferences and product launches to team-building experiences, weddings, birthdays, and other celebrations. Whether it’s an intimate gathering of 10 or a large-scale event with over 10,000 attendees, we handle it with precision and creativity."
  },
  {
    id: 2,
    q: "Is there customer support available?",
    a:
      "Yes. Our support team is available to assist you during planning and on event days with coordination, vendor issues, and troubleshooting. Premium plans include dedicated account managers."
  },
  {
    id: 3,
    q: "How do you handle event changes or cancellations?",
    a:
      "Our platform supports flexible change management. We notify vendors immediately, adjust bookings, and assist with rescheduling. Cancellation policies vary by vendor; we surface those terms during booking."
  },
  {
    id: 4,
    q: "How do I get matched with events?",
    a:
      "You provide your preferences, specialties, and availability. Our matching engine uses your profile and historical rating to suggest events and vendors most aligned with your offerings."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-head">
        <h3 id="faq-heading">Frequently Asked Questions</h3>
        <p>Get answers to common questions about Ajarra event market place.</p>
      </div>

      <div className="accordion" role="list">
        {ITEMS.map(item => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id}>
              <div
                className="faq-item"
                role="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <div className="question">{item.q}</div>
                <div className="chev" aria-hidden>
                  {isOpen ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 15l6-6 6 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>

              {isOpen && (
                <div className="answer" role="region" aria-live="polite">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ
