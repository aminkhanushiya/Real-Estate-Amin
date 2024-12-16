import React from 'react'
import style from './Team.module.css'
import AboutTitle from '../../../Components/AboutTitle/AboutTitle'

function Team() {
    return (
        <div className={style.Team}>
            <AboutTitle values={'Our Achievements'} valuesdesc={'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'} />
        </div>
    )
}

export default Team