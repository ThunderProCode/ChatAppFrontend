import React, { useEffect, useState } from 'react';
import './App.css';
import Connect from './Pages/Connect/Connect';
import { BrowserRouter as Router,Routes,Route, useNavigate } from 'react-router-dom';
import Chat from './Pages/Chat/Chat';
import { socket } from './socket';
import Loading from './Pages/Loading/Loading';

function App() {
  
  const navigate = useNavigate();
  const [isConnected,setIsConnected] = useState(socket.connected);
  const [userId, setuserId] = useState('');
  const [targetUserId, setTargetUserId] = useState('');

  
  useEffect(() => {
    
    function onConnect() {
      console.log('UserConnected');
      setIsConnected(true);
    }
    
    function onUsername(value:string) {
      setuserId(value);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connectedToUser',(value:string) => {
      onConnect();
      setTargetUserId(value);
    });

    socket.on('disconnect', onDisconnect);

    socket.on('username',(value:string) => {
      onUsername(value);
    });


    if(userId){
      navigate('/connect');
    }

    if(isConnected){  
      navigate('/chat');
    }

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  },[userId,isConnected]);

  return (
    <>
      <Routes>
        <Route path='/' element={ <Loading></Loading> }/>
        <Route path='/connect' element={ <Connect userId={userId}></Connect> } />
        <Route path='/chat' element={ <Chat userId={targetUserId}></Chat> }/>
      </Routes>
    </>

  );
}

export default App;
