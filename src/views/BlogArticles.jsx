import { useState, useEffect } from 'react'
import Frame from '../components/Frame'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import styles from '../css/blog.module.css'
import { themeContext } from '../contexts/ThemeContext'
import PostArticle from '../components/PostArticle'


function BlogArticles({}) {
  
    const [data, setData] = useState("")

  useEffect(() => {
    fetch("/articles").then(
                data => {
        setData(data)
        }
    )

  }, [])

  return (
    <>
      <Frame />
      <Header />

      <Footer />
    </>
      )
  }


export default BlogArticles