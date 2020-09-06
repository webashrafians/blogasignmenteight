import React from 'react'
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';


/**
* @author
* @function Posts
**/

const Posts = (props) => {
  const{id, title, body } = props.post;
  const history = useHistory();

  const handleClick = (postId) => {
    const url = `/posts/${postId}`;
    history.push(url)
  }

  return(

    <div className="posts">
      <p>Post Id: {id}</p>
      <h2>{title}</h2>
      <p>{body}</p>
      <Button variant="contained" color="secondary" onClick={() => handleClick(id)}>Click me</Button>
    </div>
   )

 }

export default Posts