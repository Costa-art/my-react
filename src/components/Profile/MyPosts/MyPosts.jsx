import React from 'react';
import classes from './MyPosts.module.css'
import MyPost from './Post/MyPost';



const MyPosts = () => {
    return (
    
    <div>
      My posts
      
      <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>    
      <MyPost />
      <MyPost />
      <MyPost />
      <MyPost />
    </div>
    )
  
}

export default MyPosts;