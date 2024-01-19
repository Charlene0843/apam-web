import React, { useState } from "react";
import { ReactSVG } from "react-svg";


const Slider = () => {
    const [current, setCurrent] = useState(0);

    const history = [
        {
            id: 0,
            date: '2021/01',
            title: '建造第一礦廠',
            content: '行動勝過言辭，毅力助力成功，逆境培養紀律，禮儀雕塑品格。不僅僅是品牌，更是一種充滿活力的精神——對堅定承諾和持久影響的明證。感受本質，擁抱旅程。',

        },
        {
            id: 1,
            date: '2021/03',
            title: '擴增礦機設備',
            content: '挹注領先效能與技術，大幅提升礦機效益'
        },
        {
            id: 2,
            date: '2021/07',
            title: '第二礦廠-100坪大型運算中心',
            content: '打造大型運算中心，強化風險管控安全'
        },
        {
            id: 3,
            date: '2021/08',
            title: '提供市場唯一算力出租商品',
            content: '礦場算力出租服務，佈局現在放眼未來'
        },
        {
            id: 4,
            date: '2022/03',
            title: '​建置 Throne of Dawn',
            content: '奇幻冒險史詩風格，搭配細膩唯美的視覺呈現'
        },
        {
            id: 5,
            date: '2022/08',
            title: '新增軟體開發部門',
            content: '研發新型技術及會員卡相關應用中，秉持著在堅實的技術基礎上創造實用性'
        },
        {
            id: 6,
            date: '2022/10',
            title: '獨創TOD去中心化平台上線',
            content: '​結合新時代的技術、藝術與電商生活，打造適於協作、廣泛交互傳播的平台'
        },
        {
            id: 7,
            date: '2023/04',
            title: 'DAPP RevXBeta 系統上線',
            content: 'RevX 是票券平台，帶您開啟探索新時代的入口'
        }
    ]
    return (
        <section className="slider-container">
            <ul>
                {
                    history.filter((item) => item.id === current).map((item) => {
                        // console.log(400 * item.id / history.length);
                        return (
                            <li key={item.id}>
                                <section>
                                    <div className="timeline">
                                        <div className="star"
                                            style={{ top: `${400 * item.id / history.length}px` }}>
                                            <ReactSVG src={process.env.PUBLIC_URL + '/img/star.svg'} />
                                        </div>

                                        <div className="vertical-line"></div>
                                    </div>
                                    <div className="content">
                                        <div className="main">
                                            <h1>{item.date}</h1>
                                            <h2>{item.title}</h2>
                                            <p>{item.content}</p>
                                        </div>
                                        <div className="img-area">
                                            <img className="blockchain" src={process.env.PUBLIC_URL + '/img/blockchain-1.png'} alt='block chain' />
                                            <img className="man" src={process.env.PUBLIC_URL + '/img/man-1.png'} alt='man' />
                                        </div>
                                    </div>

                                </section>
                                <div className="prev-next">
                                    {item.id > 0 && <div className="arrow-left" onClick={() => setCurrent(n => n - 1)}><div></div></div>}
                                    {item.id < history.length - 1 && <div div className="arrow-right" onClick={() => setCurrent(n => n + 1)}><div></div></div>}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section >
    )

}

export default Slider;