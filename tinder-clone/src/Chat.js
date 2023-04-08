import React from 'react'
import { Avatar } from '@mui/material'

function Chat({name, message, profilePic, timestamp}) {
  return ( <div className='chat'> 
  <Avatar className='chat__image' src={profilePic} />
  <div>
    <h2>{name}</h2>
    <p>{message}</p>
  </div>
  <p>{timestamp}</p>
  </div>
  );
}

export default Chat
