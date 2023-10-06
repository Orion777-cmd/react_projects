import React, {useState, useEffect} from 'react';
import { BrowserRouter,Routes,  Route,Navigate  } from 'react-router-dom';
import {onSnapshot} from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux"

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { setCurrentUser } from './redux/user/user.reducer';
import { toggleCartHidden, addItem } from './redux/cart/cart.reducer';


import Header from './components/Header/header-component';
import {createUserProfileDocument} from './firebase/firebase.utils'

import { selectCurrentUser } from './redux/user/user.selector';

function App() {
  const auth  = getAuth()
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  useEffect(()=>{
   
    const unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth =>{

      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }));
        })
      }
     dispatch(setCurrentUser(userAuth));
    },)

    return () =>{
      unsubscribeFromAuth();
    }
  },[setCurrentUser])
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
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