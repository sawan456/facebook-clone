// import React from 'react'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./SidebarRow.css"
import { Avatar } from '@mui/material';

const SidebarRow = ({src,Icon,title}) => {
  return (
    <div className="sidebarRow" >
        {src &&  <Avatar fontSize="large" src={src} />}
        {Icon && <Icon fontSize="large" />}
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
