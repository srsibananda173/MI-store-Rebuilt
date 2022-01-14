import './App.css';
import PreNavBar from './components/PreNavBar.js'
import NavBar from './components/NavBar.js'
import Slider from './components/Slider.js'
import {BrowserRouter as Router} from 'react-router-dom'
import data from './data.json'
import Offers from './components/Offers'
import Heading from './components/Heading.js'
import StarProducts from './components/StarProducts.js'




function App() {
  return (
    <Router>
      <PreNavBar />
      <NavBar />
      <Slider  start={data.banner.start}/>
      <Offers offer ={data.offer} />
      <Heading  text = "STAR PRODUCTS" />
      <StarProducts StarProducts={data.starProduct} />
      <Heading text = "HOT ACCESSORIES" />

    </Router>
  );
}

export default App;
