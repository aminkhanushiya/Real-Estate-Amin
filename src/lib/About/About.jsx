import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from './Banner/Banner'
import Values from './Values/Values'
import AboutTitle from '../../Components/AboutTitle/AboutTitle'
import Achievements from './Achievements/Achievements'
import Experience from './Experience/Experience'
import Team from './Team/Team'
import img1 from '../../assets/Images/team-1.png'
import img2 from '../../assets/Images/team-2.png'
import img3 from '../../assets/Images/team-3.png'
import img4 from '../../assets/Images/team-4.png'
import Client from './Client/Client'
function About() {
    return (
        <>
            <Navbar />
            <div className="container">
                {/* banner */}
                <Banner />

                {/* values */}
                <Values />

                {/* achievement */}
                <Achievements />

                {/* exprience */}
                <Experience />


                {/* team */}
                <AboutTitle values={'Our Achievements'} valuesdesc={'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'} />
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <Team owner={img1} OwnerName={'Max Mitchell'} Position={'Founder'} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <Team owner={img2} OwnerName={'Sarah Johnson'} Position={'Chief Real Estate Officer'} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <Team owner={img3} OwnerName={'David Brown'} Position={'Head of Property Management'} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <Team owner={img4} OwnerName={'Michael Turner'} Position={'Legal Counsel'} />
                    </div>
                </div>


                {/* client */}
                <AboutTitle values={'Our Valued Clients'} valuesdesc={`At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving`} />
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <Client year={'Since 2019'} heading={'ABC Corporation'} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <Client year={'Since 2019'} heading={'ABC Corporation'} />
                    </div>
                </div>

                {/* esate jorny */}
                {/* <Estate /> */}

            </div>

        </>
    )
}

export default About