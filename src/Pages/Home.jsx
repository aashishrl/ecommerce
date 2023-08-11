import React from 'react'
import SwiperSlider from '../Components/Home/SwiperSlider'
import SubProduct from '../Components/Home/SubProduct'
import Featured from '../Components/Home/Featured'
import Sale from '../Components/Home/Sale'
import Bottom from '../Components/Home/Bottom'
import FixBg from '../Components/Home/FixBg'
import HomeProducts from '../Components/Home/HomeProducts'

function Home (){
    return(
        <>
            <SwiperSlider/>
            <SubProduct/>
            <Featured/>
            <Sale/>
            <HomeProducts tt="mens-watches" />
            <HomeProducts tt="mens-shoes" />
            <HomeProducts tt="womens-jewellery" />
            <FixBg/>
            <Bottom/>            
        </>
    )
}

export default Home