import React from "react";
import "./testimonials.styles.scss";
import QutoeLogo from "../../assets/Icon.svg"

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <div className="wrapper">
                <div className="image-container">

                </div>
                <div className="details-container">
                    <QutoeLogo />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus, harum architecto et hic fugiat blanditiis, commodi perspiciatis earum aspernatur</p>
                    <div className="personal-detail">
                        <p>May Anderson</p>
                        <p>Workstation, CTO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;