import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer for the current page */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <p>© 2025 jobseekers.pvt. All rights reserved.</p>
        <p>
          Powered by <a href="https://github.com/freqcoder19">Barath</a>
        </p>
        <p>
          <Link to={"/PrivacyPolicy"}>Privacy Policy </Link> |
          <Link to={"/TermsofService"}> Terms of Service</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
