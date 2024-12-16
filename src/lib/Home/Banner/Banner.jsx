import React from 'react'
import style from './Banner.module.css';
import bannerimg from '../../../assets/Images/Container.png'
function Banner() {
    return (
        <>

            <div className={style.banner}>
                <div className={style.bannerLeft}>
                    <div className={style.bannerTxt}>
                        <h2>
                            Discover Your Dream <br /> Property with Estatein
                        </h2>
                        <p>
                            Your journey to finding the perfect property begins here. Explore our listings to find the home <br /> that matches your dreams.
                        </p>
                    </div>

                    <div className={style.bennerBtn}>
                        <button className={style.borderBtn}>Learn More</button>
                        <button className={style.fillBtn}>Browse Properties</button>
                    </div>

                    <div className={style.customer}>

                    </div>
                </div>
                <div className={style.bannerRight}>
                    <img className={style.bannerImage} src={bannerimg} alt="" />
                </div>
            </div>

        </>
    )
}

export default Banner;