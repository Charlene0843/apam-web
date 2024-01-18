import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ReactSVG } from 'react-svg';

const Accordion = ({ item, index, setToggle }) => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <li key={index}
            onClick={() => {
                if (item.item) {
                    return;
                } else {
                    if (item.title === 'RevX') {
                        setToggle(false);
                    } else {
                        navigate(item?.path);
                    }
                }
            }
            }
        >
            <div
                className='accordion'
                onClick={() => { setShow(!show) }}
                style={show ? { borderBottom: '1px solid', color: '#A0F5EE' } : {}}
            >
                <span>{item.id}</span>
                {item.title === 'RevX' ? <a href="https://apamverse.com/" target="_blank" rel="noreferrer">{item.title}</a> : item.title}
                {item.item
                    ? <div
                        className="plus"
                        style={show ? { transform: 'rotate(765deg)' } : {}}>
                        <ReactSVG src={process.env.PUBLIC_URL + '/img/plus.svg'} />
                    </div>
                    : <></>}
            </div>
            {
                item.item
                    ?
                    <ul className="container"
                        style={show ? { height: '180px' } : { height: '0px' }}

                    >
                        {item.item.map((item, index) => {
                            return (
                                <li key={index}
                                    style={show ? { opacity: '1' } : { opacity: '0' }}
                                    onClick={() => { navigate(item?.path) }}
                                >
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                    : <></>
            }
        </li>
    )
}

export default Accordion