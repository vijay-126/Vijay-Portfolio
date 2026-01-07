import "./btn.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
export default function Btn ( {text}){
    let[showIcon ,setShowIcon] = useState(false)
const onHover = ()=>{
    setShowIcon(true);
}
const onHoverNot = ()=>{
    setShowIcon(false);
}
const [animate, setAnimate] = useState(false);
const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setAnimate(true);

    // navigate after animation duration
    setTimeout(() => {
      navigate ( "/service");
    }, 2000); // matches animation duration
  };
    return(
<>
        <button className="Skill-link " onClick={handleClick} onMouseEnter={onHover} onMouseLeave={onHoverNot}>
          {text} {showIcon && <i className="fa-solid fa-magnifying-glass-arrow-right"></i>}
        </button>
{/* Animation overlay */}
      {animate && (
        <div className="man-container man-animate">
          <div className="man"></div>
          <div className="rope rope-animate"></div>
        </div>
      )}
</>
    )
}