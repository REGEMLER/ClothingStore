import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Pages/Home";
import Delivery from "./Pages/Delivery";
import Payment from "./Pages/Payment";
import Servis from "./Pages/Servis";
import Catalog from "./Pages/Catalog";
import Reference from "./Pages/Reference";
import Navibar from './Components/Navibar';
import Footer from './Components/Footer';

function App() {
  return (<>
      <Router>
    <Navibar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/delivery" element={<Delivery/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/servis" element={<Servis/>}/>
      <Route path="/reference" element={<Reference/>}/>
    </Routes>
    <Footer/>
    </Router>
  </>
  );
}

export default App;
