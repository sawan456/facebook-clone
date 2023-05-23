// import React from 'react'
import "./Story.css"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Avatar from '@mui/icons-material/Avatar'
import { Avatar } from '@mui/material';

const Story = ({image,profileSrc,title}) => {
  return (
    <div style={{backgroundImage: `url(${image})`}}
    className="story" >
      {/* <AccountCircleIcon className="story__avatar" src={profileSrc} /> */}
      <Avatar className="story__avatar" src={profileSrc} />
      {/* <img src={profileSrc} style={{height:"30px",borderRadius:"50%"}}  alt={title} className="story__avatar" /> */}
      <h4>{title}</h4>
    </div>
  )
}

export default Story
