// import React from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material';
// import VideocamIcon from "@mui/material/icons/Videocam";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase/compat/app";

const MessageSender = () => {
    const [{user},dispatch] =  useStateValue();
    const [input,setInput] = useState("");
    const [imageUrl,setImageUrl] = useState("");
// db stuff

    
    
    // setInput("");
    // setImageUrl("");
    
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    db.collection("posts").add({
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image:imageUrl,
    });

    setInput("");
    setImageUrl("");

  };

  return (
    <div className='messageSender'>
      
      <div className="messageSender__top">
        <Avatar src={user.photoURL} className='avtarIc'  />
        <form>
            <input
            value={input}
            onChange={(e)=>setInput(e.target.value)} 
            className='messageSender__input'
            placeholder={`What's on your mind, ${user.displayName}?`} />
            <input
            className='lol'
            value={imageUrl}
            onChange={(e)=>setImageUrl(e.target.value)}
            placeholder='image URL (Optional)' />
            <button onClick={handleSubmit} type='submit'  >Hidden Submit</button>
        </form>
      </div>

      <div className="messageSender__bottom">
      <div className="messageSender__option">
            <VideocamIcon className='iconns' style={{color:"red"}}/>
            <h3>Live video</h3>
        </div>
        <div className="messageSender__option">
            <PhotoLibraryIcon className='iconns' style={{color:"green"}}/>
            <h3>Photo/video</h3>
        </div>
        <div className="messageSender__option">
            <InsertEmoticonIcon className='iconns' style={{color:"orange"}}/>
            <h3>Feeling/activity</h3>
        </div>
      </div>

    </div>
  )
}

export default MessageSender
