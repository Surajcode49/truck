/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { TbTexture } from "react-icons/tb";

const TexturePicker = ({ onTextureChange }) => {
  const handleTextureUpload = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      // Check if the file is an image
      const isValidImage = file.type.startsWith("image/");
      
      if (!isValidImage) {
        console.error("Uploaded file is not an image.");
        return; // Exit if the file is not an image
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onTextureChange(reader.result); // Pass the texture URL to the parent component
      };
      reader.onerror = () => {
        console.error("Error reading the file.");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="texture-picker">
      <label className="w-14 h-14 flex justify-center items-center text-sm rounded-full bg-white bg-opacity-50 border border-gray-300 shadow-md hover:bg-gray-200 transition">
        <TbTexture className="size-7" />
        <input
          type="file"
          accept="image/*"
          onChange={handleTextureUpload}
          style={{ display: "none" }}
          aria-label="Upload texture" // Added for accessibility
        />
      </label>
    </div>
  );
};

export default TexturePicker;
