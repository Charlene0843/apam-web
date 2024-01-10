import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = (() => {
    const navigate = useNavigate();

    const footer = [
        {
            title: '關於艾恩',
            item: [{
                title: '公司介紹',
                path: '/introduction',
            }, {
                title: '核心技術',
                path: '/core-technology',
            }
            ]
        }, {
            title: 'RevX',
            item: [{
                title: 'RevX 介紹',
                path: '',
            }, {
                title: '使用教學',
                path: '',
            }, {
                title: '方案說明',
                path: '',
            }, {
                title: '常見問題',
                path: '',
            }
            ]
        }, {
            title: '軟體開發',
            path:'/software-development',
            item: [{
                title: '預約系統',
                path: '',
            }, {
                title: '售票系統',
                path: '',
            }, {
                title: '電商系統',
                path: '',
            }, {
                title: '智能Pos機',
                path: '',
            }, {
                title: 'CRM會員系統',
                path: '',
            }
            ]
        }, {
            title: '最新消息',
            item: [{
                title: '所有消息',
                path: '',
            }, {
                title: '重要公告',
                path: '',
            }, {
                title: '活動資訊',
                path: '',
            }, {
                title: '媒體報導',
                path: '',
            }
            ]
        }, {
            title: '合作夥伴',
            item: [{
                title: '合作夥伴',
                path: '',
            }
            ]
        }
    ]
    return (
        <footer>
             <p className="copyright">
                Copyright © 2022 AP . APAM. All Rights Reserved.
                <br />
                A member of the APAM . APAM International Co. Ltd
            </p>
            <div className="wrapper">
                <div className="contact-us">CONTACT US</div>
            <section>
                <div className="info">
                    <p>台北市松山區南京東路四段186號3樓之2</p>
                    <p>Mail : info@apamgroup.com</p>
                    <p>
                        <span>Tel : (02) 6605-0405</span>
                        <span>Fax :  (02) 2506-0571</span>
                    </p>
                    <p>
                        <span>​星期一 ～ 星期五 </span>
                        <span>9:30am - 17:30pm</span>
                    </p>
                </div>
                {footer.map((item, index) => {
                    return (
                        <ul key={index}>
                            <span className="title"
                            onClick={()=>{navigate(item?.path)}}>{item.title}</span>
                            <hr />
                            {item.item.map((item, index) => {
                                return (
                                    <li key={index}
                                    onClick={()=>{navigate(item?.path)}}>
                                        {item.title}
                                    </li>
                                )
                            })}
                        </ul>
                    )
                })}
            </section>
            </div>
            
        </footer>
    )
})

export default Footer;