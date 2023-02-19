import React, {useEffect} from 'react'

function PostArticle({displayedArticle, setDisplayedArticle}) {

    function handleClick () {
        setDisplayedArticle(undefined)
    }

    return (
    <>
        <h2>This is the displayed Article</h2>
        {displayedArticle}
        <button onClick={handleClick}>Back to blog main page</button>
    </>
  )
}

export default PostArticle