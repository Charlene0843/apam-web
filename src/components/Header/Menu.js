import React from "react";
import Accordion from "../Accordion/Accordion";

const Menu = ({ toggle, setToggle }) => {

    const header = [
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
        <div
            className={`menu-view ${toggle ? 'active' : ''}`}
        // 這是用animation控制的，後來改成transition
        // style={toggle ? {display: 'block',} : { display: 'none' }}
        >
            <ul>
                {header.map((item, index) => {
                    return (
                        <Accordion
                            key={index}
                            item={item}
                            index={index}
                            setToggle={setToggle} />
                    )
                })}
            </ul>


        </div >
    )
}

export default Menu;