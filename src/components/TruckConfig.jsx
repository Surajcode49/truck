/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import ModelViewer from "./canvas/ModelViewer";
import SketchPicker from "react-color";
function TruckConfig() {
  const [activeTab, setActiveTab] = useState("Exterior"); // Track the active tab


  // Handle tab change (Exterior, Interior, Checkout)
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative flex flex-col h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col space-y-4">
          <button className="w-12 h-12 flex justify-center items-center rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-200 transition">
            ✓
          </button>
          <button className="w-12 h-12 flex justify-center items-center rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-200 transition">
            -
          </button>
          <button className="w-12 h-12 flex justify-center items-center rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-200 transition">
            +
          </button>
        </div>
      </div>

      {/* Main Truck Image */}
      <div className="flex-grow flex justify-center items-center z-0 mt-12">
        {" "}
        {/* Adjusted margin-top */}
        {/* <img src={truck} alt="Truck" className="max-w-3xl object-contain" /> */}
        <ModelViewer />
      </div>

      {/* Right Sidebar with Glassmorphism */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col items-center space-y-4 bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
          {/* Button to toggle color panel */}
          {/* <button
            className="w-14 h-14 flex justify-center items-center text-lg rounded-full bg-white bg-opacity-50 border border-gray-300 shadow-md hover:bg-gray-200 transition"
            onClick={toggleColorPanel}
          >
            🎨
          </button> */}
          <button
            className="w-14 h-14 flex justify-center items-center text-sm rounded-full bg-white bg-opacity-50 border border-gray-300 shadow-md hover:bg-gray-200 transition"
      
          >
            Change Color
          </button>
           {/* <button
          onClick={() => setShowTruckColorPicker(!showTruckColorPicker)}
          className="glass-button rounded-full transition duration-300 ease-in-out  hover:bg-white hover:text-black"
        >
          Truck Color
        </button>

        {showTruckColorPicker && (
          <div className="color-picker">
            <SketchPicker
              color={truckColor}
              onChangeComplete={(color) => setTruckColor(color.hex)} // Update truck color
            />
          </div>
        )} */}
          
          <button className="w-14 h-14 flex justify-center items-center text-sm text-center rounded-full bg-white bg-opacity-50 border border-gray-300 shadow-md hover:bg-gray-200 transition">
            Opens Door
          </button>
          <button className="w-14 h-14 flex justify-center items-center text-sm text-center rounded-full bg-white bg-opacity-50 border border-gray-300 shadow-md hover:bg-gray-200 transition">
            Get Inside
          </button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4 px-6 z-10">
        <button
          className={`py-2 px-6 rounded-full w-32 text-center ${
            activeTab === "Exterior"
              ? "bg-black text-white"
              : "bg-white text-black border border-gray-300 shadow-md hover:bg-gray-200 transition"
          }`}
          onClick={() => handleTabChange("Exterior")}
        >
          Exterior
        </button>
        <button
          className={`py-2 px-6 rounded-full w-32 text-center ${
            activeTab === "Interior"
              ? "bg-black text-white"
              : "bg-white text-black border border-gray-300 shadow-md hover:bg-gray-200 transition"
          }`}
          onClick={() => handleTabChange("Interior")}
        >
          Interior
        </button>
        <button
          className={`py-2 px-6 rounded-full w-32 text-center ${
            activeTab === "Checkout"
              ? "bg-black text-white"
              : "bg-white text-black border border-gray-300 shadow-md hover:bg-gray-200 transition"
          }`}
          onClick={() => handleTabChange("Checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default TruckConfig;
