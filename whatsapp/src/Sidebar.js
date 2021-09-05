import React from 'react';
import './Sidebar.css';
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons';
import { IconButton, Avatar } from '@material-ui/core';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://yt3.ggpht.com/ytc/AKedOLT_WrahsDVs_E06E8K1tBH2F-1Ap8SufNcL11K3mg=s900-c-k-c0x00ffffff-no-rj" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div classsName="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
