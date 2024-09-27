import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useEffect } from 'react';

export default function Truck(props) {
  const { color, glossColor, textureUrl, setAnimationActions, lightsEnabled } = props; // Add lightsEnabled prop

  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/truck.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
 

    if (setAnimationActions) {
      setAnimationActions(actions);
    }

    // Update materials if they exist
    if (materials.AZUL) {
      materials.AZUL.color.set(color);
      materials.AZUL.needsUpdate = true; // Ensure the material updates
    }

    if (materials.Steel) {
      materials.Steel.color.set(glossColor);
      materials.Steel.needsUpdate = true; // Ensure the material updates
    }

    // Load texture if provided
    if (textureUrl) {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        textureUrl,
        (texture) => {
          if (materials.AZUL) {
            materials.AZUL.map = texture;
            materials.AZUL.needsUpdate = true;
          }
        },
        undefined,
        (error) => {
          console.error('Error loading texture:', error);
        }
      );
    } else {
      // Reset texture if no texture URL is provided
      if (materials.AZUL && materials.AZUL.map) {
        materials.AZUL.map = null;
        materials.AZUL.needsUpdate = true;
      }
    }
  }, [color, glossColor, textureUrl, actions, setAnimationActions]);



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="cab_truck_001001" position={[-1.107, 1.732, 8.045]}>
          <mesh
            name="Mesh001"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials.AZUL}
          />
          <mesh
            name="Mesh001_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials.DefaultMaterial}
          />
          <mesh
            name="Mesh001_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_2.geometry}
            material={materials.PaletteMaterial005}
          />
          <mesh
            name="Mesh001_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_3.geometry}
            material={materials['DD OSCURO']}
          />
          <mesh
            name="Mesh001_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_4.geometry}
            material={materials.Steel}
          />
          <group name="crmos_001" position={[2.231, -0.227, -1.101]} rotation={[0, 0.183, 0]}>
            <mesh
              name="Mesh649"
              castShadow
              receiveShadow
              geometry={nodes.Mesh649.geometry}
              material={materials['Plastic Black 5']}
            />
            <mesh
              name="Mesh649_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh649_1.geometry}
              material={materials.PaletteMaterial010}
            />
          </group>
        </group>
        <group name="cab_truck_001002" position={[1.107, 1.844, 8.058]}>
          <mesh
            name="Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002.geometry}
            material={materials.AZUL}
          />
          <mesh
            name="Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_1.geometry}
            material={materials.DefaultMaterial}
          />
          <mesh
            name="Mesh002_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_2.geometry}
            material={materials.PaletteMaterial005}
          />
          <mesh
            name="Mesh002_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_3.geometry}
            material={materials['DD OSCURO']}
          />
          <mesh
            name="Mesh002_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_4.geometry}
            material={materials.Steel}
          />
          <group name="crmos_030" position={[0.017, -0.338, -1.115]} rotation={[0, 0.183, 0]}>
            <mesh
              name="Mesh054"
              castShadow
              receiveShadow
              geometry={nodes.Mesh054.geometry}
              material={materials['Plastic Black 5']}
            />
            <mesh
              name="Mesh054_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh054_1.geometry}
              material={materials.PaletteMaterial010}
            />
          </group>
        </group>
        <mesh
          name="defaultMaterial008"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial008.geometry}
          material={materials.DefaultMaterial}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.012, 0.015, 0.014]}
        />
        <mesh
          name="plastico069"
          castShadow
          receiveShadow
          geometry={nodes.plastico069.geometry}
          material={materials['Material.013']}
          position={[0.491, 2.194, 7.643]}
          rotation={[-2.54, 0, -Math.PI]}
          scale={0.278}
        />
        <mesh
          name="cab_truck_0011678"
          castShadow
          receiveShadow
          geometry={nodes.cab_truck_0011678.geometry}
          material={materials['AZUL.001']}
          position={[0.086, 2.991, 7.687]}
          rotation={[-0.648, 0.091, 0.02]}
          scale={0.646}
        />
        <mesh
          name="Cylinder005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['Material.016']}
          position={[0.012, 0.929, -6.667]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.257, 1, 1]}
        />
        <mesh
          name="Freightliner_Century522"
          castShadow
          receiveShadow
          geometry={nodes.Freightliner_Century522.geometry}
          material={materials['panel.001']}
          position={[0, -1.032, 8.922]}
        />
        <mesh
          name="fright"
          castShadow
          receiveShadow
          geometry={nodes.fright.geometry}
          material={materials['cabin.001']}
          position={[0, -1.032, 8.922]}
        />
        <mesh
          name="glass_lightingh001"
          castShadow
          receiveShadow
          geometry={nodes.glass_lightingh001.geometry}
          material={materials['Material.002']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="Box004"
          castShadow
          receiveShadow
          geometry={nodes.Box004.geometry}
          material={materials['Scratched Silver Metal']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="Object007"
          castShadow
          receiveShadow
          geometry={nodes.Object007.geometry}
          material={materials['Material #41']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="Torus001"
          castShadow
          receiveShadow
          geometry={nodes.Torus001.geometry}
          material={materials.Standardmaterial}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="base_cuña"
          castShadow
          receiveShadow
          geometry={nodes.base_cuña.geometry}
          material={materials['Metal.001']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="caucho_guarda_fango"
          castShadow
          receiveShadow
          geometry={nodes.caucho_guarda_fango.geometry}
          material={materials['Material.009']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="cuña"
          castShadow
          receiveShadow
          geometry={nodes.cuña.geometry}
          material={materials['Metal.002']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="metal_vidriosos"
          castShadow
          receiveShadow
          geometry={nodes.metal_vidriosos.geometry}
          material={materials.Metal}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="Object067"
          castShadow
          receiveShadow
          geometry={nodes.Object067.geometry}
          material={materials['Iron Rough Cast']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="vidrio_02"
          castShadow
          receiveShadow
          geometry={nodes.vidrio_02.geometry}
          material={materials.PaletteMaterial004}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="Box010"
          castShadow
          receiveShadow
          geometry={nodes.Box010.geometry}
          material={materials['radiator cscd']}
          position={[0, 0, 8.947]}
          scale={[1.442, 1, 1]}
        />
        <mesh
          name="pasos"
          castShadow
          receiveShadow
          geometry={nodes.pasos.geometry}
          material={materials['Metal floor']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="defaultMaterial075"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial075.geometry}
          material={materials['Plastic White 12']}
          position={[0.288, 2.054, 7.833]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="defaultMaterial076"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial076.geometry}
          material={materials['Material.003']}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="defaultMaterial077"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial077.geometry}
          material={materials['Material.004']}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="defaultMaterial078"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial078.geometry}
          material={materials['Material.010']}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="defaultMaterial080"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial080.geometry}
          material={materials['Plastic Black 5']}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="defaultMaterial115"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial115.geometry}
          material={materials.Leather}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="defaultMaterial330"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial330.geometry}
          material={materials.Material}
          position={[0.48, 2.045, 7.867]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="defaultMaterial334"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial334.geometry}
          material={materials['Plastic 01']}
          position={[0.267, 2.068, 7.874]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <group
          name="Object002_01_-_Default_0"
          position={[0.039, 2.036, 7.863]}
          rotation={[-2.786, 0.624, 1.363]}
          scale={0.002}>
          <mesh
            name="Object002_01_-_Default_0_1"
            castShadow
            receiveShadow
            geometry={nodes['Object002_01_-_Default_0_1'].geometry}
            material={materials['01_-_Default']}
          />
          <mesh
            name="Object002_01_-_Default_0_2"
            castShadow
            receiveShadow
            geometry={nodes['Object002_01_-_Default_0_2'].geometry}
            material={materials['01_-_Defaulthrehhrehhredhghgrewherwh']}
          />
          <mesh
            name="Object002_01_-_Default_0_3"
            castShadow
            receiveShadow
            geometry={nodes['Object002_01_-_Default_0_3'].geometry}
            material={materials['01_-_Defaulthrehhre']}
          />
          <mesh
            name="Object002_01_-_Default_0_4"
            castShadow
            receiveShadow
            geometry={nodes['Object002_01_-_Default_0_4'].geometry}
            material={materials['01_-_Defaulthrehhrehgerwh']}
          />
          <mesh
            name="Object002_01_-_Default_0_5"
            castShadow
            receiveShadow
            geometry={nodes['Object002_01_-_Default_0_5'].geometry}
            material={materials['01_-_Defaulthrehhrehghgrewherwh']}
          />
          <mesh
            name="Object002_01_-_Default_0_6"
            castShadow
            receiveShadow
            geometry={nodes['Object002_01_-_Default_0_6'].geometry}
            material={materials['01_-_Defaulthreh']}
          />
        </group>
        <mesh
          name="displacement"
          castShadow
          receiveShadow
          geometry={nodes.displacement.geometry}
          material={materials.PaletteMaterial007}
          position={[0.025, 2.027, 7.609]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.088}
        />
        <mesh
          name="label"
          castShadow
          receiveShadow
          geometry={nodes.label.geometry}
          material={materials['Material.005']}
          position={[0.025, 1.958, 7.609]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.088}
        />
        <mesh
          name="water"
          castShadow
          receiveShadow
          geometry={nodes.water.geometry}
          material={materials.PaletteMaterial008}
          position={[0.025, 1.928, 7.609]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.088}
        />
        <mesh
          name="Screen_Black"
          castShadow
          receiveShadow
          geometry={nodes.Screen_Black.geometry}
          material={materials['Material.008']}
          position={[-0.066, 2.051, 7.73]}
          rotation={[0.021, 0.931, -1.318]}
          scale={[0.095, 0.1, 0.128]}
        />
        <mesh
          name="Screen_Black001"
          castShadow
          receiveShadow
          geometry={nodes.Screen_Black001.geometry}
          material={materials['Material.014']}
          position={[0.181, 2.052, 7.878]}
          rotation={[0.375, 1.513, -1.649]}
          scale={[0.086, 0.1, 0.111]}
        />
        <mesh
          name="hud_obj002"
          castShadow
          receiveShadow
          geometry={nodes.hud_obj002.geometry}
          material={materials.PaletteMaterial009}
          position={[0.473, 2.058, 7.869]}
          rotation={[-1.254, -0.004, 0.021]}
          scale={[0.647, 0.831, 0.798]}
        />
        <mesh
          name="plastico"
          castShadow
          receiveShadow
          geometry={nodes.plastico.geometry}
          material={materials['DD OSCURO']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="cab_truck_0011242"
          castShadow
          receiveShadow
          geometry={nodes.cab_truck_0011242.geometry}
          material={materials.AZUL}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="plastico001"
          castShadow
          receiveShadow
          geometry={nodes.plastico001.geometry}
          material={materials['Black Plastic']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="light_animation"
          castShadow
          receiveShadow
          geometry={nodes.light_animation.geometry}
          material={materials['Decorative glass']}
          position={[0, 0, 8.947]}
        />
        {/* <mesh
          name="glass_lightingh001001"
          castShadow
          receiveShadow
          geometry={nodes.glass_lightingh001001.geometry}
          material={materials['Material.001']}
          position={[0, 0, 8.947]}
        /> */}
        <mesh
          name="cromium"
          castShadow
          receiveShadow
          geometry={nodes.cromium.geometry}
          material={materials.Steel}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="Box010001"
          castShadow
          receiveShadow
          geometry={nodes.Box010001.geometry}
          material={materials['radiator cscd.001']}
          position={[0, 0, 8.947]}
          scale={[1.442, 1, 1]}
        />
        <mesh
          name="067"
          castShadow
          receiveShadow
          geometry={nodes['067'].geometry}
          material={materials['DD OSCURO']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="glass_003002"
          castShadow
          receiveShadow
          geometry={nodes.glass_003002.geometry}
          material={materials.PaletteMaterial005}
          position={[0, 0, 8.947]}
        />
        {/* <mesh
          name="glass_lightingh001009"
          castShadow
          receiveShadow
          geometry={nodes.glass_lightingh001009.geometry}
          material={materials['Material.007']}
        /> */}
        <mesh
          name="defaultMaterial001"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial001.geometry}
          material={materials['Plastic Silver']}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="defaultMaterial006"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial006.geometry}
          material={materials['Perforated rubber.002']}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="defaultMaterial007"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial007.geometry}
          material={materials['DefaultMaterial.003']}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          name="semi_trailer_semi_truck_base_0001"
          castShadow
          receiveShadow
          geometry={nodes.semi_trailer_semi_truck_base_0001.geometry}
          material={materials.rust}
          position={[0.034, 0.019, -3.671]}
          rotation={[Math.PI, -1.289, -Math.PI]}
          scale={[0.876, 0.885, 0.783]}
        />
        <mesh
          name="semi_trailer_semi_truck_base_0012"
          castShadow
          receiveShadow
          geometry={nodes.semi_trailer_semi_truck_base_0012.geometry}
          material={materials.semi_interior_floor}
          position={[0.034, 0.019, -3.671]}
          rotation={[Math.PI, -1.289, -Math.PI]}
          scale={[0.876, 0.885, 0.783]}
        />
        <mesh
          name="semi_trailer_semi_truck_base_0020"
          castShadow
          receiveShadow
          geometry={nodes.semi_trailer_semi_truck_base_0020.geometry}
          material={materials.semi_truck_base}
          position={[0.034, 0.019, -3.671]}
          rotation={[Math.PI, -1.289, -Math.PI]}
          scale={[0.876, 0.885, 0.783]}
        />
        <mesh
          name="semi_trailer_semi_truck_base_0045"
          castShadow
          receiveShadow
          geometry={nodes.semi_trailer_semi_truck_base_0045.geometry}
          material={materials.semi_interior_steel}
          position={[0.034, 0.019, -3.671]}
          rotation={[Math.PI, -1.289, -Math.PI]}
          scale={[0.876, 0.885, 0.783]}
        />
        <mesh
          name="semi_trailer_semi_truck_base_0062"
          castShadow
          receiveShadow
          geometry={nodes.semi_trailer_semi_truck_base_0062.geometry}
          material={materials.semi_top}
          position={[0.034, 0.019, -3.671]}
          rotation={[Math.PI, -1.289, -Math.PI]}
          scale={[0.876, 0.885, 0.783]}
        />
        <mesh
          name="semi_trailer_semi_truck_base_0068"
          castShadow
          receiveShadow
          geometry={nodes.semi_trailer_semi_truck_base_0068.geometry}
          material={materials['Material.006']}
          position={[0.034, 0.019, -3.671]}
          rotation={[Math.PI, -1.289, -Math.PI]}
          scale={[0.876, 0.885, 0.783]}
        />
        <mesh
          name="semi_trailer_semi_truck_base_0074"
          castShadow
          receiveShadow
          geometry={nodes.semi_trailer_semi_truck_base_0074.geometry}
          material={materials.wood_seamless}
          position={[0.034, 0.019, -3.671]}
          rotation={[Math.PI, -1.289, -Math.PI]}
          scale={[0.876, 0.885, 0.783]}
        />
        <group name="Torus002001" position={[0, 0, 0.035]}>
          <mesh
            name="Mesh650"
            castShadow
            receiveShadow
            geometry={nodes.Mesh650.geometry}
            material={materials['Standardmaterial.001']}
          />
          <mesh
            name="Mesh650_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh650_1.geometry}
            material={materials['Steel.001']}
          />
          <mesh
            name="Mesh650_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh650_2.geometry}
            material={materials['Material #41.001']}
          />
        </group>
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Knob Black']}
          position={[-0.007, 2.063, 7.778]}
          rotation={[2.93, 0.632, -3.015]}
          scale={0.007}
        />
        <mesh
          name="Cylinder004"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials['Button Black']}
          position={[-0.118, 2.003, 7.674]}
          rotation={[2.789, 0.717, 3.108]}
          scale={[0.01, 0.011, 0.012]}
        />
        <mesh
          name="casco_de_bateria_"
          castShadow
          receiveShadow
          geometry={nodes.casco_de_bateria_.geometry}
          material={materials['Stainless Steel']}
          position={[0, 0, 8.947]}
        />
        <mesh
          name="defaultMaterial130"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial130.geometry}
          material={materials['Material.012']}
          position={[-0.522, 1.514, 7.279]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
     
        <group name="SPOT001" position={[0.863, 1.086, 9.605]} rotation={[-Math.PI / 2, 0, 0.009]}>
          <mesh
            name="Mesh004"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004.geometry}
            material={materials['Material #39.014']}
          />
          <mesh
            name="Mesh004_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_1.geometry}
            material={materials['Material #40.015']}
          />
          <mesh
            name="Mesh004_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_2.geometry}
            material={materials['Standard_2.014']}
          />
        </group>
     
        
        {!lightsEnabled && ( // Change to render lights when lightsEnabled is false
      <>
        <pointLight
          name="Delta_Light_1"
          intensity={3}
          decay={2}
          position={[-0.7, 6, 4]}
          rotation={[-Math.PI, -0.009, 0]}
        />
        <pointLight
          name="Delta_Light_2"
          intensity={3}
          decay={2}
          position={[-0.86, 1.087, 9.621]}
          rotation={[-Math.PI, -0.009, 0]}
        />
        <pointLight
          name="Delta_Light_3"
          intensity={3}
          decay={2}
          position={[-1.058, 1.125, 9.485]}
          rotation={[-Math.PI, -0.009, 0]}
        />
        <pointLight
          name="Delta_Light_HALOSPOT®_111001"
          intensity={3}
          decay={2}
          position={[0.863, 1.087, 9.621]}
          rotation={[-Math.PI, -0.009, 0]}
        />
      </>
    )}

     
      </group>
    </group>
  )
}

useGLTF.preload('/truck.glb')
