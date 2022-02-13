import React from "react";
import Home from "./Home";
import Book from "./Book";
import Contact from "./Contact";
import Footer from "./Footer";
import Packages from "./packages";
import Review from "./Review";
import Services from "./Services";
import Nav from "./Nav"
import Login from "./login";


function App() {
  return (
    <div className="App">
      <Login />
      <Nav />
      <Home />
      <Book />
      <Packages />
      <Services />
      <Contact />
      <Review />
      <Footer />


    </div>
  );
}

export default App;
