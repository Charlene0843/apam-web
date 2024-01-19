import React from "react";
import { ReactSVG } from "react-svg";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Marquee from "../../components/Marquee/Marquee";
import Slider from "../../components/Slider/Slider";

const Introduction = () => {
    const brands = [
        {
            title: 'AP 愛完美',
            img: '/img/brands/ap.png',
            url: 'https://www.ap-shopping.com/',
            content: 'AP 愛完美成立於 2020 年，優質選品，讓您感知生活，享受生活。專營國際知名品牌化妝品，保養品，香水等，致力於打造奢華、藝術、完美的購物體驗。\n與國內信譽卓著廠商及代理商成為貿易夥伴，確保我們客戶所購買的商品品質及嚴格把關排除仿冒品。'
        }, {
            title: 'RevX',
            img: '/img/brands/RevX.png',
            url: 'https://apamverse.com/',
            content: 'RevX 擁有獨立的票券後台系統。可以有效地管理票券銷售和分發。另外，您可以根據自己的業務需求選擇最適合的模組，無論是規模大小、預算或特定功能需求，都能找到最適合的解決方案。'
        }, {
            title: 'Throne of Dawn',
            img: '/img/brands/throne-of-dawn.png',
            url: 'https://throneofdawn.com/',
            content: '背景故事以現在市面少見的奇幻冒險史詩風格為主軸，融合魔法和神話元素，搭配精美的角色設計和細膩唯美的美術視覺，講述在永夜降臨後，四大種族的各個英雄紛紛站出，發起了一系列搶奪王座之戰。'
        }
    ]
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
                <Marquee />
                <div className="brand-essence">

                    <p>
                        <span className="slogan">行動</span>
                        <span className="slogan">毅力</span>
                        <br />
                        <span className="slogan">挑戰</span>
                        <span className="slogan">禮貌</span>
                    </p>
                    <article>
                        <p>行動勝過言辭，毅力助力成功，逆境培養紀律，禮儀雕塑品格。不僅僅是品牌，更是一種充滿活力的精神——對堅定承諾和持久影響的明證。感受本質，擁抱旅程。</p>
                        <p>公司成立於 2021 年，我們專注於軟體開發服務，團隊主要均有相關資深背景。從 Web 2.0 向新時代邁進。
                            <br />
                            我們的技術和網絡安全專家團隊提供多種解決方案，致力助企業透過創新技術進一步發展業務。</p>
                    </article>
                </div>

                <Slider />

                <section className="brands">
                    <ul>
                        {
                            brands.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="img-area-out">
                                            <div className="img-area-in">
                                                <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                                            </div>
                                        </div>
                                        <article>
                                            <h3>{item.title}</h3>
                                            <p>{item.content}</p>
                                        </article>

                                        <div className="more">
                                            <a href={item?.url} target="_blank" rel="noreferrer">MORE</a>
                                            <ReactSVG src={process.env.PUBLIC_URL + '/img/arrow.svg'} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>

            </div>
            <Footer />
        </div>
    )
}

export default Introduction;