import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Container from '@material-ui/core/Container';

/**
* @author
* @function Postdetails
**/

const Postdetails = (props) => {

  const {postId} = useParams();
  const [posts, setPosts] = useState({});
  
  useEffect(() =>{
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  
    fetch(url)
    .then(response => response.json())
    .then(data => setPosts(data));
  }, []);
  
  
  const {id, title, body} = posts;
  
  
  const[postComments, setPostComments] = useState({});
  useEffect(() =>{
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
    .then(response => response.json())
    .then(data => setPostComments(data));
  }, []);
  

  return(
    <Container maxWidth="sm">
      <p>Post Id : {id}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      {/* {
        postComments.map(comment => <Comments comment={comment}></Comments>)
      } */}
      <Comments></Comments>
    </Container>
   )
   
 }

export default Postdetails