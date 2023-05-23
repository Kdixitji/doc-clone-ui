import React from 'react';
import "../Components/ToolbarFunctionsStyles.css";
import Img2 from "../Images/calendar.png";
import Img3 from "../Images/gkeep.png";
import Img4 from "../Images/gjamboard.png";
import Img5 from "../Images/ggroup.png";
import Img6 from "../Images/googlemaps.png";
import { BiUndo, BiRedo, BiPrinter, 
        BiPlus, BiMinus, BiBold, 
        BiItalic, BiUnderline, BiHighlight, 
        BiCommentAdd, BiImageAlt, BiAlignLeft } from "react-icons/bi";
import { MdSpellcheck, MdLink, MdChecklist, 
        MdFormatLineSpacing, MdOutlineFormatIndentDecrease, 
        MdOutlineFormatIndentIncrease, MdFormatListNumbered,
        MdOutlineModeEdit, MdArrowDropUp, MdFormatClear } from "react-icons/md";
import { TfiPaintRoller } from "react-icons/tfi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { TbTextColor } from "react-icons/tb";

const ToolbarFunctions = () => {
  return (
    <>
    <div className='function-box'>
        <div className='tooltip'>
          <BiUndo className='icons'/>
          <span className='tooltiptext'>Undo(Ctrl+Z)</span>        
        </div>
        <div className='tooltip'>
          <BiRedo className='icons'/>
          <span className='tooltiptext'>Redo(Ctrl+y)</span>        
        </div>
        <div className='tooltip'>
          <BiPrinter className='icons'/>
          <span className='tooltiptext'>Print(Ctrl+P)</span>        
        </div>
        <div className='tooltip'>
          <MdSpellcheck className='icons'/>
          <span className='tooltiptext'>Spelling and Grammer Check(Ctrl+Alt+X)</span>        
        </div>
        <div className='tooltip'>
          <TfiPaintRoller className='icons'/>
          <span className='tooltiptext'>Paint Format</span>        
        </div>
        <div className='tooltip'>
            <button className='font-name'>
                <div className='text-head'>100%</div>
            </button>
            <span className='tooltiptext'>Zoom</span>        
        </div>
        <div className='tooltip'>
          <AiOutlineCaretDown className='icons'/>
          <span className='tooltiptext'>Zoom</span>        
        </div>
        <div className='tooltip'>
            <button className='font-name'>
                <div className='text-head'>Normal text</div>
            </button>
            <span className='tooltiptext'>Styles</span>        
        </div>
        <div className='tooltip'>
          <AiOutlineCaretDown className='icons'/>
          <span className='tooltiptext'>Styles</span>        
        </div>
        <div className='tooltip'>
            <button className='font-name'>
                <div className='text-head'>Arial</div>
            </button>
            <span className='tooltiptext'>Font</span>        
        </div>
        <div className='tooltip'>
          <AiOutlineCaretDown className='icons'/>
          <span className='tooltiptext'>Font</span>        
        </div>
      <div className='tooltip'>
          <BiMinus className="icons" />
          <span className='tooltiptext'>Decrease Font Size (Ctrl+Shift+,)</span>        
      </div>
      <div className='tooltip'>
          <div className='font-size'>11</div>
          <span className='tooltiptext'>Font Size</span>        
      </div>
      <div className='tooltip'>
          <BiPlus className='icons'/>
          <span className='tooltiptext'>Increase Font Size(Ctrl+Shift+.)</span>        
      </div>
      <div className='tooltip'>
          <BiBold className='icons'/>
          <span className='tooltiptext'>Bold(Ctrl+B)</span>        
      </div>
      <div className='tooltip'>
          <BiItalic className='icons'/>
          <span className='tooltiptext'>Italic(Ctrl+I)</span>        
      </div>
      <div className='tooltip'>
          <BiUnderline className='icons'/>
          <span className='tooltiptext'>Underline(Ctrl+U)</span>        
      </div>
      <div className='tooltip'>
          <TbTextColor className='icons'/>
          <span className='tooltiptext'>Text Color</span>        
      </div>
      <div className='tooltip'>
          <BiHighlight className='icons'/>
          <span className='tooltiptext'>Highlight Color</span>        
      </div>
      <div className='tooltip'>
          <MdLink className='icons'/>
          <span className='tooltiptext'>Insert Link(Ctrl+K)</span>        
      </div>
      <div className='tooltip'>
          <BiCommentAdd className='icons'/>
          <span className='tooltiptext'>Add Comment(Ctrl+Alt+M)</span>        
      </div>
      <div className='tooltip'>
          <BiImageAlt className='icons'/>
          <span className='tooltiptext'>Insert Image</span>        
      </div>
      <div className='tooltip'>
          <BiAlignLeft className='icons'/>
          <span className='tooltiptext'>Align & Indent</span>        
      </div>
      <div className='tooltip'>
          <MdFormatLineSpacing className='icons'/>
          <span className='tooltiptext'>Line & paragraph spacing</span>        
      </div>
      <div className='tooltip'>
          <MdChecklist className='icons'/>
          <span className='tooltiptext'>Checklist (Ctrl+Shift+9)</span>        
      </div>
      <div className='tooltip'>
          <AiOutlineCaretDown className='icons'/>
          <span className='tooltiptext'>Checklist menu</span>        
      </div>
      <div className='tooltip'>
          <MdFormatListNumbered className='icons'/>
          <span className='tooltiptext'>Numbered list (Ctrl+Shift+7)</span>        
      </div>
      <div className='tooltip'>
          <AiOutlineCaretDown className='icons'/>
          <span className='tooltiptext'>Numbered list menu</span>        
      </div>
      <div className='tooltip'>
          <MdOutlineFormatIndentDecrease className='icons'/>
          <span className='tooltiptext'>Decrease indent (Ctrl+[)</span>        
      </div>
      <div className='tooltip'>
          <MdOutlineFormatIndentIncrease className='icons'/>
          <span className='tooltiptext'>Increase indent (Ctrl+])</span>        
      </div>
      <div className='tooltip'>
          <MdFormatClear className='icons'/>
          <span className='tooltiptext'>Clear formating (Ctrl+\)</span>        
      </div>
      <div className='tooltip'>
          <MdOutlineModeEdit className='icons'/>
          <span className='tooltiptext'>Editing mode</span>        
      </div>
      <div className='tooltip'>
          <MdArrowDropUp className='icons'/>
          <span className='tooltiptext'>Hide the menus (Ctrl+Shift+F)</span>        
      </div>
       
    </div>
    <div className='side-nav'>
            <ul className='side-nav-menu'>
                <li><div className='logo'>
                    <img className='image' src={Img2} alt='calendar' />
                    </div>
                </li>
                <li><div className='logo'>
                        <img className='image' src={Img3} alt='Keep' />
                    </div>
                </li>
                <li><div className='logo'>
                        <img className='image' src={Img4} alt='jamboard' />
                    </div>
                </li>
                <li><div className='logo'>
                        <img className='image' src={Img5} alt='group' />
                    </div>
                </li>
                <li><div className='logo'>
                        <img className='image' src={Img6} alt='maps' />
                    </div>
                </li>
                <li><BiPlus className="icon-minus" /></li>
            </ul>
        </div>
    </>
  )
}

export default ToolbarFunctions;