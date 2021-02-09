import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'


const Profile = () => {
    return <div className={classes.content}>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div  className = {classes.item}>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;