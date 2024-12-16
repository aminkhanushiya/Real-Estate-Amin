import React from 'react'
import style from './Achievements.module.css'
import AboutTitle from '../../../Components/AboutTitle/AboutTitle'
import ValuesCart from '../../ValuesCart/ValuesCart'

function Achievements() {
    return (
        <div className={style.Achievements}>
            <AboutTitle values={'Our Achievements'} valuesdesc={'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'} />

            <div className="row">
                <div className="col-lg-4">
                    <div className={style.Achievementscart}>
                        <ValuesCart valuesTitle={'3+ Years of Excellence'} valuesCartdesc={`With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={style.Achievementscart}>
                        <ValuesCart valuesTitle={'Happy Clients'} valuesCartdesc={`With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={style.Achievementscart}>
                        <ValuesCart valuesTitle={'Industry Recognition'} valuesCartdesc={`With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`} />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Achievements