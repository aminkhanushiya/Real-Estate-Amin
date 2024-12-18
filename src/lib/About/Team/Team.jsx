import React from 'react'
import style from './Team.module.css'
import hello from '../../../assets/Images/Text.png'
import { LuSend } from 'react-icons/lu'
import { FaTwitter } from 'react-icons/fa'

function Team({ owner, OwnerName, Position }) {
    return (
        <div className={style.Team}>

            <div className={style.teamcart}>
                <img className={style.ownerImg} src={owner} alt="" />
                <div className={style.twitter}>
                    <FaTwitter />
                </div>
                <h5 className={style.ownerName}>{OwnerName}</h5>
                <p className={style.position}>{Position}</p>


                <div className={style.sedding}>
                    <img src={hello} alt="" />
                    <div className={style.seddingBtn}>
                        <LuSend />
                    </div>
                </div>
            </div>








        </div>



    )
}

export default Team