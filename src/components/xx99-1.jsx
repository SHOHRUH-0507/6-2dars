import React from "react";

import headphone1 from "../assets/headphone1.png";

export default function XX991() {
  return (
    <section className="product2 container">
      <img
        src={headphone1}
        alt="product photo"
        width={540}
        height={560}
        className="proPhoto"
      />
      <div className="info">
        <h2 className="nameOfProduct">XX99 Mark I Headphones</h2>
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