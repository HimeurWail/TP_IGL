import React, { useState } from "react";
import redLine from "../images/pics/Line.png";
import greyLine from "../images/icons/greyLine.png"
const ProfileSwitchButtons = () => {
    const[line1,setLine1] = useState(redLine);
  const[line2,setLine2] = useState(greyLine);
  const handleClick1=() =>{
    setLine1(redLine);
    setLine2(greyLine);
  }
  const handleClick2=() =>{
    setLine2(redLine)
    setLine1(greyLine)
  }
    return ( 
        <div className="flex flex-row my-6">
        <div className=" w-[50%] mx-9" align="center">
        <button onClick={handleClick1}  className="text-m font-semibold ">Posted</button>
          <img className="w-3/5" src={line1} />
        </div>
        <div className="w-[50%] mx-9" align="center">
          <button  onClick={handleClick2} className="text-m font-semibold ">Saved</button>

          <img className=" w-3/5" src={line2} />
        </div>
      </div>
     );
}

export default ProfileSwitchButtons;