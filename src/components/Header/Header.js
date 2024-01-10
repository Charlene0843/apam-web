import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Accordion from "../Accordion/Accordion";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);




    const Menu = () => {

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

            }, {
                id: '03',
                title: '軟體開發',
                path: '/software-development'

            }, {
                id: '04',
                title: '區塊鏈開發',

            }, {
                id: '05',
                title: '最新消息',

            }, {
                id: '06',
                title: '合作夥伴',

            }
        ]


        return (
            <div
                className="menu-view"
                style={toggle ? {
                    display: 'block',
                } : { display: 'none' }
                }>
                <ul>
                    {header.map((item, index) => {
                        return (
                            <Accordion
                                item={item}
                                index={index} />
                        )
                    })}
                </ul>


            </div >
        )
    }

    return (
        <>
            <nav>
                <img src={process.env.PUBLIC_URL + '/img/logo/apam_logo.png'} alt="logo" onClick={() => { navigate('/') }} />
                <div className="menu"
                    style={toggle ? { position: 'fixed' } : {}}
                >

                    <ReactSVG
                        className="burger-cross"
                        src={process.env.PUBLIC_URL + '/img/burger_menu_cross.svg'}
                        onClick={() => setToggle(!toggle)}
                        style={toggle ? { opacity: '1' } : { opacity: '0' }} />

                    <ReactSVG
                        className="burger"
                        src={process.env.PUBLIC_URL + '/img/Burger_Mene.svg'}

                        style={toggle ? { opacity: '0' } : { opacity: '1' }} />

                    <button>聯絡我們</button>
                </div>
            </nav>
            <Menu />
        </>

    )
}
export default Header;