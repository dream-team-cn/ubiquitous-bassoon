import "./App.css";
import Header from "./components/Header/header";
import Body from "./components/Body/body";
import Events from "./Pages/Events/";
import Locations from "./Pages/Locations/";
import img from "./img/whiteLogoAndTagline.png";
import { getUser } from "./Utils/user";
import { useState, useEffect } from "react";
// import cors from "cors"
// import express from "express"
// import app from "express"


function App() {
  // console.log("twicw")
  const [user, setUser] = useState();

  // useEffect(() => {
  //   setUser(getUser());
  // }, [user]);
  
  const [eventjson, seteventjson] = useState({});
  
  const getEvents = async () => {
    console.log("test before const");

      const hope = () => {seteventjson(fetch("http://localhost:5000/events"))}
    // const hope = await fetch("http://localhost:5000/events");
    console.log("test after const");
    console.log(hope);
  //     method: "GET"
  //   });
  //     console.log("why")
  //   //     "https://api.thecatapi.com/v1/images/search?limit=" + numberOfCats
  //   //   );
  //   //   let data = await response.json();
  //   //   for (let i = 0; i < data.length; i++) {
  //   //     const cat = data[i];
  //   //     cat["name"] = faker.name.firstName();
  //   //     cat["age"] = faker.datatype.number(12);
  //   //     cat["price"] = faker.commerce.price(50, 100);
  //   //   }
  //   //   setCats(data);
  };

  getEvents();

  return (
    <div>
      {/* <div>{user ? <home /> : <login />}</div> */}

      <div>
        <img className={"logo"} src={img} alt="website logo" />
        <Header />
        <Body />
        <Events />
        <Locations />
      </div>
    </div>
  );
}

export default App;
