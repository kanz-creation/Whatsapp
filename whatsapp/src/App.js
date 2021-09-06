import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    var pusher = new Pusher('b4c4d55dc7442b19380a', {
      cluster: 'us2',
      encrypted: true,
    });

    var channel = pusher.subscribe('message');
    channel.bind('inserted', function (data) {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
