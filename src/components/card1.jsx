import React from "react";

import headphone1 from "../assets/headphone1.png";

export default function Card1() {
  return (
    <section className="card1 container">
      <img
        src={headphone1}
        alt="card1"
        width={540}
        height={560}
      />
      <div className="info">
        <span className="new">NEW PRODUCT</span>
        <h2 className="cardName">XX99 Mark II Headphones</h2>
        <p className="text">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className="btn">See Product</button>
      </div>
    </section>
  );
}