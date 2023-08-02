import React from 'react'
import Frame from '../components/Frame'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PagePresentation from '../components/PagePresentation'
import styles from '../css/contact.module.css'
import ScrollToTop from '../helpers/ScrollToTop'



function Contact({}) {

  return (
    <div >
        <ScrollToTop />
        <Frame />
        <Header />
        <PagePresentation view='contact'/>
        <div className={`${styles.formContainer}`}>
          <form action="https://formsubmit.co/info@augustolle.com" method="POST" autoComplete="off" className={`${styles.form}`} spellCheck="false">
              <h2 className={`${styles.formTitle}`}>Contact form</h2>
              <input type="hidden" name="_subject" value="New message from contact form" />
              <label className={`${styles.formLabel}`} htmlFor="name">Your name*</label>
              <input className={`${styles.formInput}`} type="text" name="name" id="name" required size="45" />
              <label className={`${styles.formLabel}`} htmlFor="email">Your email*</label>
              <input className={`${styles.formInput}`} type="email" name="email" id="email" required size="15" />
              <label className={`${styles.formLabel} ${styles.arealabel}`} htmlFor="area">Your comments</label>
              <textarea className={`${styles.formInput}`} id="area" name="message" rows="4" cols="50"></textarea>
              <input type="submit" className={`${styles.formSubmit}`} value="submit" />
          </form>
        </div>
        <Footer />
    </div>
  )
}

export default Contact