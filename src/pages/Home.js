import React from "react";

import { ReactSVG } from "react-svg";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Consultation from "../components/Consultation/Consultation";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const whyUs = [
        {
            eng: 'client-oriented',
            img: '/img/why-us/client-oriented.png',
            title: '客戶導向',
            content: '我們的團隊始終將客戶需求放在首位，從而確保我們的解決方案能夠完全滿足客戶的期望和要求。'
        }, {
            eng: 'focus-value',
            img: '/img/why-us/focus-value.png',
            title: '專注於價值',
            content: '我們注重創造價值，通過 新型技術提供更多的商業價值和機會。'
        }, {
            eng: 'communication',
            img: '/img/why-us/communication.png',
            title: '​溝通協作',
            content: '我們注重與客戶的溝通和協作，能夠快速反應客戶的需求並提供專業的技術建議。'
        }
    ]
    const news = [
        {
            date: '2023.12.05',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        },
        {
            date: '2023.12.05',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        },
        {
            date: '2023.12.05',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        },
        {
            date: '2023.12.27',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        }
    ]


    return (
        <div className="home-wrapper">
            <ReactSVG
                className="dec-green"
                src={process.env.PUBLIC_URL + 'img/decorations/green-1.svg'} />
            <ReactSVG
                className="dec-orange"
                src={process.env.PUBLIC_URL + 'img/decorations/orange-1.svg'} />
            <Header />


            <div className='banner'>
                <p className="banner-typing">擁有全方位<span>Web3</span>盡在</p>
                <ReactSVG
                    className="banner-logo"
                    src={process.env.PUBLIC_URL + '/img/logo/apam_logo_mask.svg'} />
                {/* <p className="banner-logo">Shining Text Animation Effects</p> */}

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
                <div className="marquee-container">
                    <div className="marquee-content">
                        <ReactSVG src={process.env.PUBLIC_URL + '/img/what-we-do.svg'} />
                        <ReactSVG src={process.env.PUBLIC_URL + '/img/cube.svg'} />
                        <ReactSVG src={process.env.PUBLIC_URL + '/img/what-we-do.svg'} />
                        <ReactSVG src={process.env.PUBLIC_URL + '/img/cube.svg'} />
                        <ReactSVG src={process.env.PUBLIC_URL + '/img/what-we-do.svg'} />
                        <ReactSVG src={process.env.PUBLIC_URL + '/img/cube.svg'} />
                    </div>
                </div>
                <div className="main">
                    <div className="web3 service"
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/computer-1.png)` }}>
                        <div className="text-wrapper">
                            <p>Web 3.0 服務</p>
                            <span>啟動Web 3 開啟數位創新</span>
                            <div className="line"></div>
                        </div>

                    </div>
                    <div className="CRM-member service"
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/crm-member.png)` }}>
                        <div className="text-wrapper">
                            <p>CRM會員系統</p>
                            <span>品牌會員計劃 輕鬆打造</span>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="ticket service"
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/computer-1.png)` }}>
                        <div className="text-wrapper">
                            <p>售票系統</p>
                            <span>活動策劃輕鬆上手 完美體驗</span>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="why-us">
                <div className="wrapper">
                    <span className="title">WHY US?</span>
                    <ul>
                        {
                            whyUs.map((item, index) => {
                                return (
                                    <li key={item.eng}>
                                        <img src={process.env.PUBLIC_URL + item.img} alt={item.eng} />
                                        <div className="main">
                                            <h4>{item.title}</h4>
                                            <p>{item.content}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>

            <div className="news">
                <ul>
                    {news.map((item, index) => {
                        return (
                            <li key={index}>
                                <span className="title">最新公告</span>
                                <span>{item.date}</span>
                                <p>{item.content}</p>
                                <div className="arrow"><div ></div></div>

                            </li>

                        )
                    })}
                    <div className="more"
                        onClick={() => { navigate('/news') }}>
                        <span>MORE</span>
                        <ReactSVG src={process.env.PUBLIC_URL + '/img/arrow.svg'} />
                    </div>
                </ul>
                <div className="news-decoration">NEWS</div>
            </div>

            <Consultation />



            <Footer />


        </div>

    )
}

export default Home;