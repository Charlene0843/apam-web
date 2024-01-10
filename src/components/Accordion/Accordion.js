import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Accordion = ({ item, index }) => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <li key={index}
            onClick={() => {
                if (item.item) {
                    return;
                } else {
                    navigate(item?.path);
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
                {item.title}
                {item.item
                    ? <div
                        className="plus"
                        style={show ? { transform: 'rotate(765deg)' } : {}}>+</div>
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