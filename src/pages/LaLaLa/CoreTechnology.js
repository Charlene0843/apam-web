import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";

const CoreTechnology = () => {
    return (
        <div className="home-wrapper">
            <Header />
            <div className="core-technology">
                <BannerTitle
                    title={'核心技術'}
                    subtitle={'proficiency'} />
                <div className="banner">
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default CoreTechnology;