/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function BlueTruck(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/bluetruck.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="cromium"
          castShadow
          receiveShadow
          geometry={nodes.cromium.geometry}
          material={materials.Steel}
        />
        <mesh
          name="plastico"
          castShadow
          receiveShadow
          geometry={nodes.plastico.geometry}
          material={materials['DD OSCURO']}
        />
        <mesh
          name="glass_lightingh001"
          castShadow
          receiveShadow
          geometry={nodes.glass_lightingh001.geometry}
          material={materials.Glass}
        />
        <mesh
          name="head_light_casca_"
          castShadow
          receiveShadow
          geometry={nodes.head_light_casca_.geometry}
          material={materials['DD OSCURO']}
        />
        <mesh
          name="Object066"
          castShadow
          receiveShadow
          geometry={nodes.Object066.geometry}
          material={materials['Decorative glass']}
        />
        <mesh
          name="parabrisa_"
          castShadow
          receiveShadow
          geometry={nodes.parabrisa_.geometry}
          material={materials['Black Plastic']}
        />
        <group name="ruedas_de_camion">
          <group name="5E" />
          <group name="Box001" />
          <mesh
            name="Object005"
            castShadow
            receiveShadow
            geometry={nodes.Object005.geometry}
            material={nodes.Object005.material}
          />
          <mesh
            name="Object006"
            castShadow
            receiveShadow
            geometry={nodes.Object006.geometry}
            material={materials.Steel}
          />
          <mesh
            name="Object007"
            castShadow
            receiveShadow
            geometry={nodes.Object007.geometry}
            material={materials['Material #41']}
          />
          <group name="Object065" />
          <mesh
            name="Object069"
            castShadow
            receiveShadow
            geometry={nodes.Object069.geometry}
            material={nodes.Object069.material}
          />
          <mesh
            name="Object071"
            castShadow
            receiveShadow
            geometry={nodes.Object071.geometry}
            material={materials['Material #41']}
          />
          <mesh
            name="Object075"
            castShadow
            receiveShadow
            geometry={nodes.Object075.geometry}
            material={nodes.Object075.material}
          />
          <group
            name="Object077"
            position={[-0.301, 2.515, -2.189]}
            rotation={[2.01, -0.386, 2.467]}
          />
          <mesh
            name="Object079"
            castShadow
            receiveShadow
            geometry={nodes.Object079.geometry}
            material={materials['Material #41']}
          />
          <mesh
            name="Object080"
            castShadow
            receiveShadow
            geometry={nodes.Object080.geometry}
            material={materials['Material #41']}
          />
          <mesh
            name="Torus001"
            castShadow
            receiveShadow
            geometry={nodes.Torus001.geometry}
            material={materials.Standardmaterial}
          />
          <mesh
            name="Torus002"
            castShadow
            receiveShadow
            geometry={nodes.Torus002.geometry}
            material={materials.Standardmaterial}
          />
          <group name="Torus002001" position={[0, 0, -8.912]}>
            <mesh
              name="Mesh025"
              castShadow
              receiveShadow
              geometry={nodes.Mesh025.geometry}
              material={materials.Standardmaterial}
            />
            <mesh
              name="Mesh025_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh025_1.geometry}
              material={materials.Steel}
            />
            <mesh
              name="Mesh025_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh025_2.geometry}
              material={materials['Material #41']}
            />
          </group>
          <mesh
            name="Torus003"
            castShadow
            receiveShadow
            geometry={nodes.Torus003.geometry}
            material={materials.Standardmaterial}
          />
          <mesh
            name="Torus004"
            castShadow
            receiveShadow
            geometry={nodes.Torus004.geometry}
            material={materials.Standardmaterial}
          />
          <mesh
            name="Torus005"
            castShadow
            receiveShadow
            geometry={nodes.Torus005.geometry}
            material={materials.Standardmaterial}
          />
          <mesh
            name="Torus006"
            castShadow
            receiveShadow
            geometry={nodes.Torus006.geometry}
            material={materials.Standardmaterial}
          />
          <mesh
            name="Torus007"
            castShadow
            receiveShadow
            geometry={nodes.Torus007.geometry}
            material={materials.Standardmaterial}
          />
          <mesh
            name="Torus008"
            castShadow
            receiveShadow
            geometry={nodes.Torus008.geometry}
            material={materials.Standardmaterial}
          />
          <mesh
            name="Torus009"
            castShadow
            receiveShadow
            geometry={nodes.Torus009.geometry}
            material={materials.Standardmaterial}
          />
          <mesh
            name="Torus010"
            castShadow
            receiveShadow
            geometry={nodes.Torus010.geometry}
            material={materials.Standardmaterial}
          />
        </group>
        <group name="chassis_cascadia_">
          <mesh
            name="base_cuña"
            castShadow
            receiveShadow
            geometry={nodes.base_cuña.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            name="cableado"
            castShadow
            receiveShadow
            geometry={nodes.cableado.geometry}
            material={materials.Rubber}
          />
          <mesh
            name="casco_de_bateria_"
            castShadow
            receiveShadow
            geometry={nodes.casco_de_bateria_.geometry}
            material={materials['Stainless Steel']}
          />
          <mesh
            name="caucho_guarda_fango"
            castShadow
            receiveShadow
            geometry={nodes.caucho_guarda_fango.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="chassis_"
            castShadow
            receiveShadow
            geometry={nodes.chassis_.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="cuña"
            castShadow
            receiveShadow
            geometry={nodes.cuña.geometry}
            material={materials['Metal.002']}
          />
          <mesh
            name="guarda_fango"
            castShadow
            receiveShadow
            geometry={nodes.guarda_fango.geometry}
            material={materials['DD OSCURO']}
          />
          <mesh
            name="guarda_fango001"
            castShadow
            receiveShadow
            geometry={nodes.guarda_fango001.geometry}
            material={materials['DD OSCURO']}
            position={[0, 0, -8.89]}
          />
          <mesh
            name="metal_vidriosos"
            castShadow
            receiveShadow
            geometry={nodes.metal_vidriosos.geometry}
            material={materials.Metal}
          />
          <mesh
            name="Object067"
            castShadow
            receiveShadow
            geometry={nodes.Object067.geometry}
            material={materials['Iron Rough Cast']}
          />
          <mesh
            name="Object068"
            castShadow
            receiveShadow
            geometry={nodes.Object068.geometry}
            material={materials.Silver}
          />
          <mesh
            name="Object078"
            castShadow
            receiveShadow
            geometry={nodes.Object078.geometry}
            material={nodes.Object078.material}
          />
          <mesh
            name="pasarela_"
            castShadow
            receiveShadow
            geometry={nodes.pasarela_.geometry}
            material={materials.Silver}
          />
          <mesh
            name="suspencion_neumatica"
            castShadow
            receiveShadow
            geometry={nodes.suspencion_neumatica.geometry}
            material={materials['DD OSCURO']}
          />
          <mesh
            name="tanque_01"
            castShadow
            receiveShadow
            geometry={nodes.tanque_01.geometry}
            material={materials['DD OSCURO']}
          />
          <mesh
            name="tanque_de_combutible_"
            castShadow
            receiveShadow
            geometry={nodes.tanque_de_combutible_.geometry}
            material={materials.Silver}
          />
          <mesh
            name="tapas"
            castShadow
            receiveShadow
            geometry={nodes.tapas.geometry}
            material={materials['Black Plastic']}
          />
          <mesh
            name="tensador_plastico"
            castShadow
            receiveShadow
            geometry={nodes.tensador_plastico.geometry}
            material={materials['DD OSCURO']}
          />
          <mesh
            name="vidrio_02"
            castShadow
            receiveShadow
            geometry={nodes.vidrio_02.geometry}
            material={materials['Bulb Emmision Light']}
          />
          <mesh
            name="vidrio_03"
            castShadow
            receiveShadow
            geometry={nodes.vidrio_03.geometry}
            material={nodes.vidrio_03.material}
          />
        </group>
        <mesh
          name="Box010"
          castShadow
          receiveShadow
          geometry={nodes.Box010.geometry}
          material={materials['radiator cscd']}
          scale={[1.442, 1, 1]}
        />
        <mesh
          name="067"
          castShadow
          receiveShadow
          geometry={nodes['067'].geometry}
          material={materials['DD OSCURO']}
        />
        <mesh
          name="glass_003"
          castShadow
          receiveShadow
          geometry={nodes.glass_003.geometry}
          material={materials['Cool glass']}
        />
        <mesh
          name="pasos"
          castShadow
          receiveShadow
          geometry={nodes.pasos.geometry}
          material={materials['Metal floor']}
        />
        <mesh
          name="from_axle"
          castShadow
          receiveShadow
          geometry={nodes.from_axle.geometry}
          material={materials.rogelio}
          position={[0, -0.013, -0.416]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.025}
        />
        <mesh
          name="plastico001"
          castShadow
          receiveShadow
          geometry={nodes.plastico001.geometry}
          material={materials['Black Plastic']}
        />
        <mesh
          name="cab_truck_0011677"
          castShadow
          receiveShadow
          geometry={nodes.cab_truck_0011677.geometry}
          material={materials['AZUL.001']}
          position={[0, 2.991, -1.26]}
          rotation={[-0.648, 0.091, 0.02]}
          scale={0.646}
        />
        <mesh
          name="cab_truck_0011678"
          castShadow
          receiveShadow
          geometry={nodes.cab_truck_0011678.geometry}
          material={materials['AZUL.001']}
          position={[0.086, 2.991, -1.26]}
          rotation={[-0.648, 0.091, 0.02]}
          scale={0.646}
        />
        <mesh
          name="cab_truck_0011679"
          castShadow
          receiveShadow
          geometry={nodes.cab_truck_0011679.geometry}
          material={materials['AZUL.001']}
        />
        <mesh
          name="plastico002"
          castShadow
          receiveShadow
          geometry={nodes.plastico002.geometry}
          material={materials['Material.013']}
          position={[0.491, 2.194, -1.304]}
          rotation={[-2.54, 0, -Math.PI]}
          scale={0.278}
        />
        <mesh
          name="cab_truck_0011242"
          castShadow
          receiveShadow
          geometry={nodes.cab_truck_0011242.geometry}
          material={materials.body}
        />
        <group
          name="semi_trailer_semi_truck_base_0205"
          position={[-1.222, 2.765, -11.865]}
          rotation={[Math.PI, -1.287, Math.PI]}
          scale={[0.877, 0.885, 0.784]}>
          <mesh
            name="semi_trailer_semi_truck_base_0205_1"
            castShadow
            receiveShadow
            geometry={nodes.semi_trailer_semi_truck_base_0205_1.geometry}
            material={materials.semi_truck_base}
          />
          <mesh
            name="semi_trailer_semi_truck_base_0205_2"
            castShadow
            receiveShadow
            geometry={nodes.semi_trailer_semi_truck_base_0205_2.geometry}
            material={materials.rust}
          />
          <mesh
            name="semi_trailer_semi_truck_base_0205_3"
            castShadow
            receiveShadow
            geometry={nodes.semi_trailer_semi_truck_base_0205_3.geometry}
            material={materials.semi_interior_floor}
          />
          <mesh
            name="semi_trailer_semi_truck_base_0205_4"
            castShadow
            receiveShadow
            geometry={nodes.semi_trailer_semi_truck_base_0205_4.geometry}
            material={materials.semi_interior_steel}
          />
          <mesh
            name="semi_trailer_semi_truck_base_0205_5"
            castShadow
            receiveShadow
            geometry={nodes.semi_trailer_semi_truck_base_0205_5.geometry}
            material={materials.semi_top}
          />
          <mesh
            name="semi_trailer_semi_truck_base_0205_6"
            castShadow
            receiveShadow
            geometry={nodes.semi_trailer_semi_truck_base_0205_6.geometry}
            material={materials.wood_seamless}
          />
          <mesh
            name="semi_trailer_semi_truck_base_0205_7"
            castShadow
            receiveShadow
            geometry={nodes.semi_trailer_semi_truck_base_0205_7.geometry}
            material={materials['Material.016']}
          />
        </group>
        <mesh
          name="LIGHT"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT.geometry}
          material={materials.Material}
          position={[-0.86, 1.086, 0.652]}
          scale={0.065}
        />
        <mesh
          name="LIGHT001"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT001.geometry}
          material={materials.Material}
          position={[-1.049, 1.109, 0.559]}
          scale={0.065}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/bluetruck.glb')