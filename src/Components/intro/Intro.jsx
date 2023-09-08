
import './intro.scss'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { init } from 'ityped'
import { useEffect,useRef } from 'react';


export default function Intro() {

  const textRef=useRef();

  useEffect(()=>{
    init(textRef.current, 
      { showCursor: false,
        backDelay:1500,
        backSpeed:50, 
        strings: ["Designer","Designer","Creater"], });
  },[]);
  return (
    <div className='Intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="./Assets/Photo.png" alt="" />
        </div>

      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hey wassup! i'm</h2>
          <h1>Anil Pan</h1>
          <h3>A <span ref={textRef}></span></h3>

          <a href="#portfolio">
          <KeyboardDoubleArrowDownIcon className='icon'/>
          </a>
        </div>

      </div>
    </div>
  )
}
