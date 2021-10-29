import React from 'react'
import Common from '../CommonComponent/Common'
import imgData from './IMG/Img1.jpg'

function Home() {
    return (
        <>
            <Common heading="Web Development" imgdata={imgData} btn="Get Started"/>
        </>
    )
}

export default Home;
