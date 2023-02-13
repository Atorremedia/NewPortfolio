import {useEffect} from 'react';

function Blog({}) {
    useEffect(() => {
      window.location.replace('https:/blog.augustolle.com')
    }, [])
  }


export default Blog