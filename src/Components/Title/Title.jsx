import React from 'react'
import style from './Title.module.css'
function Title({ Heading, Descr, BtnTxt }) {
    return (
        <>
            <div className="container">
                <div className={style.title}>
                    <div className="row">
                        <div className="col-lg-8">
                            <h5>{Heading}</h5>
                            <p className={style.desc}>{Descr}</p>
                        </div>
                        <div className="col-lg-4">
                            <div className={style.left}>
                                <button className={style.titleBtn}>{BtnTxt}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title