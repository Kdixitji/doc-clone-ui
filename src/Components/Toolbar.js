import React from 'react';
import "../Components/ToolbarStyles.css";
import Img1 from "../Images/doc-home.png";
import { BiStar, BiPlus } from "react-icons/bi";
import { MdDriveFileMoveOutline, MdOutlineComment } from "react-icons/md";
import { BsCloudCheck, BsCameraVideo} from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RiLock2Line } from 'react-icons/ri';

const Toolbar = () => {
  return (
    <div className='header'>
        <div className='doc-logo'>
          <img src={Img1} alt='true' />
        </div>
      <div className='left'>
        <div className='file-name'>Untitled Document</div>
        <div title='Star'>
          <BiStar className='s-icons'/>        
        </div>
        <div title='Move'>
          <MdDriveFileMoveOutline className='s-icons'/>
        </div>
        <div title='See document Status'>
          <BsCloudCheck className='s-icons'/>
        </div>
        <div className='nav'>
        <ul className='nav-menu'>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Insert</li>
          <li>Format</li>
          <li>Tools</li>
          <li>Extensions</li>
          <li>Help</li>
        </ul>
      </div>
      </div>

{/*Right side of header*/}

      <div className='right'>
        <div title='Last edited'>
          <RxCounterClockwiseClock size={25} className='r-icons'/>
        </div>
        <div title='Open Comment History (Ctrl+Alt+Shift+A)'>
          <MdOutlineComment size={25} className='r-icons'/>
        </div>
        <div title='Join a call here'>
          <button className='chat-btn'>
            <BsCameraVideo size={20} className='video' />
            <AiOutlineCaretDown size={15} /></button>
        </div>
        <div title='Private to me only'>  
          <button className="share-btn">
            <RiLock2Line size={20} className="lock-icon" />
            <span className="share-text">Share</span>
          </button>
        </div>
        <div title='Google Account'>
          <VscAccount size={32} className='G-icons'/>
        </div>
      </div>
    </div>
    
  )
}

export default Toolbar;