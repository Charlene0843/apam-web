import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Consultation from "../../components/Consultation/Consultation";
import { ReactSVG } from "react-svg";
import BlockchainBanner from "../../components/BlockchainBanner/BlockchainBanner";

const Loyalty = () => {
    const title = {
        title: 'loyalty',
        firstPart: '將下一代',
        significant: '客戶忠誠度',
        secondPart: '',
        br: '提高 10 倍',
        background: 'purple',
        description: ' 在客戶的每趟旅程上賦予意義——不管是從首次體驗到成為品牌的熱衷粉絲。透過客戶數位資產 NFT，賦予的不僅僅是價值，也將他們轉化成品牌的超級粉絲社群。'
    }
    const data = [
        {
            title: '創新玩法吸引粉絲',
            img: 'attraction',
            icon: 'leaf',
            content: '吸引廣大客戶認識你的品牌，透過收集NFT、賺取積分或兌換等互動方式引領潛在客戶進入你的 WEB3 牌世界。'
        }, {
            title: '增強客戶忠誠度',
            img: 'enhance',
            icon: 'increase',
            content: '提供專屬的數位 NFT 收藏品，讓客戶能夠自由擁有、交易並兌換這些獨一無二的品數位資產，更是一種全新品牌互動和忠誠的方式。'
        }, {
            title: '訂閱制增加收益',
            img: 'subscribe',
            icon: 'bell',
            content: '推出的 NFT 訂閱制為創作者開啟了全新收益模式。在每次交易成功後，可自動收取版權費用，實現穩定且持續的收入，對於創作者來說是個不錯的方式。'
        },
    ]

    const NFTdata = [
        {
            title: '無限潛力的NFT',
            img: 'card',
            content: '你也想跟上NFT市場話題性嗎？我們幫助你實現NFT的多元應用，不論是集點、兌換、活動核銷、紀念票根等，幫助於提升企業形象。隨著客戶在區塊鏈上體驗特別的玩法，這些過程不僅顯示他們的忠誠，也為他們解鎖了新的獎勵和成就。'
        }, {
            title: 'NFT的碎片化',
            img: 'fragments',
            content: '我們正積極開拓創新的 Web3 應用領域，實現 NFT 的碎片化的可能性，幫助客戶的忠誠度及積分進行靈活整合與跨鏈轉移。藉由我們合成系統重組碎片，融合成一個全新的NFT ，再賦予這些 NFT 特定的線下增值服務。除了擴大了 NFT 的應用範疇之外，也使這些 NFT 不論在線上線下擁有實質應用的價值，增加 Web3 豐富多元性。'
        }
    ]


    return (
        <div className="home-wrapper">
            <Header />
            <div className="loyalty">
                <BannerTitle
                    title={'忠誠會員'}
                    subtitle={'loyalty'} />
                <BlockchainBanner
                    title={title}
                    content={data}
                />
                <div className="NFT">
                    <ul>
                        {
                            NFTdata.map((item) => {
                                return (
                                    <li key={item.img}>
                                        <div className="picture">
                                            <ReactSVG src={process.env.PUBLIC_URL + '/img/blockchain/loyalty/nft/' + item.img + '.svg'} />
                                        </div>
                                        <div className="main">
                                            <p className="f5 w5">{item.title}</p>
                                            <p className="f15 w5 cw1">{item.content}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
            <Consultation />
            <Footer />
        </div>
    )
}

export default Loyalty;