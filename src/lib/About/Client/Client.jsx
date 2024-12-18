import React from 'react'
import style from './Client.module.css'
import { AiOutlineQrcode } from 'react-icons/ai'
import { IoIosFlash } from 'react-icons/io'
function Client({ year, heading }) {
    return (
        <div className={style.client}>

            <div className={style.ClientTitle}>
                <div className={style.title}>
                    <span className={style.year}>{year}</span>
                    <h5>{heading}</h5>
                </div>
                <div className={style.visitBtn}>
                    <button>Visit Website</button>
                </div>
            </div>
            <div className={style.dominCategory}>
                <div className={style.domin}>
                    <span><AiOutlineQrcode />Domain</span>
                    <h5>Commercial Real Estate</h5>
                </div>
                <div className={style.category}>
                    <span><IoIosFlash />Category</span>
                    <h5>Commercial Real Estate</h5>
                </div>
            </div>
            <div className={style.decs}>
                <span className={style.question}>What They Said 🤗</span>
                <p>Estatein's expertise in finding the perfect office space for our expanding operations was
                    invaluable. They truly understand our business needs.</p>
            </div>
        </div>
    )
}

export default Client