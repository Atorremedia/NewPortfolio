import React, { useContext } from 'react'
import { themeContext } from '../contexts/ThemeContext';
import styles from '../css/postArticle.module.css'

function PostArticle({displayedArticle, setDisplayedArticle, response}) {

    const {theme} = useContext(themeContext);


    function handleClick () {
        window.scrollTo(0,0)
        setDisplayedArticle(undefined)
    }

       
        return (
        <>
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleClick} className={`${styles.backButton}`} >Back to Recent Posts</button>
            </div>
            <div className={`${styles.articleContainer} articleContainer ${theme}`}>
                <div dangerouslySetInnerHTML={{__html: response[displayedArticle].body}} />
            </div>
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleClick} className={`${styles.backButton}`} >Back to Recent Posts</button>
            </div>
        </>
    )
    }


export default PostArticle