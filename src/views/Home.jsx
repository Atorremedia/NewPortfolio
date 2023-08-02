import React from 'react'
import Presentation from '../components/Presentation'
import Frame from '../components/Frame'
import HomeCta from '../components/HomeCta'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollToTop from '../helpers/ScrollToTop'

function Home({}) {


  return (
    <>
        <Frame />
        <Header />
        <Presentation />
        <HomeCta />
        <Footer />
    </>
  )
}

export default Home