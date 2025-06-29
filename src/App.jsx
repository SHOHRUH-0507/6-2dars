// src/App.jsx

import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import X59 from "./components/x59";
import XX99_1 from "./components/xx99-1";
import XX99_2 from "./components/xx99-2";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <XX99_1 />
      <XX99_2 />
      <X59 />
      <About />
      <Footer />
    </div>
  );
}
