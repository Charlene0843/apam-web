import React from "react";
import { ReactSVG } from "react-svg";

const BannerTitle = ({ title, subtitle }) => {
    return (
        <section className="banner-title">
            <div className="main-title">
                <ReactSVG src={process.env.PUBLIC_URL + '/img/decorations/ring.svg'} />
                <p>{title}</p>
            </div>

            <div className="stroke">{subtitle}</div>
        </section>
    )
}
export default BannerTitle;