import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Consultation from "../../components/Consultation/Consultation";

import BlockchainBanner from "../../components/BlockchainBanner/BlockchainBanner";

const Minting = () => {
    const title = {
        title: 'minting',
        firstPart: '輕鬆鑄造和發行',
        significant: 'NFT',
        secondPart: '',
        br: '',
        background: 'blue-purple',
        description: '在這個數位化快速發展的時代，我們致力於降低商家導入區塊鏈的技術門檻和成本。我們的一站式 NFT 平台能節省高達 60-70% 的開發時間，為你在商業新維度中快速起步，輕鬆步入 WEB3 世界。這一轉變不僅為藝術和娛樂行業帶來了革命性的變革，更對更廣泛的產業領域產生了深遠影響。加入我們，開啟您的數位革命之旅。'
    }
    const data = [
        {
            title: '區塊鏈與品牌價值',
            img: 'brand-value',
            icon: 'cube',
            content: 'NFT 技術的興起為商業領域打開了新的大門。企業可以利用 NFT 創造獨一無二的品牌價值體驗，建立更緊密的客戶關係。'
        }, {
            title: '突破傳統的業務模式',
            img: 'model',
            icon: 'bulb',
            content: 'NFT 使企業能夠突破傳統銷售和行銷的框架，直接與消費者溝通。這不僅創造產品和服務的價值，也為企業帶來版稅收益。此外，NFT提供了一個全新的客戶忠誠度和獎勵機制，使得會員擁有特權來促進品牌忠誠度。'
        }, {
            title: '自由訂製想要的風格',
            img: 'style',
            icon: 'painting',
            content: '利用靈活的 UI 組件，打造量身定制的入門流程。我們的平台提供 WEB3 和 WEB2 的登入方式，使您能夠根據業務需求自訂品牌風格和主題樣式。'
        },
    ]


    return (
        <div className="home-wrapper">
            <Header />
            <div className="loyalty">
                <BannerTitle
                    title={'鑄造NFT'}
                    subtitle={'minting'} />
                <BlockchainBanner
                    title={title}
                    content={data}
                />

            </div>
            <Consultation />
            <Footer />
        </div>
    )
}

export default Minting;