import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Consultation from "../../components/Consultation/Consultation";
import { ReactSVG } from "react-svg";
import BlockchainBanner from "../../components/BlockchainBanner/BlockchainBanner";

const Web3 = () => {
    const title = {
        title: 'web3',
        firstPart: '沒有',
        significant: ' WEB3 錢包',
        secondPart: '？',
        br: '不用擔心！',
        background: 'pink',
        description: '我們除了提供多種 WEB3 錢包連接選項，可以直接一鍵登入外，假如是沒有 WEB3 錢包也無須擔心，我們讓客戶可以用電子郵件或社群網絡賬號登入。我們會自動為用戶創建錢包，無需複雜的註冊流程，幫用戶省下大量的時間。'
    }
    const data = [
        {
            title: '整合其他社群',
            img: 'integration',
            icon: '',
            content: '我們理解用戶可能已有現成的身份驗證管道，為提供更個性化的用戶體驗。可透過嵌入式錢包技術，方便用戶可以直接登入。'
        }, {
            title: '跨平台支援',
            img: 'cross-platform',
            icon: '',
            content: '在任何地方、任何裝置上都能使用。我們的系統支援網路、移動平台，確保用戶無論使用何種裝置，一鍵即可登入。'
        }, {
            title: '無縫的 WEB3 體驗',
            img: 'experience',
            icon: '',
            content: '我們的目標是為用戶提供靈活、個性化的平台，不僅感受技術上的先進，更在體驗上領先一步。加入我們，一起探索區塊鏈技術所帶來的無限可能。'
        },
    ]

    const NFTdata =
    {
        title: '全能數位錢包',
        img: 'purse',
        content: [
            {
                icon: 'assets',
                title: '發送/接收資產',
                content: '透過錢包用戶可以輕鬆發送和接收加密資產，不受地區限制，輕鬆交易。'
            }, {
                icon: 'browse',
                title: '資產瀏覽',
                content: '可以快速瀏覽你的加密資產，掌握資產動態。'
            }, {
                icon: 'record',
                title: '交易紀錄',
                content: '提供完整的歷史交易記錄，讓用戶可以輕鬆回顧過去的每一筆交易。'
            }, {
                icon: 'support',
                title: 'ENS支援',
                content: '我們支援以太坊名稱服務（ENS），讓用戶加密貨幣地址更加簡潔。'
            }, {
                icon: 'manipulate',
                title: '輕鬆操作',
                content: '一開始即可享受豐富功能無需設定，可立即使用。'
            },
        ]
    }

    const { content } = NFTdata || [];
    return (
        <div className="home-wrapper">
            <Header />

            <div className="loyalty">
                <BannerTitle
                    title={'Web 3.0入口'}
                    subtitle={'web3.0'} />
                <BlockchainBanner
                    title={title}
                    content={data}
                />
                <div className="purse">
                    <div className="wrapper">
                        <div className="title" key={NFTdata.title}>
                            <p className="f5 w5">{NFTdata.title}</p>
                        </div>
                        <ul>
                            {
                                content.map((item) => {
                                    return (
                                        <li key={item.title}>
                                            <div className="main" >
                                                <ReactSVG src={process.env.PUBLIC_URL + '/img/blockchain/web3/icon/' + item.icon + '.svg'} />
                                                <p className="f2 w7">{item.title}</p>
                                                <p className="f125 w3 cw1">{item.content}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            <li className="pic" key={NFTdata.img}>
                                <div className="picture">
                                    <ReactSVG src={process.env.PUBLIC_URL + '/img/blockchain/web3/' + NFTdata.img + '.svg'} />
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <Consultation />
            <Footer />
        </div>
    )
}

export default Web3;