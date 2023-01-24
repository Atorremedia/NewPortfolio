import {useEffect} from 'react';

function Blog({}) {
    useEffect(() => {
      window.location.replace('http:/blog.augustolle.com')
    }, [])
  }


export default Blog