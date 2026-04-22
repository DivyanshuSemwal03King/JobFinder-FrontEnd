import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-col brand">
          <div className="logo">
            <div className="logo-icon">📦</div>
            <h2>JobFinder</h2>
          </div>
          <p>
            Connecting job seekers with opportunities near them.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Post a Job</a></li>
            <li><Link to="/jobseeker">Job Seeker Dashboard</Link></li>
            <li><a href="#">Employer Dashboard</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="contact">
            <li>📧 support@jobfinder.com</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>📍 San Francisco, CA</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 JobFinder. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;