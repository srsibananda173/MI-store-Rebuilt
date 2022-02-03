import './App.css';
import PreNavBar from './components/PreNavBar.js'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slider from './components/Slider.js'
import data from './data.json'
import Offers from './components/Offers'
import Heading from './components/Heading.js'
import StarProducts from './components/StarProducts.js'
import HotAccessorriesMenu from './components/HotAccessorriesMenu.js'
import HotAccessories from './components/HotAccessories.js'




function App() {
  return (
    <Router>
        <PreNavBar />
        <NavBar />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProducts StarProducts={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessorriesMenu />


        <Route exact path="/music">
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
        </Route>

        <Route exact path="/smartDevice">
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
        </Route>
        <Route exact path="/home">
          <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
        </Route>
        <Route exact path="/lifeStyle">
          <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
        </Route>
        
        <Route exact path="/mobileAccessories">
          <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories}mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
        </Route>





     </Router>
  );
}

export default App;
