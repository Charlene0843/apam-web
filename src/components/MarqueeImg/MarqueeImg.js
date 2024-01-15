import React from "react";

const MarqueeImg = ({ direction, content }) => {
    const trippleContent = content.concat(content,content);
    return (
        <div className="marquee-container-img">
            <div className={`marquee-content-img ${direction}`}>
                {trippleContent.map((item,index) => {
                    return (
                        <div className="marquee-img-wrapper" key={index}>
                            <img src={process.env.PUBLIC_URL + '/img/marquee/tool/' + item + '.svg'} alt={item} />
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default MarqueeImg;