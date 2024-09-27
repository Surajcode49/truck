/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PositionControls = ({ position, setPosition }) => {
  return (
    <div className="flex flex-col space-y-4">
      <label>
        X Position:
        <input
          type="range"
          min={-5}
          max={5}
          step={0.01}
          value={position.x}
          onChange={(e) => setPosition(prev => ({ ...prev, x: parseFloat(e.target.value) }))}
        />
      </label>
      <label>
        Y Position:
        <input
          type="range"
          min={-5}
          max={5}
          step={0.01}
          value={position.y}
          onChange={(e) => setPosition(prev => ({ ...prev, y: parseFloat(e.target.value) }))}
        />
      </label>
      <label>
        Z Position:
        <input
          type="range"
          min={-100}
          max={100}
          step={0.01}
          value={position.z}
          onChange={(e) => setPosition(prev => ({ ...prev, z: parseFloat(e.target.value) }))}
        />
      </label>
      <div className="coordinates-display">
        <p>Current Position:</p>
        <p>X: {position.x.toFixed(3)}</p>
        <p>Y: {position.y.toFixed(3)}</p>
        <p>Z: {position.z.toFixed(3)}</p>
      </div>
    </div>
  );
};

export default PositionControls;
