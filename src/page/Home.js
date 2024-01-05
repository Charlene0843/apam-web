import React from "react";

import { ReactSVG } from "react-svg";


const Home = () => {

    return (
        <div className="home-wrapper">
            <ReactSVG
                className="dec-green"
                src={process.env.PUBLIC_URL + 'img/decorations/green-1.svg'} />
            <ReactSVG
                className="dec-orange"
                src={process.env.PUBLIC_URL + 'img/decorations/orange-1.svg'} />
            <nav>
                <img src={process.env.PUBLIC_URL + '/img/logo/apam_logo.png'} alt="logo" />
                <div className="menu">
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/Burger_Mene.svg'} />
                    <button>聯絡我們</button>
                </div>
            </nav>
            <div className='banner'>
                <p className="banner-logo">Shining Text Animation Effects</p>
                <ReactSVG
                    className="banner-logo"
                    src={process.env.PUBLIC_URL + '/img/logo/apam_logo_L.svg'} />

            </div>

        </div>

    )
}

export default Home;