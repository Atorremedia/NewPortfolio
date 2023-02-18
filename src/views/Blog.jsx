import { useContext } from 'react'
import Frame from '../components/Frame'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import styles from '../css/blog.module.css'
import { themeContext } from '../contexts/ThemeContext'


function Blog({}) {
  const {theme} = useContext(themeContext);

  return (
    <>
      <Frame />
      <Header />
    <div className={styles.mainTitle}>
      <h1 className={`${styles.mainTitleText} blogTitle ${theme}`} >Machines for humans</h1>
      <p className={`${styles.mainSubtitle} blogSubtitle ${theme}`} >web development and digital interaction blog by August Ollé</p>
    </div>
      <Posts />
      <Footer />
    </>
      )
  }


export default Blog