import React from 'react'
import styles from '../css/postCard.module.css'

function PostCard({id, postTitle, imgSrc, isNew, abstract, setDisplayedArticle,}) {

  function renderArticle(id){
  window.scrollTo(0,0)
  setDisplayedArticle(id)
  }

  return (
    <div className= {styles.postcard} onClick={()=>renderArticle(id)}>
        {isNew && 
        <div className={`${styles.newTag} new ${theme}`}>New!</div>
        }
        <img className={`${styles.projectImg} `} src={`${imgSrc}`} width='200px' alt='project image'/>
        <h3 className={`${styles.postTitle}`}>{postTitle}</h3>
        <p className={`${styles.postTitleText}`}>
            {abstract}
        </p>
    </div>
  )
}

export default PostCard