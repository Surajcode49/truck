import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import{ BlueTruck} from './BlueTruck';
import PositionControls from '../canvas/PositionControl'
import { MeshReflectorMaterial } from '@react-three/drei';
const TruckViewer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 }); // Centered position

  return (
    <div className="w-full h-full bg-black rounded-lg shadow-lg flex flex-col">
      <Canvas style={{ height: "100vh", width: "100vw" }}>

        <OrbitControls enableZoom={true}
          target={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={0}
          enableDamping
          dampingFactor={0.05} />
        <Environment preset="sunset" />
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
        <Suspense fallback={null}> {/* Set fallback to null or a loading state */}
          <BlueTruck scale={0.5} position={[position.x, position.y, position.z]} />
        </Suspense>
      </Canvas>
      <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded shadow-lg">
        <PositionControls position={position} setPosition={setPosition} />
      </div>
    </div>
  );
};

export default TruckViewer;


