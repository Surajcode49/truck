import React from "react";
import { MdDoorSliding } from "react-icons/md";

import { FaDoorClosed } from "react-icons/fa6";
const AnimationControls = ({ handlePlayAnimation, handlePlayBothAnimations, handleStopAnimations }) => {
  return (
    <>
   
      <button onClick={handlePlayBothAnimations} className="w-14 h-14 flex justify-center items-center text-sm rounded-full bg-white bg-opacity-50 border border-gray-300 shadow-md hover:bg-gray-200 transition">
        <MdDoorSliding className="size-7"/>
      </button>
      <button onClick={handleStopAnimations} className="w-14 h-14 flex justify-center items-center text-sm rounded-full bg-white bg-opacity-50 border border-gray-300 shadow-md hover:bg-gray-200 transition">
        <FaDoorClosed className="size-7"/>
      </button>
    </>
  );
};


export default AnimationControls;
