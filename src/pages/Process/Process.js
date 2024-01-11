import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Consultation from "../../components/Consultation/Consultation";

const CoreTechnology = () => {
    const processStep = [
        {
            id: '01',
            title: '戰略項目映射',
            content: '透過將戰略項目映射納入流程中，我們可以更好地了解您的需求，明確列出您希望達成的目標和重點，並轉化為合適且具體的行動計劃，提高項目的成功率。'
        }, {
            id: '02',
            title: '原型開發',
            content: '在分析需求後，我們將會設計和建立原型，並進行測試和驗證，以確保最終的解決方案能夠符合客戶的需求和期望，並提供良好的用戶體驗。'
        }, {
            id: '03',
            title: '發展',
            content: '開發人員將根據已批准的設計進行編碼和編程，為新型項目的產品開發準備 alpha、beta 和發布階段。'
        }, {
            id: '04',
            title: '測試與優化',
            content: '團隊將對新型產品的各個組件進行全面的測試，以發現代碼中的缺陷和錯誤。通過測試，我們可以確保產品符合高質量的標準並提供穩定的性能。'
        }, {
            id: '05',
            title: '上線部署',
            content: '經過修改和優化的新解決方案進行部署，將其從測試網上線到主網。在部署過程中，我們會仔細檢查所有配置和安全設置，以確保產品能夠正常運行。'
        }, {
            id: '06',
            title: '監控維護',
            content: '對產品的性能、安全性和可用性進行監控，以識別和修復可能出現的問題。我們會定期更新產品以確保其符合最新的標準和技術。'
        },
    ]
    return (
        <div className="home-wrapper">
            <Header />
            <div className="process">
                <BannerTitle
                    title={'開發流程'}
                    subtitle={'process'} />
                <div className="main">
                    <ul>
                        {
                            processStep.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <p className="f784">{item.id}</p>
                                        <p className="f325">{item.title}</p>
                                        <p className="f173">{item.content}</p>

                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="step-dec">
                        <span>Step</span>
                    </div>
                </div>

                <Consultation />
            </div>
            <Footer />
        </div>
    )
}

export default CoreTechnology;