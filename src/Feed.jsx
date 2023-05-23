// import React from 'react'
import { useEffect, useState } from "react";
import "./Feed.css"
import MessageSender from "./MessageSender"
import Post from "./Post"
import StoryReel from "./StoryReel.jsx"
import db from "./firebase";


const Feed = () => {
  
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    db.collection("posts")
    .orderBy("timestamp","desc")
    .onSnapshot((snapshot)=>
     setPosts(snapshot.docs.map((doc)=> ({id: doc.id,data:doc.data()})))
    );
  },[]);

  return (
    <div className="feed">
      <StoryReel/>
      <MessageSender/>
      {posts.map((post)=>(
        <Post
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
        />
      ))}
      
      {/* <Post
      profilePic="https://play-lh.googleusercontent.com/AS0Z1xkuhveb3IXzYASn52nhlFDIwcEmu1XmewVDZ39R8fZrQ13wldCy2nbjx9Aa1WCS"
      message="Will ChatGPT Take away your JOB?"
      timestamp="this is timestamp"
      username="Times of India"
      image="https://static.toiimg.com/thumb/msid-98471159,width-1280,resizemode-4/98471159.jpg"
      />
      <Post
      profilePic="https://media.licdn.com/dms/image/C560BAQHewItNf4zl9Q/company-logo_200_200/0/1519856148198?e=2147483647&v=beta&t=_OPY8C0ussEgfcAJ9R8Xw2zzU2H9mafd0a59k2e8HKA"
      message="Releasing on 5.May.2023"
      timestamp="this is timestamp"
      username="Marvel Studios"
      image="https://i0.wp.com/media2.giphy.com/media/CkqpoOOS0BCQU/giphy.gif"
      /> */}
    </div>
  )
}

export default Feed
