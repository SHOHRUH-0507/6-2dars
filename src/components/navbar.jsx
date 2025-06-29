import React from "react";

import logo from "../assets/audiophile2.png";
import basket from "../assets/shopping.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="logo">
        <img src={logo} width={143} height={25} alt="logo" />
      </a>
      <ul className="listNav">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">HEADPHONES</a>
        </li>
        <li>
          <a href="#">SPEAKERS</a>
        </li>
        <li>
          <a href="#">EARPHONES</a>
        </li>
      </ul>

      <a href="#" className="basket">
        <img src={basket} width={23} height={20} alt="" />
      </a>
    </nav>
  );
}