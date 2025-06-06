import React from "react";
import { useState } from "react";
import { Navbar } from "./components";
import "./App.css"
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
function App() {
  return (
    <>
      <div>
         <Navbar />
        <Header />
        
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels/>
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
