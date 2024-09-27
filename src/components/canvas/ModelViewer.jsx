import React, { useState } from "react";
import CanvasScene from "./CanvasScene";
import ColorPickers from "./ColorPickers";
import AnimationControls from "./AnimationControl";
import TexturePicker from "./TexturePicker";
import { LoopOnce } from "three";
import CameraControls from "./CameraControls";

const ModelViewer = () => {
  const [position, setPosition] = useState({ x: -0.02, y: 0.25, z: -0.6 });
  const [truckColor, setTruckColor] = useState("#000000");
  const [glossColor, setGlossColor] = useState("#ffffff");
  const [showTruckColorPicker, setShowTruckColorPicker] = useState(false);
  const [showGlossColorPicker, setShowGlossColorPicker] = useState(false);
  const [animationActions, setAnimationActions] = useState({});
  const [textureUrl, setTextureUrl] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [subMenu, setSubMenu] = useState(null);
  const [accessoriesSubMenu, setAccessoriesSubMenu] = useState(null);
  const [cameraPosition, setCameraPosition] = useState(null);
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [resetCamera, setResetCamera] = useState(false);

  const handleButtonClick = (position) => {
    const positions = {
      1:  {x: 0.211, y: 1.195, z: -0.515},
      2: { x: 0.089, y: 1.398, z: -0.796 },
      3: { x: -0.044, y: 1.356, z: -1.096 },
      4: { x: -4.395, y: 1.428, z: -0.031 },
    };
    setCameraPosition(positions[position]);
    setResetCamera(false);
  };

  const handleResetClick = () => {
    setResetCamera(true);
    setCameraPosition(null);
  };

  
 
  const handleNavClick = (tabName) => {
    setActiveTab(activeTab === tabName ? null : tabName);
    if (activeTab !== tabName) {
      setSubMenu(null);
      setAccessoriesSubMenu(null);
    }
  };

  const handleSubMenuClick = (subName) => {
    setSubMenu(subMenu === subName ? null : subName);
  };

  const handleAccessoriesSubMenuClick = (subName) => {
    setAccessoriesSubMenu(accessoriesSubMenu === subName ? null : subName);
  };

  const handleCloseSubMenu = () => {
    setActiveTab(null);
    setSubMenu(null);
    setAccessoriesSubMenu(null);
  };

  const handlePlayAnimation = (index) => {
    const actionName = Object.keys(animationActions)[index];
    const action = animationActions[actionName];

    if (action) {
      action.reset();
      action.setLoop(LoopOnce);
      action.clampWhenFinished = true;
      action.fadeIn(0.5).play();
    }
  };

  const handlePlayBothAnimations = () => {
    Object.values(animationActions).forEach((action) => {
      action.reset();
      action.setLoop(LoopOnce);
      action.clampWhenFinished = true;
      action.fadeIn(0.5).play();
    });
  };

  const handleStopAnimations = () => {
    Object.values(animationActions).forEach((action) => {
      if (action._clip.name === "OpenDoor") {
        action.stop();
        const closeAction = animationActions["CloseDoor"];
        if (closeAction) {
          closeAction.reset();
          closeAction.setLoop(LoopOnce);
          closeAction.clampWhenFinished = true;
          closeAction.fadeIn(0.5).play();
          setIsDoorOpen(false);
        }
      } else {
        action.stop();
      }
    });
  };

  // Custom handlers for buttons in tabs
  const handleFeatureClick = (feature) => {
    console.log(`Feature clicked: ${feature}`);
    // Add your custom logic here for each feature
  };

  const handleAccessoryClick = (accessory) => {
    console.log(`Accessory clicked: ${accessory}`);
    // Add your custom logic here for each accessory
  };

  return (
    <>
      <CanvasScene
        position={position}
        truckColor={truckColor}
        glossColor={glossColor}
        textureUrl={textureUrl}
        targetPosition={cameraPosition} reset={resetCamera}
        setAnimationActions={setAnimationActions}
      />
         
         

      <div className="flex flex-col items-center justify-center bg-gray-900 bg-opacity-40 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-200 glassmorphism-container mt-[4rem] mx-[10rem] mb-[4rem] h-[550px] relative transition duration-300">
        {/* Scene contents */}
      
      </div>

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col items-center space-y-4 bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-200 glassmorphism-card transition duration-300 ease-in-out">
          <ColorPickers
            truckColor={truckColor}
            setTruckColor={setTruckColor}
            glossColor={glossColor}
            setGlossColor={setGlossColor}
            showTruckColorPicker={showTruckColorPicker}
            setShowTruckColorPicker={setShowTruckColorPicker}
            showGlossColorPicker={showGlossColorPicker}
            setShowGlossColorPicker={setShowGlossColorPicker}
          />
          <AnimationControls
            handlePlayAnimation={handlePlayAnimation}
            handlePlayBothAnimations={handlePlayBothAnimations}
            handleStopAnimations={handleStopAnimations}
          />
          <TexturePicker onTextureChange={setTextureUrl} />
        </div>
      </div>

      {/* <div className="fixed bottom-2 left-4 right-4 bg-gray-800 bg-opacity-80 backdrop-blur-lg glassmorphism-container text-white py-3 px-6 rounded-xl shadow-md transition-all ease-in-out duration-300">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {["features", "accessories"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 mb-2 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-500 ${
                  activeTab === tab ? "bg-gray-800 text-white" : "bg-gray-800 text-white"
                }`}
                onClick={() => handleNavClick(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <button className="px-4 py-2 mb-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all">
              Compare
            </button>
            <button className="px-4 py-2 mb-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all">
              Summary
            </button>
            <button  onClick={handleResetClick} className="px-4 py-2 mb-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all">
             Reset
            </button>
          </div>
          <div className="flex space-x-4">
            {["Test Drive", "Book Online", "Login"].map((action) => (
              <button
                key={action}
                className="px-4 py-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        {activeTab && (
          <div className="relative flex bg-gray-700 bg-opacity-90 backdrop-blur-md text-white px-6 py-2 mt-2 rounded-md space-x-4 shadow-inner z-20">
            <button
              onClick={handleCloseSubMenu}
              className="absolute top-2 left-2 px-2 py-1 text-white bg-red-600 hover:bg-red-500 rounded-full transition duration-200 ease-in-out"
            >
              ✕
            </button>

            {activeTab === "features" &&
              ["Stunning Design", "Smart Cabin", "Sporty Performance", "Safety"].map((feature) => (
                <button
                  key={feature}
                  className={`px-4 py-2 rounded-full hover:bg-blue-500 transition-all ${
                    subMenu === feature.toLowerCase().replace(/\s/g, "") ? "bg-gray-800 text-white" : "bg-gray-800 text-white"
                  }`}
                  onClick={() => {
                    handleSubMenuClick(feature.toLowerCase().replace(/\s/g, ""));
                    handleFeatureClick(feature); // Call your custom handler here
                  }}
                >
                  {feature}
                </button>
              ))}
          </div>
        )}

        {activeTab === "accessories" &&
          ["Exterior", "Interior"].map((accessory) => (
            <button
              key={accessory}
              className={`px-4 py-2 rounded-full hover:bg-blue-500 transition-all ${
                accessoriesSubMenu === accessory.toLowerCase() ? "bg-gray-800 text-white" : "bg-gray-800 text-white"
              }`}
              onClick={() => {
                handleAccessoriesSubMenuClick(accessory.toLowerCase());
                handleAccessoryClick(accessory); // Call your custom handler here
              }}
            >
              {accessory}
            </button>
          ))}

        {subMenu && activeTab === "features" && (
          <div className="absolute bottom-full mb-2 left-0 right-0 bg-gray-700 bg-opacity-80 backdrop-blur-lg text-white px-6 py-2 rounded-md space-x-4 shadow-inner z-30">
            <button
              onClick={handleCloseSubMenu}
              className="absolute top-2 left-2 px-2 py-1 text-white bg-red-600 hover:bg-red-500 rounded-full transition duration-200 ease-in-out"
            >
              ✕
            </button>

            {subMenu === "stunningdesign" &&
              ["Wheels", "Headlamps"].map((part) => (
                <button
                  key={part}
                  className={`px-4 py-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all`}
                  onClick={() => {
                    handleFeatureClick(part); 
                    if (part === "Wheels") {
                      handleButtonClick(1); // Change camera angle for Wheels
                    }
                  }} // Custom handler for parts
                >
                  {part}
                </button>
              ))}
          </div>
        )}

        {accessoriesSubMenu === "interior" && activeTab === "accessories" && (
          <div className="absolute bottom-full mb-2 left-0 right-0 bg-gray-700 bg-opacity-80 backdrop-blur-lg text-white px-6 py-2 rounded-md space-x-4 shadow-inner z-30">
            <button
              onClick={handleCloseSubMenu}
              className="absolute top-2 left-2 px-2 py-1 text-white bg-red-600 hover:bg-red-500 rounded-full transition duration-200 ease-in-out"
            >
              ✕
            </button>

            {["Seats", "Dashboard", "Sound System", "Lighting"].map((part) => (
              <button
                key={part}
                className={`px-4 py-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all`}
                onClick={() => handleAccessoryClick(part)} // Custom handler for parts
              >
                {part}
              </button>
            ))}
          </div>
        )}
      </div> */}
    </>
  );
};

export default ModelViewer;
