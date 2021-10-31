import React from 'react'
import Multicarousel from "../products/Multicarousel";
import Category  from '../category/Category';
import MainSlider from "./MainSlider";
import Banner from "./Banner";
import SingleBanner from "./SingleBanner";
const Home = props => {
    return (
        <>
            <MainSlider />
            <Category />
            <Banner />
            <Multicarousel catename={'Recently view products'} />
            <Multicarousel catename={'Top  products'} />
            <SingleBanner />
            <Multicarousel catename={'Kids weare products'} />
            <Banner />
            <Multicarousel catename={'Fashion'} />
            <Multicarousel catename={'Electronics'} />
            <SingleBanner />
            <Multicarousel catename={'Furniture'} />
            <Banner />
            <Multicarousel catename={'Beauty,Toys & more'} />
            <SingleBanner />
            <Multicarousel catename={'Grocery'} />
        </>
    )
}


export default Home
