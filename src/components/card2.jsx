import React from "react";

import headphone2 from '../assets/headphone2.png'

export default function Card2() {
  return (
    <section className="card2 container ">
      <img
        src={headphone2}
        alt="card2"
        width={540}
        height={560}
      />
      <div className="info">
        <h2 className="cardName">XX99 Mark I Headphones</h2>
        <p className="text">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <button className="btn">See Product</button>
      </div>
    </section>
  );
}