import React from 'react'
import Common from '../CommonComponent/Common'
import imgSrc from './IMG/Img1.jpg'

function About() {
    return (
        <>
          <Common
           heading="Welcome to the About page developement"
           imgdata={imgSrc} btn="Contact US"/>
        </>
    )
}

export default About;