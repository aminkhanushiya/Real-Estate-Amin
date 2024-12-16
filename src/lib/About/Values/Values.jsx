import React from 'react'
import style from './Values.module.css'
import AboutTitle from '../../../Components/AboutTitle/AboutTitle'
import ValuesCart from '../../ValuesCart/ValuesCart'
import img1 from '../../../assets/Images/ValuesIcon.png'
function Values() {
    return (
        <>
            <div className={style.values}>
                <div className="row">
                    <div className="col-lg-4">
                        <AboutTitle values={'Our Values'} valuesdesc={'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'} />
                    </div>
                    <div className="col-lg-8">
                        <div className={style.bennifits}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ValuesCart valuesimg={img1} valuesTitle={'Trust'} valuesCartdesc={'Trust is the cornerstone of every successful real estate transaction.'} />
                                </div>
                                <div className="col-lg-6">
                                    <ValuesCart valuesimg={img1} valuesTitle={'Trust'} valuesCartdesc={'Trust is the cornerstone of every successful real estate transaction.'} />
                                </div>
                                <div className="col-lg-6">
                                    <ValuesCart valuesimg={img1} valuesTitle={'Trust'} valuesCartdesc={'Trust is the cornerstone of every successful real estate transaction.'} />
                                </div>
                                <div className="col-lg-6">
                                    <ValuesCart valuesimg={img1} valuesTitle={'Trust'} valuesCartdesc={'Trust is the cornerstone of every successful real estate transaction.'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Values