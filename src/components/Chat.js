import React, {useState} from "react";
import "../css/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@material-ui/icons/";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../axios";

function Chat({messages}) {

  const [input, setInput] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "DEMO APP",
      timestamp: "Just now",
      received: false,
    });
    
    setInput("");
  }

  return (
    <div className="chat">
      {/* CHAT HEADER */}
      <div className="chat__header">
        <Avatar />

        {/* CHAT HEADER INFO */}
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        {/* CHAT HEADER RIGHT */}
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

      {/* CHAT BODY */}
      <div className="chat__body">
        {/* SENDER MESSAGE */}
        {messages.map((message) => (
          <p className={`chat__message ${message.received && "chat__reciever"}`}>
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{message.timestamp}</span>
        </p>
        ))}
        

        {/* RECIEVER MESSAGE */}
        <p className="chat__message chat__reciever">
          <span className="chat__name">Jack </span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      {/* CHAT FOOTER */}
      <div className="chat__footer">
        <InsertEmoticon />
        {/* FORM */}
        <form>
          <input value={input} onChange={event => setInput(event.target.value)} placeholder="Type a message" type="text" />
          <button onClick={sendMessage} type="submit"> Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
