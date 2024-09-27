import React, { useState, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  MeshReflectorMaterial,
} from "@react-three/drei";
import Truck from "./Truck";
import CameraControls from "./CameraControls";

import { useEffect } from "react";
import { BlueTruck } from "../canvas2/BlueTruck";
const CameraLogger = () => {
  const { camera } = useThree();
  useEffect(() => {
    const handleMouseUp = () => {
      console.log("Camera Position:", camera.position);
      console.log("Camera Rotation:", camera.rotation);
    };

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [camera]);

  return null;
};


const CanvasScene = ({
  position,
  truckColor,
  glossColor,
  setAnimationActions,
  onMouseUp,
}) => {
  const [lightsEnabled, setLightsEnabled] = useState(true);
  const [environmentEnabled, setEnvironmentEnabled] = useState(true);
  const [cameraPosition, setCameraPosition] = useState(null);
  const [resetCamera, setResetCamera] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [subMenu, setSubMenu] = useState(null);
  const [accessoriesSubMenu, setAccessoriesSubMenu] = useState(null);
  const handleContextMenu = (event) => {
    event.preventDefault();
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
  const handleFeatureClick = (feature) => {
    console.log(`Feature clicked: ${feature}`);
    // Add your custom logic here for each feature
  };

  const handleAccessoryClick = (accessory) => {
    console.log(`Accessory clicked: ${accessory}`);
    // Add your custom logic here for each accessory
  };


  
  const toggleLightsAndEnvironment = () => {
    setLightsEnabled((prev) => !prev);
    setEnvironmentEnabled((prev) => !prev);
  };

  const handleButtonClick = (position) => {
    const positions = {
      1: {x : 1.2526540335934357, y: 0.40736023901950313, z: 0.05183153275825085 },
      2: {x: -0.29299895818752836, y: 0.9253359713559635, z: 2.832778915473059 },
      3: { x: 0.05261641673913086, y: 0.9826957554852055, z: 1.8450992193717117 },
      4: { x: 0.09143996320672947, y: 1.1130766371073924, z: 1.5297769024381944},
      5: {x: 0.09925644782889718, y: 1.011, z: -0.7461000050150157}
    };
    setCameraPosition(positions[position]);
    setResetCamera(false);
  };

  const handleResetClick = () => {
    setResetCamera(true);
    setCameraPosition(null);
  };

  return (
    <>
      <button
        style={{
          position: "absolute",
          top: "200px",
          left: "10px",
          zIndex: 1,
          padding: "10px",
          backgroundColor: "white",
          border: "1px solid black",
          cursor: "pointer",
        }}
        onClick={toggleLightsAndEnvironment}
      >
        Toggle Lights and Environment
      </button>
     

      <Canvas
        style={{ height: "100vh", width: "100vw" }}
        onContextMenu={handleContextMenu}
      >
        <OrbitControls
          target={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={0}
          enableDamping
          dampingFactor={0.05}
        />
        <CameraControls targetPosition={cameraPosition} reset={resetCamera} />
        <CameraLogger />
        {environmentEnabled && (
          <Environment files="/sunset.exr" background={true} />
        )}
        <ambientLight intensity={lightsEnabled ? 6 : 0} />
        <fog attach="fog" args={["#101010", 10, 20]} />
        {lightsEnabled && (
          <>
            <spotLight position={[10, 10, 10]} angle={2} penumbra={2} />
            <directionalLight position={[10, 10, 5]} intensity={2.5} />
          </>
        )}

        <Suspense fallback={null}>
          <Truck
            position={[position.x, position.y, position.z]}
            color={truckColor}
            glossColor={glossColor}
            scale={0.3}
            setAnimationActions={setAnimationActions}
            lightsEnabled={lightsEnabled}
          />
        
        </Suspense>

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[200, 200]} />
          <MeshReflectorMaterial
            blur={[200, 100]}
            resolution={1999}
            mixBlur={0.1}
            mixStrength={20}
            roughness={0.4}
            depthScale={1}
            minDepthThreshold={0.1}
            maxDepthThreshold={0.4}
            color="#101010"
            metalness={0.1}
          />
        </mesh>
      </Canvas>
      <div className="fixed bottom-2 left-4 right-4 bg-gray-800 bg-opacity-80 backdrop-blur-lg glassmorphism-container text-white py-3 px-6 rounded-xl shadow-md transition-all ease-in-out duration-300">
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
          [ "Interior"].map((accessory) => (
            <button
              key={accessory}
              className={` ml-12 px-4 py-2 rounded-full hover:bg-blue-500 transition-all ${
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
                    else if(part== "Headlamps")
                    {
                      handleButtonClick(2);
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
            {["Front Seat", "Back Seat", "Sound System", "Lighting"].map((part) => (
  <button
    key={part}
    className={`px-4 py-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all`}
    onClick={() => {
      handleAccessoryClick(part);
      
      if (part === "Front Seat") {
        handleButtonClick(3); // Change camera angle for Wheels
      } 
      else if(part=="Back Seat"){
        handleButtonClick(4)
      }
      else if(part=="Sound System"){
        handleButtonClick(5);
      }
     
    }}
  >
    {part}
  </button>
))}

          </div>
        )}
      </div>
    </>
  );
};

export default CanvasScene;



