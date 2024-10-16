import React from 'react'
import { MdContactSupport  } from "react-icons/md";

const Contact = () => {
  return (
    <section className='contact section-headings' id='contact'>
      <header>
      <span>Get in touch</span>
      <h1 className='bold'>With Me</h1>
      </header>

      <div className="contact-section">
        <div className="text-message">
            <h1>We had happy to hear  from you</h1>
        </div>

        <form action="" className="form">
                <i><MdContactSupport className='icon'/></i>
                <input type="text" placeholder='Name'/>

                <input type="Email" placeholder='Email'/>

                <textarea name="" id="" placeholder='your message' resize></textarea>
            <button className="send">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
