import React from "react";

import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import Navbar from "./navbar";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Navbar></Navbar>
        <div className="footer">
          <div className="Textfooter">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          <ul className="logoss">
            <li>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}