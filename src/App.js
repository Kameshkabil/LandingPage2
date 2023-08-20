import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar';
import Slider from './Slider';
import MenProduct from './MenProduct';
import KidProduct from './KidProduct';
import WomenProduct from './WomenProduct';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
     
      <Route index element={<><div class='title'>
                <h5>CLARKS <span className='text-danger'>SHOES</span></h5>
            </div><Slider /></>} />
      <Route path="mens" element={<><div class='title'>
                <h5>CLARKS <span className='text-danger'>MENS </span>SHOES</h5>
            </div><MenProduct/></>}/>
      <Route path="womens" element={<><div class='title'>
                <h5>CLARKS <span className='text-danger'>WOMENS </span>SHOES</h5>
            </div><WomenProduct/></>}/>
      <Route path="kids" element={<><div class='title'>
                <h5>CLARKS <span className='text-danger'>KIDS </span>SHOES</h5>
            </div><KidProduct/></>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
