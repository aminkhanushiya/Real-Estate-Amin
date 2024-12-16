import React from 'react'
import style from './BannerCart.module.css'
function BannerCart({ Value, desc }) {
    return (
        <div className={style.bannerCart}>
            <h3 className={style.title}>{Value}</h3>
            <p className={style.cartTxt}>{desc}</p>
        </div>
    )
}

export default BannerCart