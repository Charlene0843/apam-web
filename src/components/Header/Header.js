import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import { useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";
import Menu from "./Menu";

const Header = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [contactShow, setContactShow] = useState(false);








    return (
        <>
            <nav>
                <img src={process.env.PUBLIC_URL + '/img/logo/apam_logo.png'} alt="logo" onClick={() => { navigate('/') }} />
                <div className="menu"
                    style={toggle ? { position: 'fixed' } : {}}
                >

                    <ReactSVG
                        className="burger-cross"
                        src={process.env.PUBLIC_URL + '/img/burger_menu_cross.svg'}
                        onClick={() => setToggle(!toggle)}
                        style={toggle ? { opacity: '1' } : { opacity: '0' }} />

                    <ReactSVG
                        className="burger"
                        src={process.env.PUBLIC_URL + '/img/Burger_Mene.svg'}

                        style={toggle ? { opacity: '0' } : { opacity: '1' }} />

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setContactShow(true);
                        }}
                    >聯絡我們</button>
                </div>
                <ContactUs
                    contactShow={contactShow}
                    setContactShow={setContactShow}
                />
            </nav>
            <Menu
                toggle={toggle}
                setToggle={setToggle} />
        </>

    )
}
export default Header;