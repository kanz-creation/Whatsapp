import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import React, { useEffect, useState } from 'react';
import axios from './axios';
function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher('b4c4d55dc7442b19380a', {
      cluster: 'us2',
      encrypted: true,
    });

    var channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
