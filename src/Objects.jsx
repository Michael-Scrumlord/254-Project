import React, {useRef} from 'react';
import {useGLTF} from "@react-three/drei";
//import { useFrame, Canvas } from '@react-three/fiber';
//import { AmbientLight } from 'three';

// To add objects - 
// from cmd: npx gltfjsx <path-to-glb> 
// copy the jsx group into one of the cases below

export function Model(props) {
  const { nodes, materials } = useGLTF(props.link);
  const myMesh = useRef();
  
  let text = "";

  // Planet Rotation
//  useFrame(({ clock }) => {
//    myMesh.current.rotation.y = clock.getElapsedTime() * 0.05;
//  })

  switch (props.name) {
    case 'Earth':
      text = <group {...props} dispose={null} scale={.0025}>
      <mesh ref={myMesh} geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
      </group>;
      break;
    case 'Mars':
        text = <group {...props} dispose={null} scale={0.0025}>
        <mesh ref={myMesh} geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} />
        </group>
        break;
    case 'Jupiter':
          text = <group {...props} dispose={null} scale={0.0025}>
          <mesh geometry={nodes.cubemap.geometry} material={materials.None} />
        </group>
          break;
    case 'Saturn':
        text = <group {...props} dispose={null} scale={0.003}>
        <mesh geometry={nodes.Saturn001.geometry} material={materials.None} />
        <mesh geometry={nodes.RingsTop.geometry} material={materials.SaturnRings} />
        <mesh geometry={nodes.RingsBottom.geometry} material={materials.SaturnRings} />
      </group>;
        break;
    case 'Mercury':
        text = <group {...props} dispose={null} scale={0.0025}>
        <mesh geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} />
      </group>;
        break;
    case 'Neptune':
        text = <group {...props} dispose={null}  scale={0.0025}>
        <mesh geometry={nodes.Neptune.geometry} material={materials['Default OBJ.001']} rotation={[Math.PI / 2, 0, 0]} />
      </group>;
        break;
    case 'Sun':
        text = <group {...props} dispose={null}  scale={0.0025}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.None} rotation={[Math.PI / 2, 0, 0]} scale={1000} />
      </group>;
        break;
    case 'Mars Rover':
        text = <group {...props} dispose={null} scale={1.5}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh ref={myMesh} />
        <mesh geometry={nodes.Cube000.geometry} material={materials.tex_panels_n} />
        <mesh geometry={nodes.Cube000_1.geometry} material={materials.tex_panels2_n} />
        <mesh geometry={nodes.Cube000_2.geometry} material={materials.tex_instruments} />
        <mesh geometry={nodes.Cube000_3.geometry} material={materials.tex_body_n} />
        <mesh geometry={nodes.Cube000_4.geometry} material={materials.tex_suspension_n} />
        <mesh geometry={nodes.Cube000_5.geometry} material={materials.Silver} />
        <mesh geometry={nodes.Cube000_6.geometry} material={materials.tex_mast} />
        <mesh geometry={nodes.Cube000_7.geometry} material={materials.foil_silver} />
        <mesh geometry={nodes.Cube000_8.geometry} material={materials.tex_arm} />
        </group>;
        break;
    case 'Curiosity':
        text = <group {...props} dispose={null}>
        <group position={[1.06, 0.25, 1.1]}>
          <mesh ref={myMesh} />
          <mesh geometry={nodes.Cylinder015.geometry} material={materials.wheels} />
          <mesh geometry={nodes.Cylinder015_1.geometry} material={materials.tex_02} />
          <mesh geometry={nodes.Cylinder015_2.geometry} material={materials.tex_01} />
          <mesh geometry={nodes.Cylinder015_3.geometry} material={materials.parts_AO} />
          <mesh geometry={nodes.Cylinder015_4.geometry} material={materials.tex_03} />
          <mesh geometry={nodes.Cylinder015_5.geometry} material={materials.tex_05} />
          <mesh geometry={nodes.Cylinder015_6.geometry} material={materials.tex_04} />
          <mesh geometry={nodes.Cylinder015_7.geometry} material={materials.tex_03a} />
          <mesh geometry={nodes.Cylinder015_8.geometry} material={materials.internals} />
        </group>
      </group>
        break;
    case 'Cassini':
      text = <group {...props} dispose={null} scale={0.75}>
      <mesh geometry={nodes._root.geometry} material={materials.transparent}>
        <mesh geometry={nodes.aluminum.geometry} material={materials.aluminum} position={[-0.01, -2.44, -4.66]} />
        <mesh geometry={nodes.black_krinkle.geometry} material={materials.black_krinkle} position={[-0.49, -0.74, 0]} />
        <mesh geometry={nodes.BUS.geometry} material={materials.foil_gold} position={[-1.35, 0.03, 0.01]} />
        <mesh geometry={nodes.dish.geometry} material={materials.dish_AO} position={[0, 1.93, -0.1]} />
        <mesh geometry={nodes.foil_gold_2.geometry} material={materials.foil_gold_2} position={[0.07, 0.62, 0.06]} />
        <mesh geometry={nodes.foil_gold_h.geometry} material={materials.foil_gold} position={[0.07, -0.72, -4.59]} />
        <mesh geometry={nodes.huygens_strip.geometry} material={materials.tex_01} position={[-0.01, 0, 0]} />
        <mesh geometry={nodes.plastic_dark001.geometry} material={materials.tex_01} position={[-0.03, -2.69, 0.03]} />
        <mesh geometry={nodes.plastic_white.geometry} material={materials.dish_AO} position={[0, 1.14, 0]} />
        <group position={[-0.28, -0.87, 0]}>
          <mesh geometry={nodes.Mesh019.geometry} material={materials.plastic_dark} />
          <mesh geometry={nodes.Mesh019_1.geometry} material={materials.foil_gold} />
          <mesh geometry={nodes.Mesh019_2.geometry} material={materials['Material *']} />
          <mesh geometry={nodes.Mesh019_3.geometry} material={materials.aluminum} />
        </group>
        <mesh geometry={nodes.vents.geometry} material={materials.Vents} position={[0.52, 1.05, -0.9]} />
      </mesh>
    </group>;
      break;
    case 'Eros':
      text = <group {...props} dispose={null} scale={0.0012}>
        <mesh geometry={nodes.eros_LP.geometry} material={materials.eros} />
      </group>;
      break;
    case 'Vesta':
      text = <group {...props} dispose={null} scale={0.0005}>
        <mesh geometry={nodes.Vesta.geometry} material={materials.vesta} />
      </group>;
      break;
    case 'Bennu':
      text = <group {...props} dispose={null} scale={0.0025}>
        <mesh geometry={nodes.bennu.geometry} material={materials.bennu} />
      </group>;
        break;
    default: 
      text=<group></group>;
      break;
  }
    
  return (
    text
  )
}
