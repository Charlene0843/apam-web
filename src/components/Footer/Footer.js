import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = (() => {
    const navigate = useNavigate();

    // const footer = [
    //    {
    //         title: 'RevX',
    //         item: [{
    //             title: 'RevX 介紹',
    //             path: '',
    //         }, {
    //             title: '使用教學',
    //             path: '',
    //         }, {
    //             title: '方案說明',
    //             path: '',
    //         }, {
    //             title: '常見問題',
    //             path: '',
    //         }
    //         ]
    //     }, {
    //         title: '軟體開發',
    //         path:'/software-development',
    //         item: [{
    //             title: '預約系統',
    //             path: '',
    //         }, {
    //             title: '售票系統',
    //             path: '',
    //         }, {
    //             title: '電商系統',
    //             path: '',
    //         }, {
    //             title: '智能Pos機',
    //             path: '',
    //         }, {
    //             title: 'CRM會員系統',
    //             path: '',
    //         }
    //         ]
    //     }

    // ]
    const footer = [
        {
            id: '01',
            title: '關於艾恩',
            item: [{
                title: '公司介紹',
                path: '/introduction',
            }, {
                title: '核心技術',
                path: '/core-technology',
            }, {
                title: '開發流程',
                path: '/process',
            }
            ]
        }, {
            id: '02',
            title: 'RevX',
            path: 'https://apamverse.com/'

        }, {
            id: '03',
            title: '軟體開發',
            path: '/software-development'

        }, {
            id: '04',
            title: '區塊鏈開發',
            item: [{
                title: '忠誠會員',
                path: '/loyalty',
            }, {
                title: '鑄造NFT',
                path: '/minting',
            }, {
                title: 'Web3入口',
                path: '/web3',
            }
            ]

        }, {
            id: '05',
            title: '最新消息',
            path: '/news',
            item: [
                {
                    title: '重要公告',
                    path: '/news/announcements',
                }, {
                    title: '活動資訊',
                    path: '/news/activity',
                }, {
                    title: '媒體報導',
                    path: 'media-coverage',
                }
            ]

        }, {
            id: '06',
            title: '合作夥伴',
            path: '/cooperation'

        }
    ]

    return (
        <footer>
            <div className="wrapper">
                <div className="contact-us">CONTACT US</div>
                <section>
                    <div className="info">
                        <p>台北市松山區南京東路四段186號3樓之2</p>
                        <p>Mail : info@apamgroup.com</p>
                        <p>
                            <span>Tel : (02) 6605-0405</span>
                            <br />
                            <span>Fax :  (02) 2506-0571</span>
                        </p>
                        <p>
                            <span>​星期一 ～ 星期五 </span>
                            <br />
                            <span>9:30am - 17:30pm</span>
                        </p>
                    </div>
                    <div className="map">
                        {footer.map((item, index) => {
                            return (


                                <ul key={index}>
                                    <span className="title"
                                        onClick={() => {
                                            if (item.title === 'RevX') {

                                            } else {
                                                navigate(item?.path)
                                            }

                                        }}>
                                        {item.title === 'RevX' ? <a href="https://apamverse.com/" target="_blank" rel="noreferrer">{item.title}</a> : item.title}
                                    </span>
                                    <hr />
                                    {
                                        item.item
                                            ?
                                            <>
                                                {item.item.map((item, index) => {
                                                    return (
                                                        <li key={index}
                                                            onClick={() => { navigate(item?.path) }}>
                                                            {item.title}
                                                        </li>
                                                    )
                                                })}
                                            </>
                                            : <></>
                                    }

                                </ul>


                            )
                        })}
                    </div>

                </section>
                <p className="copyright">
                    Copyright © 2022 AP . APAM. All Rights Reserved.
                    <br />
                    A member of the APAM . APAM International Co. Ltd
                </p>
            </div>

        </footer>
    )
})

export default Footer;