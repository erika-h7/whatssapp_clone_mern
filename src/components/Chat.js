import React from "react";
import "../css/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons/";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
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
        {/* SENDER MESSAGE */}
        <p className="chat__message">
          <span className="chat__name">Erika </span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        {/* RECIEVER MESSAGE */}
        <p className="chat__reciever">
          <span className="chat__name">Jack </span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
    </div>
  );
}

export default Chat;
