import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";

export default function Header() {
  return (
    <header className="container header">
      <Navbar></Navbar>
      <Hero></Hero>
    </header>
  );
}