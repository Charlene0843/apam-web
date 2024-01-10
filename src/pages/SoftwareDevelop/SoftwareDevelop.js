import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import Consultation from '../../components/Consultation'

const SoftwareDevelop = () => {
    return (
        <div className="home-wrapper">
            <Header />
            <div className="software-development">


                <Consultation />
            </div>
            <Footer />
        </div>
    )
}

export default SoftwareDevelop;