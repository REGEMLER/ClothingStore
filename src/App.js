import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux';
import Home from "./Pages/Home";
import Delivery from "./Pages/Delivery";
import Payment from "./Pages/Payment";
import Servis from "./Pages/Servis";
import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";
import Reference from "./Pages/Reference";
import ProductPage from "./Pages/ProductPage";
import Constructor from "./Pages/Constructor";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Comments from "./Pages/Comments";
import Navibar from './Components/Navibar';
import Footer from './Components/Footer';

function App() {
  return (<>
  <Provider store={store}>
      <Router>
    <Navibar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/delivery" element={<Delivery/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/servis" element={<Servis/>}/>
      <Route path="/reference" element={<Reference/>}/>
      <Route path="/comments" element={<Comments/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/constructor" element={<Constructor/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
    </Router>
  </Provider>
  </>
  );
}

export default App;