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
                <p className="banner-typing">擁有全方位 Web 3 盡在</p>
                <ReactSVG
                    className="banner-logo"
                    src={process.env.PUBLIC_URL + '/img/logo/apam_logo_L.svg'} />
                <p className="banner-logo">Shining Text Animation Effects</p>

                <div className="onoff">
                    <span className="circle"></span>
                </div>
                <div className="social-media">
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/icon/social_media/fb.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/icon/social_media/instagram.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/icon/social_media/line.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/icon/social_media/twitter.svg'} />
                </div>
            </div>

            <div className="rev-x">
                {/* <ReactSVG src={process.env.PUBLIC_URL + '/img/'}/> */}
                <img className="rev-x-logo" src={process.env.PUBLIC_URL + '/img/logo/REVX-logo-colored.png'} alt="revX logo" />

                <h2>區塊鏈技術X產業特定需求</h2>
                <p>在Web3的時代裡，每一次的互動都是永恆的記憶。
                    <br />
                    RevX 將區塊鏈技術與主流  IT 服務結合，
                    <br />
                    從多種產業別中提取並整合其特定需求，
                    <br />
                    打造一個全面且實用的生活化平台。</p>

                <div className="more">
                    <span>MORE</span>
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/arrow.svg'} />
                </div>

                <img className="phone1" src={process.env.PUBLIC_URL + '/img/phone-1.png'} alt="revX logo" />
                <img className="phone2" src={process.env.PUBLIC_URL + '/img/phone-2.png'} alt="revX logo" />


            </div>

            <div className="what-we-do">
                <div class="marquee-container">
                    <div class="marquee-content">
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/what-we-do.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/cube.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/what-we-do.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/cube.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/what-we-do.svg'} />
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/cube.svg'} />
                     </div>
                </div>
            </div>




            <p className="copyright">
                Copyright © 2022 AP . APAM. All Rights Reserved.
                <br />
                A member of the APAM . APAM International Co. Ltd
            </p>


        </div>

    )
}

export default Home;