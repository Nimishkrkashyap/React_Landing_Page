import React from 'react'
import cardStyle from './Card.module.css'

function Card(props) {
    return (
        <>
            <div className={cardStyle.main_div}>
                <div className={cardStyle.img_div}>
                    <img src={props.img} alt="img" />
                </div>
                <div className={cardStyle.content}>
                    <h2 className={cardStyle.heading}>{props.title}</h2>
                    <p className={cardStyle.para}>{props.para}</p>
                    <button className={cardStyle.btn}>{props.btn}</button>
                </div>
            </div>
        </>
    )
}

export default Card;