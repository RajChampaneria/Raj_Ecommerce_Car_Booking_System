// import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import UserInfo from './Pages/UserInfo';
import Products from './Pages/Products';
import UpdateProducts from './Pages/UpdateProducts'
import SingleProduct from './Pages/SingleProduct';
import EditUser from './Pages/EditUser';
import AddUser from './AddUser';
import Addproduct from './Pages/AddProduct';
import AddToCart from './Pages/AddToCart';
import CategoryProduct from './Pages/CategoryProduct';
import { useState } from 'react';
import Protec from './Pages/Protec';






function App() {
  const [val, setval] = useState()
  const categoryselection = (xyz)=>{
    setval(xyz)
  }


  return (
    <div className="App">


      <BrowserRouter>
        <Header name={categoryselection}/>

        <Routes>
          {/* <Route path='/AddToCart' element={<Protec xyz={AddToCart}/>} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='Register' element={<Register />} />
          <Route path='UserInfo' element={<UserInfo />} />
          <Route path='Products' element={<Products />} />
          <Route path='UpdateProducts' element={<UpdateProducts />} />
          <Route path='/SingleProduct/:id' element={<SingleProduct />} />
          <Route path='/EditUser' element={<EditUser />} />
          <Route path='AddUser' element={<AddUser />} />
          <Route path='Addproduct' element={< Addproduct />} />
          <Route path='/AddToCart' element={<AddToCart />} />
          <Route path='/category/A' element={<CategoryProduct name={val} />} />
          <Route path='/category/B' element={<CategoryProduct name={val} />} />
          <Route path='/category/C' element={<CategoryProduct name={val} />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
