import './App.css';
import PreNavBar from './components/PreNavBar.js'
import NavBar from './components/NavBar.js'
import Slider from './components/Slider.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import data from './data.json'
import Offers from './components/Offers';





function App() {
  return (
    <Router>
      <PreNavBar />
      <NavBar />
      <Slider  start={data.banner.start}/>
      <Offers offer ={data.offer} />

    </Router>
  );
}

export default App;
