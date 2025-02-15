import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const handleAnchorClick = (event, targetId) => {
    event.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });

    // Show hobbies alert only when clicking #About
    if (targetId === "#About") {
      alert("Hobbies: Photography, Coding, Cooking, Drawing");
    }
  };

  return (
    <div>
      <Header onAnchorClick={handleAnchorClick} />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; // Ensure this line is present
