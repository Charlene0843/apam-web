import React, { useState } from "react";
import { ReactSVG } from "react-svg";
const ContactUs = ({ contactShow, setContactShow }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [companyUrl, setCompanyUrl] = useState('');
    const [info, setInfo] = useState({ budget: null, provisioningTime: null, hasNFT: null });

    // regular expression
    const nameRule = /^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/;
    const phoneRule = /^09\d{8}$/;
    const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

    function isName(name) {
        return name.search(nameRule) !== -1 ? true : false
    }
    function isPhone(phone) {
        return phone.search(phoneRule) !== -1 ? true : false
    }
    function isEmail(email) {
        return email.search(emailRule) !== -1 ? true : false
    }

    return (
        <div
            className={`contact ${contactShow ? 'active' : ''}`}
        // onClick={()=>{setContactShow(!contactShow)}}

        // style={contactShow?{right:'500px'}:{right:'30px'}}
        // style={contactShow?{animation: 'slip-in 1s linear'}:{animation: 'slip-out 1s linear'}}
        // style={{
        //     transition: 'translate 3s linear',
        //     transform: `translateX(${contactShow}%)`,
        // }}
        // style={contactShow?{transform:'translateX(0%)'}:{transform:'translateX(100%)'}}
        >
            <div className="contact-header">
                <p>聯絡我們</p>
                <ReactSVG
                    className="burger-cross"
                    src={process.env.PUBLIC_URL + '/img/burger_menu_cross.svg'}
                    onClick={(e) => { setContactShow(false); e.stopPropagation(); }}
                />
            </div>
            <div className="contact-form">
                <form>
                    <div className="text-input-area">
                        <input
                            className="text-input f173 short"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="聯絡人姓名*"
                            value={name}
                            onChange={(e) => setName(e.target.value)}></input>
                        <input
                            className="text-input f173 short"
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            inputMode="tel"
                            placeholder="聯絡人電話*"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>

                    <input
                        className="text-input f173 long"
                        type="text"
                        name="email"
                        id="email"
                        inputMode="email"
                        placeholder="電子信箱*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                    <input
                        className="text-input f173 long"
                        type="text"
                        name="company-url"
                        id="company-url"
                        placeholder="公司網址"
                        value={companyUrl}
                        onChange={(e) => setCompanyUrl(e.target.value)}></input>
                    <div className="budget radio">
                        <p className="f173">您每月的系統預算？*</p>
                        <div>
                            <label className="f173">
                                <input
                                    type="radio"
                                    value="$800-$2,500"
                                    checked={info.budget === '$800-$2,500'}
                                    onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            budget: e.target.value
                                        })
                                    }} />
                                $800-$2,500
                            </label>
                            <label className="f173">
                                <input
                                    type="radio"
                                    value="$5,000-$12,000"
                                    checked={info.budget === '$5,000-$12,000'}
                                    onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            budget: e.target.value
                                        })

                                    }} />
                                $5,000-$12,000
                            </label>
                        </div>

                    </div>
                    <div className="provisioning-time radio">
                        <p className="f173">您期望開通時間？*</p>
                        <div>
                            <label className="f173">
                                <input
                                    type="radio"
                                    value="立即"
                                    checked={info.provisioningTime === '立即'}
                                    onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            provisioningTime: e.target.value
                                        })
                                    }} />
                                立即
                            </label>
                            <label className="f173">
                                <input
                                    type="radio"
                                    value="1~3個月"
                                    checked={info.provisioningTime === '1~3個月'}
                                    onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            provisioningTime: e.target.value
                                        })

                                    }} />
                                1~3個月
                            </label> <label className="f173">
                                <input
                                    type="radio"
                                    value="3~6個月"
                                    checked={info.provisioningTime === '3~6個月'}
                                    onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            provisioningTime: e.target.value
                                        })

                                    }} />
                                3~6個月
                            </label> <label className="f173">
                                <input
                                    type="radio"
                                    value="6個月~1年"
                                    checked={info.provisioningTime === '6個月~1年'}
                                    onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            provisioningTime: e.target.value
                                        })

                                    }} />
                                6個月~1年
                            </label>
                        </div>

                    </div>
                    <div className="hasNFT radio">
                        <p className="f173">目前是否有NFT項目？*</p>
                        <div>
                            <label className="f173">
                                <input
                                    type="radio"
                                    value="是"
                                    checked={info.hasNFT === '是'}
                                    onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            hasNFT: e.target.value
                                        })
                                    }} />
                                是
                            </label>
                            <label className="f173">
                                <input
                                    type="radio"
                                    value="否"
                                    checked={info.hasNFT === '否'}
                                    onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            hasNFT: e.target.value
                                        })

                                    }} />
                                否
                            </label>
                        </div>
                    </div>
                    <textarea
                        placeholder="想了解的服務內容或是其他疑問" />



                    <button
                        className="submit-form-btn"
                        onClick={(e) => {
                            ;
                            e.preventDefault();
                            isName(name)
                                ? (
                                    isPhone(phoneNumber)
                                        ? (
                                            isEmail(email)
                                                ? (
                                                    info.budget !== null
                                                        ? (
                                                            info.provisioningTime !== null
                                                                ? (
                                                                    info.hasNFT !== null
                                                                        ? (
                                                                            alert('yes')) : alert('請勾選期望的開通時間')
                                                                ) : alert('請勾選期望的開通時間')
                                                        ) : alert('請勾選系統預算')
                                                ) : alert('電子信箱格式錯誤')
                                        ) : alert('電話格式錯誤')
                                ) : alert('名字不可有空白、數字、特殊符號以及中英混用')
                            // : setCheckUserInfo({'name':'名字不可有空白、數字、中英混用','tel': '', 'email': '', 'uId': '' })
                        }}>
                        送出
                    </button>
                </form>
            </div>


        </div >
    )
}

export default ContactUs;