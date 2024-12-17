import React from 'react'

import Banner from './Banner/Banner'
import Find from './FindPro/Find'
import Title from '../../Components/Title/Title'
import Navbar from '../../Components/Navbar/Navbar'
// import Banner from 'Banner'
function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Find />
            <Title Heading={'Featured Properties'}
                Descr={'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'}
                BtnTxt={'View All Properties'}
            />
        </>
    )
}

export default Home