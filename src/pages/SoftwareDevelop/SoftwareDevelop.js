import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import Consultation from '../../components/Consultation'
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import MarqueeImg from "../../components/MarqueeImg/MarqueeImg";
import { ReactSVG } from "react-svg";

const SoftwareDevelop = () => {
    const brands1 = ['aws', 'google-cloud', 'docker', 'nodejs', 'react', 'frame', 'postgresql'];
    const brands2 = ['union', 'heroku', 'solidity', 'truffle', 'ethereum', 'polygon-matic', 'wallet-connect'];

    const feature = [
        {
            title: '網站開發',
            img: 'web',
            content: '創建易用、好看的網站，讓訪客容易找到想要的信息。'
        },
        {
            title: 'APP應用開發',
            img: 'app',
            content: '開發手機應用程序，讓用戶在手機上也能方便使用您的服務。'
        }, {
            title: '支付與物流整合',
            img: 'payAndLogistics',
            content: '讓客戶容易付款和追蹤送貨，讓您的業務運作更順暢。'
        }, {
            title: '大數據解決方案',
            img: 'bigData',
            content: '使用大數據分析幫助您更好地理解客戶需求和市場趨勢'
        }, {
            title: '企業應用系統',
            img: 'enterprise',
            content: '改善不同部門之間的合作和數據共享，提高工作效率。'
        }, {
            title: '人工智能應用開發',
            img: 'ai',
            content: '利用人工智能自動完成工作，獲取有用的業務洞察。'
        },
    ];

    const module = [
        {
            title: '預約系統',
            img: 'appointment',
            content: '預約排程數位化',
            frontEnd: ['日期與時段選擇', '服務類別選擇', '預約更改和取消', '自動提醒服務', '歷史預約記錄', '前台結帳功能', '客戶反饋收集'],
            backEnd: ['時段差異定價', '屏蔽特定時段', '時段人數上限', '門店營業/服務人員', '人員班表建置', '訂金/全額收款', '月曆報表顯示', '顧客資料建檔', '訂單明細追蹤', '預約放鳥黑名單']
        }, {
            title: '售票系統',
            img: 'ticketSale',
            content: '活動策劃輕鬆上手',
            frontEnd: ['票種類型與開放時段', '電子票券發送', '轉讓票券功能', '票券匣管理', '多種支付方式', '收藏喜愛活動', '電子票券核銷', 'NFT門票/紀念票根', '可追溯鏈上紀錄'],
            backEnd: ['活動上下架', '場別與票種', '限時優惠券代碼', '加購商品與贈品', '活動標籤設定', '訂單明細追蹤', '出席率和數據分析']
        }, {
            title: '電商系統',
            img: 'eCommerce',
            content: '專屬電商 金物流免煩惱',
            frontEnd: ['商品圖片規格', '收藏喜愛商品', '購物車模組', '多種支付方式', '用戶帳戶管理', '商品推薦系統', '商品回饋評論', '可追溯鏈上紀錄'],
            backEnd: ['商品上下架', '優惠券代碼', '加購商品與贈品', '彈性訂單管理', '一站式金物流', '數據分析中心']
        }, {
            title: '會員系統',
            img: 'membership',
            content: '數據驅動 精準行銷',
            frontEnd: ['日期與時段選擇', '服務類別選擇', '預約更改和取消', '自動提醒服務', '歷史預約記錄', '前台結帳功能', '客戶反饋收集'],
            backEnd: ['顧客清單列表', '自訂顧客標籤', '會員行銷設計', '分眾行銷模組', '自動化會員標籤', '沈睡客喚醒']
        }, {
            title: '門市POS',
            img: 'storePos',
            content: '一站式整合 簡化業務需求',
            frontEnd: ['簡單結帳模組', '電話預約模組', '核銷票券模組', '金流整合', '庫存管理'],

        }

    ]
    return (
        <div className="home-wrapper">
            <Header />
            <div className="software-development">
                <BannerTitle
                    title={'軟體開發'}
                    subtitle={'service'}
                />
                <div className="service-banner">

                    <article>
                        <p className="f325">區塊鏈技術X專業服務</p>
                        <p className="f173">我們有經驗豐富的跨國專案經理和工程師團隊，專注於為您提供客製化軟體開發服務。我們的專業知識保證您的專案可以準時且在預算範圍內完成。</p>
                    </article>

                    <img src={process.env.PUBLIC_URL + '/img/blockchain-service.png'} alt="blockchain service" />

                </div>

                <div className="feature">
                    <ul>
                        {feature.map((item) => {
                            return (
                                <li key={item.img}>
                                    <ReactSVG src={process.env.PUBLIC_URL + 'img/feature/' + item.img + '.svg'} />
                                    <p className="f2 w7">{item.title}</p>
                                    <p className="f125 w3 cw1">{item.content}</p>

                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* 跑馬燈 */}
                <MarqueeImg
                    direction={'left'}
                    content={brands1}
                />
                <MarqueeImg
                    direction={'right'}
                    content={brands2}
                />


                <section className="system-module">
                    <ul>
                        {
                            module.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="title">
                                            <ReactSVG src={process.env.PUBLIC_URL + '/img/module/' + item.img + '.svg'} />
                                            <div className="title-title">
                                                <p className="f2 w7">{item.title}</p>
                                                <p className="f175 w3 cw1">{item.content}</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="content-module">
                                                <p className="f125 w5">前台模組</p>
                                                <hr />
                                                <ul>
                                                    {item.frontEnd.map((item) => {
                                                        return (
                                                            <li key={item}>
                                                                <ReactSVG src={process.env.PUBLIC_URL + '/img/star-item.svg'} />
                                                                <p className="f1 w3 cw1">{item}</p>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            {
                                                item.backEnd
                                                    ?
                                                    <div className="content-module">
                                                        <p className="f125 w5">後台模組</p>
                                                        <hr />
                                                        <ul>
                                                            {item.backEnd.map((item) => {
                                                                return (
                                                                    <li key={item}>
                                                                        <ReactSVG src={process.env.PUBLIC_URL + '/img/star-item.svg'} />
                                                                        <p className="f1 w3 cw1">{item}</p>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    : <div className="content-module"></div>}

                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>




                <Consultation />
            </div>
            <Footer />
        </div>
    )
}

export default SoftwareDevelop;