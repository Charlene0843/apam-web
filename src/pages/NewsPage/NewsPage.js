import React from "react";
import { ReactSVG } from "react-svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLocation, Link } from "react-router-dom";


const NewsPage = () => {
    const { state } = useLocation();


    const newsType = ((type) => {
        switch (type) {
            case 'announcements':
                return '重要公告';
            case 'activity':
                return '活動資訊';
            case 'media-coverage':
                return '媒體報導';
            default:
                return '';
        }
    })


    return (
        <div className="home-wrapper">
            <Header />
            <div className="news-page-wrapper">
                <section className="banner-title">
                    <div className="main-title">
                        <ReactSVG src={process.env.PUBLIC_URL + '/img/decorations/ring.svg'} />

                        <div className="bread-crumbs">
                            <Link to={process.env.PUBLIC_URL + '/'}>首頁</Link>
                            <Link to={process.env.PUBLIC_URL + '/news/all'}>最新消息</Link>
                            <Link to={process.env.PUBLIC_URL + '/news/' + state.type}>{newsType(state.type)}</Link>
                            <span>{state.title}</span>
                        </div>
                    </div>
                </section>
                <div className="news-page-content">
                    <div className="wrapper">
                        <p className="f2 w7">{state.title}</p>

                        <div className="date">
                            <p>
                                <ReactSVG src={process.env.PUBLIC_URL + '/img/clock.svg'} />
                                <span>{state.date}</span>
                                <ReactSVG src={process.env.PUBLIC_URL + '/img/file.svg'} />
                                <Link to={process.env.PUBLIC_URL + '/news/' + state.type}>{newsType(state.type)}</Link>

                            </p>
                        </div>
                        <hr />
                        <section>
                            <article>
                                <p className="f15">{state.content}</p>
                            </article>
                            {
                                state.img
                                    ?
                                    <img src={process.env.PUBLIC_URL + '/img/news/news' + state.img + '.jpg'} alt={state.img} />
                                    : <></>
                            }
                        </section>


                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default NewsPage;