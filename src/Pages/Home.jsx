import React from "react";
import { Slider } from "../Components/Slider";
import { ShopWindow } from "../Components/ShopWindow";
import { Popular } from "../Components/Popular";
import { Examples } from "../Components/Examples";
import { Questions } from "../Components/Questions";


const Home = () => {

    return (
        <>
            <Slider />
            <ShopWindow />
            <Popular />
            <Examples />
            <Questions />
        </>
    )
}

export default Home;