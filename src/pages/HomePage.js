import React from "react";
import Clients from "../components/Clients/Clients";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
    </>
  );
};

export default HomePage;
