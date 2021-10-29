import React from 'react'
import serviceStyle from './Services.module.css'
import Card from './Card/Card'
import Data from './ServiceData'

function Services() {
    return (
        <>
            <h1 className={serviceStyle.heading}>Our Services</h1>
            <div className={serviceStyle.card_container}>
                {
                    Data.map((val, index) => {
                        return <Card
                            img = {val.img}
                            title={val.title}
                            para={val.para}
                            btn={val.link}
                        />
                    })
                }
            </div>
        </>
    )
}

export default Services;
