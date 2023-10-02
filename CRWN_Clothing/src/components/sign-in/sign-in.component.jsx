import React, { useState } from "react";

import "./sign-in.styles.scss"

import FormInput from "..//form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
       
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
                

                <CustomButton type="submit" >Sign In</CustomButton>
            </form>
        </div>
    )
}

export default SignIn;