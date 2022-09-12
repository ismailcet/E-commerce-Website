import React from "react";

const EmailSubs = () => {
  return (
    <div className="email-subs">
      <h1 className="email-title">Subscribe Our Newsletter</h1>
      <p className="email-info">
        Get the latest information and promo offers directly
      </p>
      <div className="email-subs-form">
        <form action="" className="email-form">
          <input
            type="email"
            className="email-input"
            placeholder="Input email address"
          />
          <a href="" className="btn email-btn">
            Get Started
          </a>
        </form>
      </div>
    </div>
  );
};

export default EmailSubs;
