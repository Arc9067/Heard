import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Head from "./Components/Head";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full relative font-serif bg-neutral-200 text-black">
      <Header />
      <Hero />
      <Head />
      <Footer />
    </div>
  );
};

export default App;
