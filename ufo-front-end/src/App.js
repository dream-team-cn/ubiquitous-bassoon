import "./App.css";
import Header from "./components/Header/header";
import Body from "./components/Body/body";
import Events from "./Pages/Events/";
import Locations from "./Pages/Locations/";
import Navigation from "./pageNavigation";
import img from "./img/whiteLogoAndTagline.png";
import { getUser } from "./Utils/user";
import { useState, useEffect } from "react";

function App() {
  
  return (
    <div>
      <div>
        <img className={"logo"} src={img} alt="website logo" />
        <Header />
        <Body />
        <Locations />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
