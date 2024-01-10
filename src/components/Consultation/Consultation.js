import React from "react";
import { ReactSVG } from "react-svg";

const Consultation = () => {
    return(

        <div className="lets-talk">
        <p>APAM</p>
        <p>協助實現您的新藍圖</p>
        <span className="vertical-line"></span>
        <div className="more">
            <span>立即諮詢</span>
            <ReactSVG src={process.env.PUBLIC_URL + '/img/arrow.svg'} />
        </div>
        <div className="background-decoration">LET'S TALK</div>

    </div>
    )
}

export default Consultation;