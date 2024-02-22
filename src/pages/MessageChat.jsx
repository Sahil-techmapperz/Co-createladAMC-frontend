import React from 'react'
import '../CSS/Session.css';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Chat from '../components/Chat/Chat.jsx';
import { Link } from 'react-router-dom';



const MessageChat = () => {
  return (
    <div className='flex gap-2'>
      <div className='max-sm:hidden'>
        <Sidebar />
      </div>
      <div className='md:h-[100vh] md:overflow-y-auto md:w-[84vw] '>
        <Navbar Navtext={'Message'} />
        <div className='mt-[10px] text-[18px] font-[600]'>
          <Link to={"/"}>Dashboard</Link> &gt; My Account
        </div>
        <div >
          <Chat />
        </div>

      </div>
    </div>
  )
}

export default MessageChat;
