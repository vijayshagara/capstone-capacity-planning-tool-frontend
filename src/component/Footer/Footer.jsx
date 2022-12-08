import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted" id="foot">© 2022 Company, Inc</p>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item" id="foot">
              <span className="nav-link px-2 text-muted" id="foot">Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link px-2 text-muted" id="foot">Features</span>
            </li>
            <li className="nav-item">
              <span className="nav-link px-2 text-muted" id="foot">Pricing</span>
            </li>
            <li className="nav-item">
              <span className="nav-link px-2 text-muted">FAQs</span>
            </li>
            <li className="nav-item">
              <span className="nav-link px-2 text-muted" id="foot">About</span>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
