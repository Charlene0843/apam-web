import React from "react";
import { useLottie } from "lottie-react";
import Cube from "../../assets/json/web3-animation-1.json";

import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import { ReactSVG } from "react-svg";

const CoreTechnology = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Cube,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const { View: lottie } = useLottie(defaultOptions);

    return (
        <div className="home-wrapper">
            <Header />
            <div className="core-technology">
                <BannerTitle
                    title={'核心技術'}
                    subtitle={'proficiency'} />
                <div className="banner">
                    <h3>WEB3軟體開發</h3>
                    <h4>運用最新的Web3工具和框架實現您的商業創意</h4>
                    <div className="line"></div>
                    <p>我們的目標是成為亞洲區唯一的信任機器，透過區塊鏈技術，以分散式儲存的方式保存敏感資料。了解產業特定需求，企業可以實現高度的客戶資料隱私保護，加速企業落地區塊鏈的應用，實現商業創新與轉型。</p>
                    {/* <img src={process.env.PUBLIC_URL + '/img/cube.png'} alt="cube" /> */}
                    <div className="cube">
                        {lottie}
                    </div>
                </div>

                <div className="tool-area">
                    <div className="wrapper">
                        <div className="left-dec">
                            <ReactSVG className="infinity" src={process.env.PUBLIC_URL + '/img/decorations/shape/infinity.svg'} />
                            <ReactSVG className="pyramid" src={process.env.PUBLIC_URL + '/img/decorations/shape/pyramid.svg'} />
                            <ReactSVG className="hexagon" src={process.env.PUBLIC_URL + '/img/decorations/shape/hexagon.svg'} />
                        </div>
                        <p>
                            我們使用超過50種工具完成你的WEB3生態建造，這些工具的精心選擇和應用確保了整個生態系統的穩定性、安全性和效能。
                        </p>
                        <div className="right-dec">
                            <ReactSVG className="beta-sheet" src={process.env.PUBLIC_URL + '/img/decorations/shape/beta-sheet.svg'} />
                            <ReactSVG className="wave" src={process.env.PUBLIC_URL + '/img/decorations/shape/wave.svg'} />
                            <ReactSVG className="cube" src={process.env.PUBLIC_URL + '/img/decorations/shape/cube.svg'} />
                        </div>
                    </div>

                </div>

                <div className="enviroment">
                    <h3>開發環境</h3>

                    <div>
                        <div className="web">
                            <img src={process.env.PUBLIC_URL + '/img/web/web2.png'} alt="web2" />
                            <h4>WEB 2.0</h4>
                            <h5>由企業提供獨立、中心化的服務</h5>
                            <p>Web2.0的內容內容具有互動性，強化了企業的客戶體驗。由企業提供獨立、中心化的服務，價值集中在少數企業巨頭。透過數據分析了解客戶需求，提供更貼近用戶期望的產品和服務。</p>
                        </div>
                        <div className="web">
                            <img src={process.env.PUBLIC_URL + '/img/web/web3.png'} alt="web3" />
                            <h4>WEB 3.0</h4>
                            <h5>去中心化網路世界，不依賴於企業或個人</h5>
                            <p>Web2.Web3.0 區塊鏈存儲是一種去中心化機制，可以替代傳統的集中式雲端存儲。 透過區塊鏈，數據可以安全地存儲在分散式網絡中。這種分散式的架構，可以透過優化全球用戶未使用的硬盤存儲空間來保存文檔和重要文件。</p>
                            <p>區塊鏈的四大特性：<br /><span>去中心化、不可篡改、可追溯性、公開透明</span></p>
                        </div>
                    </div>
                    <div>
                        <div className="web large">
                            <img src={process.env.PUBLIC_URL + '/img/web/web25.png'} alt="web2.5" />
                            <h4>WEB 2.5</h4>
                            <h5>整合 Web2.0 與 Web3.0 的優點，降低進入區塊鏈的門檻</h5>
                            <p>Web2.Web2.5 的開發環境也就是在傳統 Web2.0 的框架下導入區塊鏈技術，結合區塊鏈特性並保留了中心化的特質，也就是除了利用中央伺服器管理用戶數據，同時也將重要資料保存於鏈上。</p>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CoreTechnology;