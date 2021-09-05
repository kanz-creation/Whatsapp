import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
  return (
    <>
      <div className="sidebarchat">
        <Avatar src="" alt="" />
        <div className="sidebarchat__info">
          <h2>Room Name</h2>
          <p> This is college group </p>
        </div>
      </div>
    </>
  );
}

export default SidebarChat;
