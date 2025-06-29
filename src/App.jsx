// src/App.jsx

import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Card1></Card1>
      <Card2></Card2>
      <Card3></Card3>
      <About></About>
      <Footer ></Footer>
    </div>
  );
}
