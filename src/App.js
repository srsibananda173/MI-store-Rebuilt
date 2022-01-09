import './App.css';
import PreNavBar from './components/PreNavBar.js'
import NavBar from './components/NavBar.js'
import Slider from './components/Slider.js'


// import banner from "./data/data.json
// import {banner} from "./data/data.json"
import data from './data.json'
import Offers from './components/Offers';





function App() {
  return (
    <div>
      <PreNavBar />
      <NavBar />
      <Slider  start={data.banner.start}/>
      <Offers offer ={data.offer} />

    </div>
  );
}

export default App;
