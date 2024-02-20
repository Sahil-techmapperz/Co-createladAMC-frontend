import React from 'react'
import '../CSS/Session.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import Sidebar from '../components/Sidebar.jsx';
import { CiMenuKebab } from "react-icons/ci";
import PfFile1 from '../assets/Rectangle 1.png';
import PfFile2 from '../assets/Vector.png';
import PfFile3 from '../assets/Frame 2.png';
import PfFile4 from '../assets/Frame 2 (1).png';
import PfFile5 from '../assets/Frame 2 (4).png';

import { CiClock2 } from "react-icons/ci";
import Navbar from '../components/Navbar.jsx';


const MessageChat = () => {
  return (
    <div className='Message_chatBodyMain'>
      <Sidebar />
      <div className='Message_chatMainBody'>

          <Navbar Navtext={'Sessions'}/>




        <div className='Message_chatBody'>
          <div className='Message_chat_left'>
            <div className='Message_chatBody1'>
              <div className='Message_chatBody2'>
                <p>All Message</p>
                <div className='dropIcon' >
                  <RiArrowDropDownLine />
                </div>
              </div>
              <CiMenuKebab />
            </div>

            <input className='myAccountSearch' placeholder='Search Here' />

            <div className='ProfileDetails'>
              <img className='' src={PfFile1} />
              <div>
                <div className='Profilemain'>
                  {/* <div className='Profile1'> */}
                  <p>Jennifer Markus</p>

                  {/* </div> */}
                  <p>Hey! Did you finish the Hi-FI wireframes for flora app design?</p>
                  <div className='ProfileDAT'>
                    <CiClock2 />
                    <p>Today</p>
                    <p>5:30PM</p>
                  </div>
                </div>

              </div>
              <div>
                <img className='starIcon' src={PfFile2} />
              </div>
            </div>
            <div className='ProfileDetails'>
              <img className='' src={PfFile1} />
              <div>
                <div className='Profilemain'>
                  {/* <div className='Profile1'> */}
                  <p>Jennifer Markus</p>

                  {/* </div> */}
                  <p>Hey! Did you finish the Hi-FI wireframes for flora app design?</p>
                  <div className='ProfileDAT'>
                    <CiClock2 />
                    <p>Today</p>
                    <p>5:30PM</p>
                  </div>
                </div>

              </div>
              <div>
                <img className='starIcon' src={PfFile2} />
              </div>
            </div>
          </div>




          <div className='Message_chat_right'>

            <div className='Message_left_header'>
              <div className='MessageHeader1'>
                <img src={PfFile1} />
                <p>Jenefer Jobs</p>
              </div>
              <div className='MessageHeader2'>
                <img src={PfFile2} />
                <CiMenuKebab />
              </div>
            </div>

            <div className='MessageChatProcess'>
              <div>
                <img src={PfFile3} />
                <p>5:30pm</p>
              </div>
              <div></div>
              <div></div>
              <div className='MessageSent'>
                <img src={PfFile4} />
                <p>5:30pm</p>
              </div>
              <div>
                <img src={PfFile3} />
                <p>5:30pm</p>
              </div>
              <div></div>
              <div></div>
              <div className='MessageSent'>
                <img src={PfFile4} />
                <p>5:30pm</p>
              </div>
              <div>
                <img src={PfFile5} />
                <p>5:30pm</p>
              </div>
              <div></div>
              <div></div>
              <div className='MessageSent'>
                <img src={PfFile4} />
                <p>5:30pm</p>
              </div>
            </div>
          </div>






        </div>

      </div>
    </div>
  )
}

export default MessageChat;
