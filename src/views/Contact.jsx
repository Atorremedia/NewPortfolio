import React from 'react'
import Frame from '../components/Frame'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PagePresentation from '../components/PagePresentation'

function Contact({}) {


  return (
    <div >
        <Frame />
        <Header />
        <PagePresentation view='contact'/>
                <form action="https://formsubmit.co/info@augustolle.com" method="POST" autocomplete="off" class="form" spellcheck="false">
                    <h2 class="form__title">Contact form</h2>
                    <input type="hidden" name="_subject" value="New message from contact form" />
                    <input class="form__input" type="text" name="name" id="name" required size="45" />
                    <label class="form__label" for="name">Your name*</label>
                    <input class="form__input" type="email" name="email" id="email" required size="15" />
                    <label class="form__label" for="email">Your email*</label>
                    <textarea class="form__input" id="area" name="message" rows="4" cols="50"></textarea>
                    <label class="form__label arealabel" for="area">Your comments</label>
                    <input type="submit" class="form__submit" value="submit" />
                    <div></div>
                </form>

        <Footer />
    </div>
  )
}

export default Contact