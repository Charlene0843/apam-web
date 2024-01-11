import React from "react";
import { ReactSVG } from "react-svg";
const ContactUs = ({ contactShow, setContactShow }) => {
    return (
        <div
            className={`contact ${contactShow ? 'active' : ''}`}
        // onClick={()=>{setContactShow(!contactShow)}}
        //    style={contactShow ? { transform: 'translateX(0%)' } : { transform: 'translateX(100%)' }}
        // style={contactShow?{right:'500px'}:{right:'30px'}}
        // style={contactShow?{animation: 'slip-in 1s linear'}:{animation: 'slip-out 1s linear'}}
        // style={{
        //     transition: 'translate 3s linear',
        //     transform: `translateX(${contactShow}%)`,
        // }}
        // style={contactShow?{transform:'translateX(0%)'}:{transform:'translateX(100%)'}}
        >
            <ReactSVG
                className="burger-cross"
                src={process.env.PUBLIC_URL + '/img/burger_menu_cross.svg'}
                onClick={(e) => { setContactShow(false); e.stopPropagation(); }}
            />
        </div>
    )
}

export default ContactUs;