// import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupIcon from '@mui/icons-material/Group';
// import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
// import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
// import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
// import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useStateValue } from "./StateProvider";


const Header = () => {
  
  const [{user},dispatch] = useStateValue();

  return (
    <div className="header" >

      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
        
        <div className="header__input">
          <SearchIcon/>
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <GroupIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <VideogameAssetIcon fontSize="large"/>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar fontSize="large" src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <AppsIcon fontSize="large" className='appIcona' />
        <TextsmsRoundedIcon fontSize="large" className="textIco"/>
        <NotificationsIcon fontSize="large" className="bellIco"/>
      </div>

    </div>
  )
}

export default Header
