import React from "react"
import {Link } from "react-router-dom"

import "./header.styles.scss"
import logo from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase.utils"


const Header = ({currentUser}) => {
   return (
    <div className="header">
        <Link to="/" className="logo-container">
            <img src={`${logo}`} alt="crown logo image" className="logo" />
        </Link>

        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/contact" className="option">Contact</Link>
            {/* <Link to="/signin" className="option">Sign In</Link> */}
            {
                currentUser?
                <div className="option" onClick={()=>{auth.signOut()}}>SIGN OUT</div>:
                <Link className="option" to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
   )
}

export default Header; 