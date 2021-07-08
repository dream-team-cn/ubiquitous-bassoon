import "./App.css";
import Header from "./components/Header/header";
import Body from "./components/Body/body";
import Events from "./Pages/Events/";
import Locations from "./Pages/Locations/";
import img from "./img/whiteLogoAndTagline.png";

function App() {

  const [user, setUser] = useState();

  UseEffect(()=>{
    setUser(getuser());
  }),[user])

  return (
    <div>
      <div>{user ? <home /> : <logIN />}</div>

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
