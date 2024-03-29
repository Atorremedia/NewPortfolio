import React, { useContext } from 'react'
import styles from '../css/posts.module.css'
import PostCard from './PostCard'
import { themeContext } from '../contexts/ThemeContext';
import { useEffect } from 'react';


function Posts({setDisplayedArticle, response }) {

  const {theme} = useContext(themeContext);
  const displayedPosts = [];

    for(let i = 0; i<response.length; i++){
      displayedPosts.push(
        <PostCard
          className={`post${i}`}
          key={response[i].id}
          id={response[i].id}
          postTitle={response[i].title}
          imgSrc={response[i].imgSrc}
          isNew={response[i].isNew}
          abstract={response[i].abstract}
          setDisplayedArticle={setDisplayedArticle}
        />
        )
    }
    return (
      <div className={styles.postsZone}>
        <h2 className={`${styles.postsTitle} postsTitle ${theme}`} >Recent posts</h2>
        <div className={styles.postsContainer}>
          {displayedPosts}
        </div>
      </div>
  )
}

export default Posts