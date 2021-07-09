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
  const [user, setUser] = useState();
  // for users 
  // useEffect(() => {
  //   setUser(getUser());
  // }, [user]);

  // this is the bit that gets the data from backend
  const [eventjson, seteventjson] = useState();

  const getEvents = async () => {    
    const hope = await fetch("http://localhost:5000/events/");
    const data = await hope.json()
    seteventjson(hope);
    
  };
 
  useEffect(() => {
    getEvents(); 
  }, []);

  // seteventjson(fetch("http://localhost:5000/events/"))

  // let hope = fetch("http://localhost:5000/events/")

  // const hope = async () => { seteventjson(await fetch("http://localhost:5000/events"))}
  // const hope = await fetch("http://localhost:5000/events");

  // console.log(hope);
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

  // const onChange = (e) => {setNumberOfCats(e.target.value);};

  const showjson = (e) => {
    alert(JSON.stringify(eventjson));
  };

  return (
    <div>
      <input type="text" value={eventjson.message}  />
      <button onClick={showjson}>show alert with json</button>
      <div>{user ? <home /> : <login />}</div>

      <div>
        <img className={"logo"} src={img} alt="website logo" />
        <Header />
        <Body />
        <Events />
        <Locations />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
