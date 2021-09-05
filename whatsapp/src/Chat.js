import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { MoreVert, SearchOutlined, AttachFile } from '@material-ui/icons';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar alt="" src="" />
        <div className="chat__headerInfo">
          <h3>Thats grape </h3>
          <p> Last seen 1 day ago </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Chat;
