import React from 'react'
import style from './AboutTitle.module.css'
function AboutTitle({ values, valuesdesc }) {
    return (
        <div>
            <h4>{values}</h4>
            <p className={style.AboutTitletxt}>{valuesdesc}</p>
        </div>
    )
}

export default AboutTitle