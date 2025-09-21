import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import ShopCategory from'./Components/Pages/ShopCategory';
import Product from './Components/Pages/Product'
import Cart from './Components/Pages/Cart';
import Loginsignup from './Components/Pages/Loginsignup';
import Footer from './Components/Footer/Footer';
import Men_banner from './Components/Assets/Frontend_Assets/banner_mens.png';
import Women_banner from './Components/Assets/Frontend_Assets/banner_women.png';
import Kids_banner from './Components/Assets/Frontend_Assets/banner_kids.png';




function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner = {Men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={Women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={Kids_banner} category="kid"/>}/>
        
        <Route path='/product' element={<Product/>}>
             <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginsignup' element={<Loginsignup/>}/>  
      </Routes>
      
      <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
