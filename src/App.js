
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header'

import Shop from './components/Shop/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Review from './components/Review/Review';
function App() {
  return (
    
    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route path='/shop' element={<Shop></Shop>}></Route>
    <Route path='/product/:productKey' element={<ProductDetails></ProductDetails>}></Route>
    <Route path='/review' element={<Review></Review>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
