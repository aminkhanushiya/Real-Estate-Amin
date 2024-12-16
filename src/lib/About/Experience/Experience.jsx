import React from 'react'
import style from './Experience.module.css'
import AboutTitle from '../../../Components/AboutTitle/AboutTitle'
import ValuesCart from '../../ValuesCart/ValuesCart'

function Experience() {
    return (
        <div className={style.Experience}>
            <AboutTitle values={'Navigating the Estatein Experience'} valuesdesc={`At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`} />


            <div className="row">
                <div className="col-lg-4">
                    <div className={style.Experiencecart}>
                        <h5 className={style.title}>Step 01</h5>
                        <ValuesCart valuesTitle={'3+ Years of Excellence'} valuesCartdesc={`With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={style.Experiencecart}>
                        <h5 className={style.title}>Step 02</h5>
                        <ValuesCart valuesTitle={'3+ Years of Excellence'} valuesCartdesc={`With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={style.Experiencecart}>
                        <h5 className={style.title}>Step 03</h5>
                        <ValuesCart valuesTitle={'3+ Years of Excellence'} valuesCartdesc={`With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={style.Experiencecart}>
                        <h5 className={style.title}>Step 04</h5>
                        <ValuesCart valuesTitle={'3+ Years of Excellence'} valuesCartdesc={`With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={style.Experiencecart}>
                        <h5 className={style.title}>Step 05</h5>
                        <ValuesCart valuesTitle={'3+ Years of Excellence'} valuesCartdesc={`With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={style.Experiencecart}>
                        <h5 className={style.title}>Step 06to</h5>
                        <ValuesCart valuesTitle={'3+ Years of Excellence'} valuesCartdesc={`With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience