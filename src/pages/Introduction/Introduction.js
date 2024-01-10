import React from "react";
import { ReactSVG } from "react-svg";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Marquee from "../../components/Marquee/Marquee";

const Introduction = () => {
    return (
        <div className="home-wrapper">
            <Header />
            <div className="introduction">
                <BannerTitle
                    title={'公司介紹'}
                    subtitle={'about'}
                />
                <div className="banner">
                    <p>
                        Actions speak louder than words. Persistence propels triumph. Adversity forges discipline. Manners maketh man.  More than a brand— APAM embodies a dynamic spirit, unwavering commitment, and enduring impact.
                    </p>
                    <div className="social-media">
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/icon/social_media/fb.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/icon/social_media/instagram.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/icon/social_media/line.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/icon/social_media/twitter.svg'} />
                </div>
                </div>
                <div className="brand-essence">
                <Marquee/>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Introduction;