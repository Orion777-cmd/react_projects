import React, { useState } from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import "./sign-in.styles.scss"

import FormInput from "..//form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const auth = getAuth()
            const temp = await signInWithEmailAndPassword(auth, email, password)
            console.log(temp)
            setEmail('')
            setPassword('')
        }catch(err){
            console.error(err.code, err.message)
        }
        
       
    }

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                 type="email" 
                 name="email" 
                 value={email} 
                 label="email"
                 handleChange={handleChange} 
                 required />
              
                <FormInput 
                type="password" 
                name="password" 
                value={password}
                label="password" 
                handleChange={handleChange} 
                required/>
                
                <div className="buttons">
                    <CustomButton
                    type="submit" 
                    
                    >
                        Sign In
                    </CustomButton>
                    <CustomButton
                    type="submit" 
                    onClick={signInWithGoogle}
                    isGoogleSignIn
                    >
                    Sign In With Google
                    </CustomButton>
                </div>
                
            </form>
        </div>
    )
}

export default SignIn;