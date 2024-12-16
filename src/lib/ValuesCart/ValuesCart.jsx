import React from 'react'
import style from './ValuesCart.module.css'
// import valuesimg from '../../assets/Images/ValuesIcon.png'
function ValuesCart({ valuesimg, valuesTitle, valuesCartdesc }) {
    return (
        <div className={style.ValuesCart}>
            <div className={style.imgTxt}>
                <img className={style.valcarimg} src={valuesimg} alt="" />
                <h5>{valuesTitle}</h5>
            </div>
            <p className={style.valuesTxt}>{valuesCartdesc}</p>
        </div>
    )
}

export default ValuesCart