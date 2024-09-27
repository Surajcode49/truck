/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const CameraControls = ({ targetPosition, reset }) => {
  const { camera } = useThree();
  const [initialLoaded, setInitialLoaded] = useState(false);
  const [initialPosition, setInitialPosition] = useState({
    x: 10,
    y: 10,
    z: 10,
  });
  

  useEffect(() => {
    if (!initialLoaded) {
      // Save initial camera position
      setInitialPosition({ ...camera.position });

      // Initial camera animation
      gsap.fromTo(
        camera.position,
        {
          x: 20,
          y: 20,
          z: 20, // Start position for the animation
        },
        {
          x: 0.009496346436327477,
          y: 1.677402677756441,
          z: 4.711583145756935, // End position for the animation
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => {
            camera.updateProjectionMatrix(); // Ensure the camera updates during animation
          },
          onComplete: () => setInitialLoaded(true) // Mark initial animation as complete
        }
      );
    } else if (reset) {
      // Reset camera position to initial
      gsap.to(camera.position, {
        x: 0.009496346436327477,
        y:1.677402677756441,
        z: 4.711583145756935,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      });
    } else if (targetPosition) {
      // Button-triggered camera animation
      gsap.to(camera.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      });
    }
  }, [camera, targetPosition, initialLoaded, reset, initialPosition]);

  return null;
};

export default CameraControls;
