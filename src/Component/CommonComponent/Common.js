import React from 'react'
import commonStyle from './Common.module.css'

function Common(props) {
    return (
        <>
            <div className={commonStyle.container}>
                <div className={commonStyle.left}>
                    <h1 className={commonStyle.heading}>{props.heading}</h1>
                    <p className={commonStyle.para}>Your guide to summiting the peak of digital success</p>
                    <button className={commonStyle.btn}>{props.btn}</button>
                </div>
                <div className={commonStyle.right}>
                  <img src={props.imgdata}  className={commonStyle.img} alt="imgdata" />
                </div>
            </div>
        </>
    )
}

export default Common;