import React from "react";
import ToastPopups from "../../components/toast/toast.component";
import "./toastPage.styles.scss"

const ToastPage = () => {
    return (
        <div className="toastpage-container">
            <ToastPopups status="success">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="detail-container">
                    <p className="label-text">Success</p>
                    <p className="message-detail">Your Work has been saved.</p>
                </div>
            </ToastPopups>
            <ToastPopups status="warning">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="detail-container">
                    <p className="label-text">warning</p>
                    <p className="message-detail">A newtwork error was detected.</p>
                </div>
            </ToastPopups>
            <ToastPopups status="neutral">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="detail-container">
                    <p className="label-text">Information</p>
                    <p className="message-detail">Please read updated information.</p>
                </div>
            </ToastPopups>
            <ToastPopups status="error">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#F87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="detail-container">
                    <p className="label-text">Error</p>
                    <p className="message-detail">Please re-save your work again.</p>
                </div>
            </ToastPopups>
        </div>
        
    )
}

export default ToastPage;