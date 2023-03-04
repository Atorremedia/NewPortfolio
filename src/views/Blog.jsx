import { useContext, useState, useEffect } from 'react'
import Frame from '../components/Frame'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import styles from '../css/blog.module.css'
import { themeContext } from '../contexts/ThemeContext'
import PostArticle from '../components/PostArticle'


function Blog({}) {
  const {theme} = useContext(themeContext);
  const [displayedArticle, setDisplayedArticle] = useState(undefined)
  
  useEffect(() => {
    console.log(displayedArticle)
  }, [displayedArticle])

  return (
    <>
      <Frame />
      <Header />
    <div className={`${styles.mainTitle} blogTitleContainer ${theme}`}>
      <h1 className={`${styles.mainTitleText} blogTitle ${theme}`} >Machines for humans</h1>
      <p className={`${styles.mainSubtitle} blogSubtitle ${theme}`} >web development and digital interaction blog by August Ollé</p>
    </div>
    {displayedArticle ?
      <PostArticle displayedArticle={displayedArticle} setDisplayedArticle={setDisplayedArticle} />
      :
      <Posts setDisplayedArticle={setDisplayedArticle} />
    }
      <Footer />
    </>
      )
  }


export default Blog