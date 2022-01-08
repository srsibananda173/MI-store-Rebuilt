import './App.css';
import PreNavBar from './components/PreNavBar.js'
import NavBar from './components/NavBar.js'
import Slider from './components/Slider.js'
// import banner from "./data/data.json
// import {banner} from "./data/data.json"




const banner1 =  {
  "start": [
        "https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif",
        "https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg",
        "https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg",
        "https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg",
        "https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg",
        "https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg",
        "https://i02.appmifile.com/860_operator_in/09/06/2021/15c70c1f59ef4aad235531578c3d1757.jpg",
        "https://i02.appmifile.com/279_operator_in/08/06/2021/072acd0a667c5a0e045ed50a9064c531.jpg",
        "https://i02.appmifile.com/417_operator_in/04/06/2021/36c1c9f10ac411c5ba304d30d60ca234.jpg",
        "https://i02.appmifile.com/172_operator_in/08/06/2021/44c5407a6c9ede6d782bebfd70cecc24.jpg",
        "https://i02.appmifile.com/667_operator_in/09/06/2021/eca16c5a1a97b1f30cedb943e144e2e0.jpg",
        "https://i02.appmifile.com/934_operator_in/07/06/2021/372a6e5d29c26c34b716b0408a533e3f.jpg"
  ],
  "end": [
        {
              "name": "MI 11X",
              "description": "What makes the Mi 11X a huge disruptor is its price tag. It comes with what we call “crazy Xiaomi pricing”",
              "source": "TechPP",
              "image": "https://i02.appmifile.com/708_operator_in/10/05/2021/2b7fc56c3b3c44f4b11bd9bd2b255749.jpg"
        },
        {
              "name": "MI 11X PRO",
              "description": "It is easily the most affordable device with a Snapdragon 888 chip and a 108-megapixel camera in the market right now",
              "source": "TechPP",
              "image": "https://i02.appmifile.com/191_operator_in/10/05/2021/4ccd175347800225dd6b47eb35166e2e.jpg"
        },
        {
              "name": "REDMI NOTE 10 PRO MAX",
              "description": "The Redmi Note 10 Pro Max’s macro camera captures the tiniest piece of details to stitch together some very good images.",
              "source": "India Today",
              "image": "https://i02.appmifile.com/52_operator_in/15/03/2021/7f91bdb2f227f8bd679fa96ac2a9fc1f.jpg"
        },
        {
              "name": "REDMI NOTE 10",
              "description": "The deep contrasts and the richness that AMOLED brings along add a much-needed dimension to the smartphone.",
              "source": "TechPP",
              "image": "https://i02.appmifile.com/107_operator_in/17/03/2021/fa9bab9cbad1629076b04a17a655559c.jpg"
        },
        {
              "name": "MI 10I",
              "description": "The Mi 10i clicks authentic, true-to-life photos with an abundance of details in every shot.",
              "source": "91Mobiles",
              "image": "https://i02.appmifile.com/85_operator_in/11/01/2021/b7600815ae26854c451a39ee88431098.jpg"
        },
        {
              "name": "MI QLED TV 4K",
              "description": "Redefining Value for Premium TVs",
              "image": "https://i02.appmifile.com/108_operator_in/13/01/2021/3bfe5123ede27524d616f0bdaf43945a.jpg"
        },
        {
              "name": "MI 10T PRO",
              "description": "Mi 10T Pro is a clear winner in the premium segment",
              "source": "FoneArena",
              "image": "https://i02.appmifile.com/843_operator_in/28/12/2020/226c73c386cf35e47fa0079b3534085f.jpg"
        },
        {
              "name": "REDMI 9 POWER",
              "description": "In under an hour, the phone was charged around 80 percent plus, which is more than enough battery for two days.",
              "source": "Indian Express",
              "image": "https://i02.appmifile.com/779_operator_in/28/12/2020/55bbda7ebbb47f674213dead3c0fefdf.jpg"
        },
        {
              "name": "MI SMART WATER PURIFIER",
              "description": "Mi Smart Water Purifier: The Epitome Of Minimalism",
              "source": "Mr.Phone",
              "image": "https://i01.appmifile.com/webfile/globalimg/in/cms/97E65ECC-E105-9A20-6BD7-8A3235104C57.jpg"
        },
        {
              "name": "MI SOUNDBAR",
              "description": "We Looked Hard, But There Really Are no Faults.",
              "source": "TechPP",
              "image": "https://i01.appmifile.com/webfile/globalimg/in/cms/40F52E34-A946-E8B3-29F2-BBE4A5C7BEEE.jpg"
        }
  ]
}

function App() {
  return (
    <div>
      <PreNavBar />
      <NavBar />
      <Slider  start={banner1.start}/>

    </div>
  );
}

export default App;
