import React, {useState, useEffect} from 'react';
import { BrowserRouter,Routes,  Route,Navigate  } from 'react-router-dom';
import {onSnapshot} from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux"
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactUs from './pages/contact/contact.component';

import { setCurrentUser } from './redux/user/user.reducer';
import { toggleCartHidden, addItem } from './redux/cart/cart.reducer';


import Header from './components/Header/header-component';
import {createUserProfileDocument, addShopDataAndDocuments} from './firebase/firebase.utils'

import { selectCurrentUser } from './redux/user/user.selector';
import {selectShopDataForPreview} from "./redux/shop/shop.selector"
import { checkUserSessionAction } from './redux/user/user.reducer';
import { getShopDataStartAction } from './redux/shop/shop.reducer';


function App() {
  const auth  = getAuth()
  const {currentUser, shopData} = useSelector(createStructuredSelector({
    
    currentUser: selectCurrentUser,
    shopData: selectShopDataForPreview
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSessionAction())

  },[])
  if(currentUser){
    dispatch(getShopDataStartAction())
  }
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route
          exact
          path="/signin"
          element={
            currentUser ? <Navigate to="/" /> : <SignInSignUpPage />}
        />

      </Routes>`
    </BrowserRouter>
  
  );
}


export default App;