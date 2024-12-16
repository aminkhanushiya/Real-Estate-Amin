import React from 'react'
import style from './Banner.module.css'
import BannerCart from '../../../Components/BannerCart/BannerCart'
import bannerimg from '../../../assets/Images/AbooutBannerimg.png'
function Banner() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className={style.left}>
                        <h3>Our Journey</h3>
                        <p className={style.bannerTxt}>Our story is one of continuous growth and evolution. We started as a small team
                            with big dreams, determined to create a real estate platform that transcended the
                            ordinary. Over the years, we've expanded our reach, forged valuable partnerships,
                            and gained the trust of countless clients.</p>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <BannerCart Value={'200+'} desc={'Happy Customers'} />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <BannerCart Value={'10k+'} desc={'Properties For Clients'} />
                            </div>
                            <div className="col-lg-4 col-12">
                                <BannerCart Value={'16+'} desc={'Years of Experience'} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className={style.right}>
                        <img className={style.bannerimg} src={bannerimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner