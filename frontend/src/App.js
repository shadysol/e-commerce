import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Footer from './components/Footer'
import React from 'react';
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/userEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import styled from 'styled-components';

const MarginContainer = styled.div`
margin-top: 0%;  
margin-left: 5%;
margin-right: 5%;
padding-left: 2%;
padding-right: 2%;
`;


function App() {

  return (

    <BrowserRouter>
    <Header />
    <SubHeader />
    <main className='py-3'>
    <MarginContainer>
      <Routes>
      
    <Route exact path="/" element={<HomeScreen/>} />
    <Route path='/login' element={<LoginScreen/>} />
    <Route exact path="/product/:id" element={<ProductScreen/>} />
    <Route exact path='/cart/:id' element={<CartScreen/>} />
    <Route exact path='/cart' element={<CartScreen/>} />
    <Route path='/register' element={<RegisterScreen/>} />
    <Route path='/profile' element={<ProfileScreen/>} />
    <Route path='login/shipping' element={<ShippingScreen/>} />
    <Route path='/payment' element={<PaymentScreen/>} />
    <Route path='/placeorder' element={<PlaceOrderScreen/>} />
    <Route path='/order/:id' element={<OrderScreen/>} />
    <Route path='/admin/userlist' element={<UserListScreen/>} />
    <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
    <Route path='/admin/productlist' element={<ProductListScreen/>} />
    <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />
    <Route path='/admin/orderlist' element={<OrderListScreen/>} />
    <Route exact path='/search/:keyword' element={<HomeScreen/>} />
    <Route exact path='/page/:pageNumber' element={<HomeScreen/>} />
    <Route exact path='/search/:keyword/page/:pageNumber' element={<HomeScreen/>} />
    <Route exact path='/admin/productlist/:pageNumber' element={<ProductListScreen/>} />

    </Routes>
      
    </MarginContainer>
   </main>
   <Footer />
   </BrowserRouter>
   
  )
}

export default App;
