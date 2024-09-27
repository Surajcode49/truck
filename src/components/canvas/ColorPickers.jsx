import React from "react";
import { SketchPicker } from "react-color";
import { IoMdColorPalette } from "react-icons/io";
import { BsFillTruckFrontFill } from "react-icons/bs";

const ColorPickers = ({ truckColor, setTruckColor, glossColor, setGlossColor, showTruckColorPicker, setShowTruckColorPicker, showGlossColorPicker, setShowGlossColorPicker }) => {
  return (
    <>
      <button onClick={() => setShowTruckColorPicker(!showTruckColorPicker)} className="w-14 h-14 flex justify-center items-center text-sm rounded-full bg-white bg-opacity-50 border border-gray-300 shadow-md hover:bg-gray-200 transition">
      <IoMdColorPalette className="size-8" />
      </button>
      {showTruckColorPicker && (
        <div className="color-picker">
          <SketchPicker color={truckColor} onChangeComplete={(color) => setTruckColor(color.hex)} />
        </div>
      )}

      <button onClick={() => setShowGlossColorPicker(!showGlossColorPicker)} className="w-14 h-14 flex justify-center items-center text-sm rounded-full bg-white bg-opacity-50 border border-gray-300 shadow-md hover:bg-gray-200 transition">
      <BsFillTruckFrontFill className="size-7" />
      </button>
      {showGlossColorPicker && (
        <div className="color-picker">
          <SketchPicker color={glossColor} onChangeComplete={(color) => setGlossColor(color.hex)} />
        </div>
      )}
    </>
  );
};

export default ColorPickers;
