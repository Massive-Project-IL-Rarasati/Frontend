import React from "react";
import Hero from "../components/Hero";
import Puppies from "../components/Puppies";
import Artikel from "../components/Artikel";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <div className="">
      <Hero />
      <Puppies />
      <Artikel />
      <Footer />
    </div>
  );
};

export default Beranda;
