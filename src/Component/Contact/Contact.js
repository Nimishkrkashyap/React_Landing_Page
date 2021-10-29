 import React, { useState } from 'react'
import contactStyle from './Contact.module.css'

function Contact() {
  const [data, SetData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const {name, value} = event.target;

    SetData((preValue) => {
      return{
        ...preValue,
        [name]: value,
      }
    })
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile no is ${data.mobile}. My E-Mail id is ${data.email} And My message is ${data.msg}`)
  };
  return (
    <>
      <div className={contactStyle.container}>

        <h1 className={contactStyle.heading}>Contact us</h1>
        <form onSubmit={formSubmit} className={contactStyle.form}>
          <h2>Full Name</h2>
          <input type="text"
            className={contactStyle.text}
            name="fullname"
            value={data.fullname}
            onChange={inputEvent} />

          <h2>Mobile No</h2>
          <input type="number"
            className={contactStyle.number}
            name="mobile"
            value={data.mobile}
            onChange={inputEvent} />

          <h2>E-Mail</h2>
          <input type="email"
            className={contactStyle.email}
            name="email"
            value={data.email}
            onChange={inputEvent} />

          <h2>Message</h2>
          <textarea
            name="msg"
            value={data.msg}
            onChange={inputEvent}
            className={contactStyle.message}></textarea>

          <input type="Submit"
          value="Submit Form"
          onChange={inputEvent}
          className={contactStyle.button} />
        </form>
      </div>
    </>
  )
}

export default Contact;
