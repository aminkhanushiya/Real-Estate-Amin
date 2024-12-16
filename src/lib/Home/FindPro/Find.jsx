import React from 'react'
import style from './Find.module.css';
import proimg from '../../../assets/Images/Container (1).png'
function Find() {
    return (
        <>
            <div className={style.find}>
                <div className="row">
                    <div className="col-lg-3">
                        <div className={style.proparty}>
                            <img src={proimg} alt="" />
                            <h6 className={style.title}>Find Your Dream Home</h6>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={style.proparty}>
                            <img src={proimg} alt="" />
                            <h6 className={style.title}>Find Your Dream Home</h6>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={style.proparty}>
                            <img src={proimg} alt="" />
                            <h6 className={style.title}>Find Your Dream Home</h6>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={style.proparty}>
                            <img src={proimg} alt="" />
                            <h6 className={style.title}>Find Your Dream Home</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Find