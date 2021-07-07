import './App.css';
import Header from './components/Header/header';
import Body from './components/Body/body';
import img from './img/whiteLogoAndTagline.png';

function App() {
  return (
    <div>
    <img className={"logo"} src={img} alt='website logo' />
        <Header />
        <Body />
        
    </div>
  );
}

export default App;
