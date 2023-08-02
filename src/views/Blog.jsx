import { useContext, useState, useEffect } from 'react'
import Frame from '../components/Frame'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import styles from '../css/blog.module.css'
import { themeContext } from '../contexts/ThemeContext'
import PostArticle from '../components/PostArticle'
import useAxios from '../hooks/useAxios'

function Blog({}) {
  const {theme} = useContext(themeContext);
  const [displayedArticle, setDisplayedArticle] = useState(undefined)
  
  const data = useAxios({})
  console.log(data)

  return (
    <>
      <Frame />
      <Header />
    <div className={`${styles.mainTitle} blogTitleContainer ${theme}`}>
      <h1 className={`${styles.mainTitleText} blogTitle ${theme}`} >Machines for humans</h1>
      <p className={`${styles.mainSubtitle} blogSubtitle ${theme}`} >web development and digital interaction blog by August Ollé</p>
    </div>
    {displayedArticle ?
      <PostArticle displayedArticle={displayedArticle} setDisplayedArticle={setDisplayedArticle}  response={data.response}/>
      :
      <Posts setDisplayedArticle={setDisplayedArticle} response={data.response}/>
    }
      <Footer />
    </>
      )
  }


export default Blog