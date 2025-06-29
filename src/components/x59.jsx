import React from "react";

import headphone3 from '../assets/headphone3.png'

export default function XX59() {
  return (
    <section className="product container">
      <img
        src={headphone3}
        alt="product photo"
        width={540}
        height={560}
        className="proPhoto"
      />
      <div className="info">
        <h2 className="nameOfProduct">XX59 Headphones</h2>
        <p className="text">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <button className="btn">See Product</button>
      </div>
    </section>
  );
}