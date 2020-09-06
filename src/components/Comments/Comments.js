import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

/**
* @author
* @function Comments
**/

const Comments = () => {
    const {postId} = useParams();
    const [comment, setComment] = useState({});

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data))
    })

    console.log();
    
const {id, name, email, body} = comment;

  return(
    <div>
        <p>Comments Id: {id}</p>
        <h4>Commenter Name: {name}</h4>
        <a href={email}>Email Address: {email}</a>
        <p>Comments: {body}</p>
    </div>
   )

 }

export default Comments