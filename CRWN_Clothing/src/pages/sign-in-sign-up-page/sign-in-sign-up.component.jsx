import React from "react";

import "./sign-in-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component"

const signInSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">

            <h1>Sign In</h1>
            <SignIn />
        </div>
    )
}

export default signInSignUpPage;