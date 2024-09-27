import React from "react";
import TruckCustom from '../assets/TruckCustom.webp'
import { Link } from "react-router-dom";
import ModelViewer from "./canvas/ModelViewer";
import TruckViewer from "./canvas2/TruckViewer";

function BuildYourOwn() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12">
      {/* Left Side Content */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        <h1 className="text-5xl md:text-6xl uppercase font-bold tracking-wide text-gray-800 leading-snug">
          Design your ultimate driving machine.<sup>™</sup>
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          This is a configurator. While we strive to provide accurate
          configuration options, not every configuration can be guaranteed.
        
        </p>

        <button className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-500 transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
          Select a Series
        </button>
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col items-center md:w-1/2 mt-8 md:mt-0">
        <div className="w-full max-w-md">
          <img
            src={TruckCustom}
            alt="Truck"
            className="w-full object-contain  rounded-md "
          />

          {/* <TruckViewer/> */}
        </div>

        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            A popular build for you.
          </h2>
          <p className="text-gray-600 text-lg mt-2 mb-5">Daimler Truck</p>
          <Link
            to="/ModelViewer"
            className="mt-6 bg-black text-white py-3 px-10 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-500"
          >
            Build This Vehicle
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuildYourOwn;
