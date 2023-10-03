import React, {useState, useEffect} from 'react';
import { BrowserRouter,Routes,  Route } from 'react-router-dom';
import {onSnapshot} from "firebase/firestore"

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';


import Header from './components/Header/header-component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=>{
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{

      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snaphot => {
          setCurrentUser({
            id: snaphot.id,
            ...onSnapshot.data()
          });
        })
      }
      setCurrentUser(userAuth);
    })

    return () =>{
      unsubscribeFromAuth();
    }
  })
  return (
    
    <BrowserRouter>
      <Header currentUser={currentUser}/>
      <Routes>
        
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInSignUpPage />} />
      </Routes>`
    </BrowserRouter>
  
  );
}

export default App;