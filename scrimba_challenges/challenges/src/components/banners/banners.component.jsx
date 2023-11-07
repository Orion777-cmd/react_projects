import React from "react";
import "./banners.styles.scss";

const Banners = ({status, children}) => {
    return (
        <div className={`banners-container ${status}`}>
            <div className={`banners-row`}>
               {children}
            </div>
        </div>
    )
}

export default Banners;