import React from "react";
import "./toast.styles.scss";

const ToastPopups = ({children, status}) => {
    return (
        <div className={`toast-container ${status}`}>
            <div className="content-container">
                
                {children}
                
            </div>
        </div>
    )
}

export default ToastPopups;