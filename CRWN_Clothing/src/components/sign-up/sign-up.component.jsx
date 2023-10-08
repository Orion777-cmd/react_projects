import React, {useState} from "react"

import "./sign-up.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { createUserProfileDocument} from "../../firebase/firebase.utils"
import { getAuth, createUserWithEmailAndPassword ,  onAuthStateChanged} from "firebase/auth";
import {signUpStartAction} from "../../redux/user/user.reducer"
import {useDispatch} from "react-redux"
const SignUp = () => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState({
        displayName : "",
        email: "",
        password: "", 
        confirmPassword: ""
    })

    const handleSubmit = async (event) =>{
        event.preventDefault()
        
        const {displayName, email, password, confirmPassword} = inputValue;
        
        if (password !== confirmPassword){
            alert('passwords do not match')
            return ;
        }

        dispatch(signUpStartAction({ email, password, displayName }));

      
    }

    const handleChange = (event) =>{
        const {name, value} = event.target
        setInputValue(prevInputValue => ({
            ...prevInputValue,
            [name]: value
        }))
        console.log("inputValue: ", inputValue)
    }
    const {displayName, email, password, confirmPassword} = inputValue;
    return (
        
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>

                <FormInput
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                ></FormInput>
                <FormInput
                    type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label="email"
                    required
                ></FormInput>
                <FormInput
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label="password"
                    required
                ></FormInput>
                <FormInput
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                ></FormInput>

                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;