import React, { useState, useEffect } from 'react'
import Posts from '../Posts/Posts';
import Container from '@material-ui/core/Container';

/**
* @author
* @function Home
**/

const Home = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    });
    // console.log(posts);
    
  return(
      
    <Container maxWidth="sm">
        <h1>Total Post : {posts.length}</h1>
        {
            posts.map(post => <Posts post={post}></Posts>)
        }
    </Container>
   )

 }

export default Home