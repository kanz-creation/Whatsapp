import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import {
  MoreVert,
  SearchOutlined,
  AttachFile,
  InsertEmoticon,
  Mic,
} from '@material-ui/icons';

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

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Kaneez</span>
          Sounds like a you problem.
          <span className="chat__timestamp ">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Sara</span>
          Please stop saying the same phrase
          <span className="chat__timestamp ">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Kaneez</span>
          Please stop the constant bickering!
          <span className="chat__timestamp ">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message." />
          <button> Send a Message </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
