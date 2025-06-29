import React from "react";

import people from "../assets/people.png";

export default function About() {
  return (
    <section className="sectionAbout container">
      <div className="infoAbout">
        <h2 className="about">Bringing you the <span className="aboutSpan">best</span> audio gear</h2>
        <p className="aboutText">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={people} alt="person" width={540} height={588} />
    </section>
  );
}