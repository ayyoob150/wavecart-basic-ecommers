import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home  from './component/Home';
import Cart from './component/Cart';
import Layout from './component/Layout';
import { createContext,useState,useEffect } from 'react';
import Product from './component/Product';
import Payment from './payment/Payment';

export const context = createContext(null);

function App() {
  const [data, setData] = useState([]);
  const [listcart, setListcart] = useState([]);
  const [total, setTotal] = useState(0);

  console.log('home',listcart);

  console.log(listcart.length);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setData(data))
  },[])
  return (
  <context.Provider value={{
    data, setData,
    listcart, setListcart,
    total, setTotal
  
  }}>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
    <Route path='/cart/payment' element={<Payment/>}/>
  </Routes>
  </context.Provider>
  
  );
}

export default App;
