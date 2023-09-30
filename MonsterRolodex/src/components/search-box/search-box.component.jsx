import React  from "react";

import "./search-box.styles.css";

const Searchbox = ({placeholder, handleChange, className}) => {
    return (
        <input 
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={(e)=> handleChange(e)}
        />
    )
}

export default Searchbox;