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
            id: 0,
            type: 'announcements',
            date: '2023.10.02',
            title: 'Throne of Dawn 官方網站｜維護完成通知',
            content: '尊敬的客戶與合作夥伴：\n\n我們的官方網站近期已完成獎勵金額顯示錯誤的修正，並已恢復正常訪問和服務。\n\n我們對您在維護期間可能遇到的任何不便表示歉意，並感謝您的耐心等待和理解。\n\n若您在使用過程中遇到任何問題或需要進一步的協助，請隨時與我們聯絡，我們將全力為您提供支援。再次感謝您對我們的支持和信任！'
        }, {
            id: 1,
            type: 'announcements',
            date: '2023.06.12',
            title: '艾恩科技加入台灣區塊鏈大聯盟',
            subtitle: '共同推動區塊鏈技術發展',
            img: '1',
            content: '艾恩科技股份有限公司已正式加入台灣區塊鏈大聯盟 TBA 作為會員。台灣區塊鏈大聯盟是一個由國內產官學研各界共同成立的組織，致力於建立溝通平台，促進業界與政府之間的雙向資訊交流，推動國內外合作，推廣區塊鏈技術的應用，人才培育，創造業者良好的發展環境。\n\n作為區塊鏈技術領域的先驅和創新者，艾恩科技一直致力於推動區塊鏈技術的應用和發展。我們深信區塊鏈技術在未來扮演著重要的角色，並為各個行業帶來巨大的變革和創新。透過加入台灣區塊鏈大聯盟，我們能夠與其他行業領先者共同合作，共享資源和知識，推動區塊鏈技術在台灣的應用和發展。\n\n加入台灣區塊鏈大聯盟不僅使我們能夠與各界專家和學者進行深入的交流和合作，我們也有機會參與和推動相關政策的制定和實施，為區塊鏈領域的研究和創新將帶來更大的影響力，同時也為我們與政府和企業之間建立更緊密的合作關係提供了機會。\n\n謹代表艾恩科技股份有限公司感謝各位的支持和關注，我們期待與台灣區塊鏈大聯盟的合作。'
        }, {
            id: 2,
            type: 'announcements',
            date: '2023.06.05',
            title: 'RevX 系統上線',
            img: '2',
            content: 'RevX 是票券平台，擁有獨立的票券後台系統。可以有效地管理票券銷售和分發。另外，您可以根據自己的業務需求選擇最適合的模組，無論是規模大小、預算或特定功能需求，都能找到最適合的解決方案。\n\n無論您是對新技術充滿好奇，還是希望探索全新的消費方式，RevX 都是您開啟探索新時代的入口，我們歡迎各大品牌和商家與我們聯繫，洽談進一步的合作方式。'
        }, {
            id: 3,
            type: 'announcements',
            date: '2023.01.19',
            title: 'APAM | 電商優惠券上線',
            img: '3',
            content: '會員限時驚喜 寵愛持有者最高享 85 折\n\nNFT 會員專屬美妝 95 折優惠券（持有 NFT 1 張獨享）*部分商品適用，請依商品頁顯示為主\n\nNFT 會員專屬美妝 9 折優惠券（持有 NFT 3 張獨享）*部分商品適用，請依商品頁顯示為主\n\nNFT 會員專屬美妝 85 折優惠券（持有 NFT 10 張以上獨享）*部分商品適用，請依商品頁顯示為主\n\n​注意事項｜\n\n 1.優惠券可與其他優惠方案合併使用。\n\n2. 同一個帳號每單限抵用一張優惠券。\n\n3.每張優惠券包含券號及使用效期，提醒您於使用效期前使用，逾期則視為棄權。\n\n4.優惠券使用後，若取消訂單或辦理退貨時，優惠券仍在有效期限內，將歸還至會員帳戶；若優惠券已過期，則失效無法再次使用。\n\n5.使用上如果有任何問題請洽客服。'
        }, {
            id: 4,
            type: 'announcements',
            date: '2023.01.16',
            title: 'APAM | 賦能上線',
            content: 'Throne Of Dawn NFT 賦能已上線\n\n凡持有 TOD NFT 者 , 將依照分數以及稀有特徵賦予能量值 , 能量值可參與活動如下 :\n\n艾恩科技 線上 / 線下 聚會活動\n\n愛完美美妝商品折扣與優惠\n\n獲得 Throne Of Dawn NFT 周邊限量產品\n\n合作廠商優惠\n\n目前 “APAM 艾恩科技 年度持有者晚宴” 線下活動已開放申請\n\n兌換票券活動詳情請至   https://throneofdawn.com/   賦能頁面了解 !'
        },
        // {
        //     id: 5,
        //     type: 'activity',
        //     date: '2023.12.05',
        //     content: '想過一整起來是打看到，有特別，的事請假看起的的生治正確。'
        // },
        // {
        //     id: 6,
        //     type: 'media-coverage',
        //     date: '2023.05.01',
        //     url: 'https://money.udn.com/money/story/5635/7135399',
        //     title: '台灣數位產業發展聯盟與台灣區塊鏈協會聯手舉辦產業高峰會 圓滿成功',
        //     content: '相關報導｜YAHOO、LINETODAY、新頭條​、Pchome、 蕃薯藤​ 、走遊​、奧丁丁、生活誌​ 、睿傳媒​、ltv news​、民眾'
        // },
        // {
        //     id: 7,
        //     type: 'media-coverage',
        //     date: '2023.04.24',
        //     url: 'https://www.bnext.com.tw/article/74962/ai-blockchain-summit?',
        //     title: '第二屆《數位轉型大未來：區塊鏈、AI 與永續發展的共舞》產業高峰會',
        //     content: '相關報導｜數位時代、桑幣區識、臺灣郵報、報新聞、蕃新聞、記者爆料網、​民眾新聞網、奧丁丁、Pchome'
        // },
        // {
        //     id: 8,
        //     type: 'media-coverage',
        //     date: '2023.02.08',
        //     url: 'https://app.mycard520.com.tw/new%E5%8F%B0%E7%81%A3%E5%8D%80%E5%A1%8A%E9%8F%88%E5%AF%A6%E9%AB%94%E6%B4%BE%E5%B0%8D-%E7%99%BE%E4%BA%BA%E9%BD%8A%E8%81%9A%E7%9B%B8%E8%A6%8B-%E5%A4%A7%E5%AE%87%E8%B3%87%E3%80%8C%E5%BE%A1%E5%8A%8D/',
        //     title: '大宇資訊｜台灣區塊鏈實體派對',
        //     content: ''
        // },
        // {
        //     id: 9,
        //     type: 'media-coverage',
        //     date: '2023.02.03',
        //     url: 'https://tw.news.yahoo.com/2023%E5%8F%B0%E7%81%A3%E5%8D%80%E5%A1%8A%E9%8F%88%E7%B7%9A%E4%B8%8B%E6%96%B0%E6%98%A5party-%E9%96%8B%E5%B9%B4%E6%9C%80%E5%A4%A7%E7%9B%9B%E6%9C%83-%E5%9C%A8t-hub%E5%85%A7%E7%A7%91%E5%89%B5%E6%96%B0%E8%82%B2%E6%88%90%E5%9F%BA%E5%9C%B0-065051312.html',
        //     title: '「2023台灣區塊鏈線下新春Party」開年最大盛會！在t.Hub內科創新育成基地',
        //     content: ''
        // }, {
        //     id: 10,
        //     type: 'media-coverage',
        //     date: '2023.02.01',
        //     url: 'https://buzzorange.com/techorange/2023/02/01/apam/',
        //     title: '加密寒冬如何佈局區塊鏈技術應用？',
        //     content: '艾恩科技以「元宇宙電商樂園」，靈活應對市場變化！'
        // }, {
        //     id: 11,
        //     type: 'media-coverage',
        //     date: '2022.07.04',
        //     url: 'https://buzzorange.com/techorange/2022/07/04/ap-looking-forward-nft-possible-profit/?fbclid=IwAR06NgVV_dFf2-HtDrgnLQLJ4iUrI9plWiKelQZEpOWrXuR_TQOYvi4lF9U',
        //     title: '在 NFT 市場逆風而行',
        //     content: '在地新創艾恩科技如何在熊市開拓區塊鏈新版圖？'
        // }, {
        //     id: 12,
        //     type: 'media-coverage',
        //     date: '2022.12.26',
        //     url: 'https://tw.news.yahoo.com/2022%E5%8D%80%E5%A1%8A%E9%8F%88%E5%9C%88%E5%A4%A7%E7%9B%9B%E6%9C%83%E6%96%B0%E8%88%88%E7%A4%BE%E4%BA%A4%E9%81%8A%E6%88%B2%E9%A0%98%E8%BB%8D%E9%BD%8A%E8%81%9A%E6%AD%A1%E6%85%B6%E8%81%96%E8%AA%95%E7%AF%80%E5%90%8C%E6%A8%82-060617032.html',
        //     title: '2022 區塊鏈圈大盛會',
        //     content: '新興社交遊戲領軍齊聚歡慶聖誕節同樂'
        // },
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
                            <li key={index}
                            // onClick={() => { navigate(`/news/${item?.type}/${item?.id}`) }}
                            >
                                <p className="title">最新公告</p>
                                <p>{item.date}</p>
                                <p className="news-title">{item.title}</p>
                                <div className="arrow"><div ></div></div>

                            </li>

                        )
                    })}
                    <div className="more"
                        onClick={() => { navigate('/news/all') }}>
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