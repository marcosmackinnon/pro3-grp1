import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <p>Integrantes del grupo:</p>
          <ul>
            <li>Marcos Mackinnon</li>
            <li>Vicente Pando</li>
            <li>Alfonso Do Amaral</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;