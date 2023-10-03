import React, {useState, useEffect} from 'react';
import { BrowserRouter,Routes,  Route } from 'react-router-dom';
import {onSnapshot} from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux"

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';

import { setCurrentUser } from './redux/user/user.reducer';


import Header from './components/Header/header-component';
import {createUserProfileDocument} from './firebase/firebase.utils'

function App() {
  const auth  = getAuth()
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
    },[setCurrentUser])

    return () =>{
      unsubscribeFromAuth();
    }
  })
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInSignUpPage />} />
      </Routes>`
    </BrowserRouter>
  
  );
}


export default App;