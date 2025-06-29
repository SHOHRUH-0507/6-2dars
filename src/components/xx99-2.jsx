import React from "react";

import headphone2 from '../assets/headphone2.png'

export default function XX992() {
  return (
    <section className="product container ">
      <img
        src={headphone2}
        alt="product photo"
        width={540}
        height={560}
        className="proPhoto"
      />
      <div className="info">
        <span className="new">NEW PRODUCT</span>
        <h2 className="nameOfProduct">XX99 Mark II Headphones</h2>
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