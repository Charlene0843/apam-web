import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import BannerTitle from "../../components/BannerTitle/BannerTitle";

const Cooperation = () => {
    const cooperationBrand = ['ipfs', 'aws', 'hp', 'receipt', 'mobilon', 'msi', 'asus', 'paynow', 'opensea', 'tappay', 'gigabyte', 'chainlink', 'bitcoinAssociation']
    return (
        <div className="home-wrapper">
            <Header />
            <div className="cooperation">
                <BannerTitle
                    title={'合作夥伴'}
                    subtitle={'cooperation'} />
                <div className="wrapper">
                    <ul>
                        {
                            cooperationBrand.map((item) => {
                                return (
                                    <li key={item}>
                                        <img src={process.env.PUBLIC_URL + '/img/cooperation/' + item + '.jpg'} alt={item} />
                                    </li>
                                )

                            })
                        }
                    </ul>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Cooperation;