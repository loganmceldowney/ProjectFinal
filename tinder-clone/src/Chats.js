import React from 'react'
import './Chats.css';
import Chat from "./Chat";

function Chats() {
  return (
    <div className='chats'>
      <Chat
        name="Zach"
        message="Hey! How are you"
        timestamp="35 minutes ago"
        profilePic="https://scontent-den4-1.xx.fbcdn.net/v/t1.6435-9/60353026_10156312073736547_6357237006140964864_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=84a396&_nc_ohc=LBp1iaEJYCkAX9KyN4r&_nc_ht=scontent-den4-1.xx&oh=00_AfDA5_rfx4nJ0o2mIcVWFsF3A8DjXfTrR2HwSilSMRNtNg&oe=645835B9"
        />
      <Chat
        name="Holly"
        message="Whats Up?"
        timestamp="55 minutes ago"
        profilePic="https://scontent-den4-1.xx.fbcdn.net/v/t1.6435-9/151754221_1697598677091143_5663627968023464971_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=epVFX2P9z_4AX87n346&_nc_ht=scontent-den4-1.xx&oh=00_AfAzwXJIjicbNMyxOdkj2ReOlTqGV8TRPfQcs08PxBtdWg&oe=645840F5"
        />
      <Chat
        name="Donn"
        message="Howdy there chief"
        timestamp="3 days ago"
        profilePic="https://scontent-den4-1.xx.fbcdn.net/v/t1.6435-9/40397787_2202457430016392_5316716191534809088_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P0RPmiVdwLUAX-mlZFH&_nc_ht=scontent-den4-1.xx&oh=00_AfD5V4uq58PfxqpcaP-DfX_Vy9JRfbWXKjn12LaHpskxOQ&oe=64584B85"
        />
      
    </div>
  )
}

export default Chats
