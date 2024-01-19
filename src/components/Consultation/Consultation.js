import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import ContactUs from "../Header/ContactUs";

const Consultation = () => {
    const [contactShow, setContactShow] = useState(false);
    return (

        <div className="lets-talk">
            <p>APAM</p>
            <p>協助實現您的新藍圖</p>
            <span className="vertical-line"></span>
            <div className="more" onClick={() => { setContactShow(true) }}>
                <span>立即諮詢</span>
                <ReactSVG src={process.env.PUBLIC_URL + '/img/arrow.svg'} />
            </div>
            <div className="background-decoration">LET'S TALK</div>

            <ContactUs
                contactShow={contactShow}
                setContactShow={setContactShow}
            />
        </div>
    )
}

export default Consultation;