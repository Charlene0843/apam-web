import React from "react";
import { ReactSVG } from "react-svg";

const BlockchainBanner = ({ title, content }) => {
    return (
        <>
            <div className='blockchain-banner'>
                <p className="title w7">
                    {title.firstPart}
                    <span
                        className={`gradient-color ${title.background}`}
                    >{title.significant}
                    </span>
                    {title.secondPart}
                    <br />
                    {title.br}
                </p>

                <p className="f15 cw1">
                    {title.description}
                </p>
            </div>

            <div className="blockchain-intro">
                <ul>
                    {
                        content.map((item) => {
                            return (
                                <li key={item.img}>
                                    <div className="picture">
                                        <ReactSVG src={`${process.env.PUBLIC_URL}/img/blockchain/${title.title}/${item.img}.svg`} />
                                    </div>
                                    <div className="main">
                                        <ReactSVG src={`${process.env.PUBLIC_URL}/img/blockchain/${title.title}/icon/${item.icon}.svg`} />
                                        <p className="f2 w7">{item.title}</p>
                                        <p className="f125 w3 cw1">{item.content}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default BlockchainBanner;