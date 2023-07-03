import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Head from "./Components/Head";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    document.querySelectorAll("img").forEach((image) => {
      image.setAttribute("loading", "lazy");
    });
  });
  return (
    <div className="min-h-screen w-full relative font-serif bg-neutral-200 text-black parent">
      <Header />
      <Hero />
      <Head />
      <Footer />
    </div>
  );
};

export default App;
