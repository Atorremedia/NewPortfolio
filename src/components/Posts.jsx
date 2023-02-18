import React, { useContext } from 'react'
import styles from '../css/posts.module.css'
import posts from '../../public/data/postCards'
import PostCard from './PostCard'
import { themeContext } from '../contexts/ThemeContext';

function Posts() {

  const {theme} = useContext(themeContext);
  const displayedPosts = [];

    for(let i = 0; i<posts.posts.length; i++){
      displayedPosts.push(
        <PostCard
          className={`post${i}`}
          key={posts.posts[i].id}
          id={posts.posts[i].id}
          postTitle={posts.posts[i].title}
          imgSrc={posts.posts[i].imgSrc}
          isNew={posts.posts[i].isNew}
          abstract={posts.posts[i].abstract}
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