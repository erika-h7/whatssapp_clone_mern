import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Pusher from "pusher-js";
import axios from "./axios"

function App() {
  const [messages, setMessages] = useState([]);

  // Fetching initial info
  useEffect(() => {
    axios.get("/messages/sync")
    .then((response) => {
      setMessages(response.data)
    })
  },[])

  // once
  useEffect(() => {
    const pusher = new Pusher("48b2a5d6101747e657e4", {
      cluster: "us2"
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages]);

  console.log(messages)

  return (
    <div className="app">
      <div className="app__body">
        {/* SIDEBAR COMPONENT */}
        <Sidebar />

        {/* CHAT COMPONENT */}
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
