import React from 'react'
import NavBar from '../../Components/NavBar/Navbar'
import Banner from './Banner/Banner'
import Values from './Values/Values'
import AboutTitle from '../../Components/AboutTitle/AboutTitle'
import ValuesCart from '../ValuesCart/ValuesCart'
import Achievements from './Achievements/Achievements'
import Experience from './Experience/Experience'
import Team from './Team/Team'


function About() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Banner />
                <Values />
                <Achievements />
                <Experience />
                <Team />
            </div>

        </>
    )
}

export default About