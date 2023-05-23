// import React from 'react'\
import "./Sidebar.css"
// import SidebarRow from "./SidebarRow.jsx"
// import LocalHospital from "@mui/icons-material";
// import EmojiFlags from "@mui/icons-material";
// import People from "@mui/icons-material";
// import Chat from "@mui/icons-material";
// import Storefront from "@mui/icons-material";
// import VideoLibrary from "@mui/icons-material";
// import ExpandMoreOutlined from "@mui/icons-material";
import SidebarRow from "./SidebarRow";
// import { Avatar } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "./StateProvider";


const Sidebar = () => {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="sidebar" >
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={GroupIcon}  title="Friends"/>
      <SidebarRow Icon={GroupsIcon} title="Groups"/>
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={SubscriptionsIcon} title="Watch" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={StarIcon} title="Favorites" />
    </div>
  )
}

export default Sidebar
