import React from "react";

import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";

const News = () => {
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
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        },
        {
            date: '2023.12.27',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        },
        {
            date: '2023.12.27',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        },
        {
            date: '2023.12.27',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        },
        {
            date: '2023.12.27',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        },
        {
            date: '2023.12.27',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        },
        {
            date: '2023.12.27',
            content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        }
    ]
    const sort = [
        { type: ["important", "activity", "report"], label: "所有消息" },
        { type: "important", label: "重要公告" },
        { type: "activity", label: "活動資訊" },
        { type: "report", label: "媒體報導" },
        // { type: ['available', 'used', 'expired'], label: '全部' }

    ];
    return (
        <div className="home-wrapper">
            <Header />
            <div className="news-wrapper">
                <BannerTitle
                    title={'最新消息'}
                    subtitle={'news'} />
                <div className="sort">
                    <ul>
                        {
                            sort.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item.label}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="news">
                    <ul>
                        {news.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span className="title">最新公告</span>
                                    <span>{item.date}</span>
                                    {/* <p>{item.content} */}
                                    <p>{item.content.substring(0, 50)}
                                        <span>...</span></p>
                                    <div className="arrow"><div ></div></div>

                                </li>

                            )
                        })}

                    </ul>

                </div>

                <div className="paginator">
                    <ul>
                        <span className="left"></span>
                        <li className="f173">1</li>
                        <li className="f173">2</li>
                        <li className="f173">3</li>
                        <li className="f173">4</li>
                        <li className="f173">5</li>
                        <span className="right"></span>
                    </ul>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default News;