import React from 'react'
import Frame from '../components/Frame'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PagePresentation from '../components/PagePresentation'
import ProjectList from '../components/ProjectList'

function Projects({}) {


  return (
    <div >
        <Frame />
        <Header />
        <PagePresentation view='projects'/>
        <ProjectList />
        <Footer />
    </div>
  )
}

export default Projects