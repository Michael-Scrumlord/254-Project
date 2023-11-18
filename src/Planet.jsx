import React, {useRef} from 'react';
import {useGLTF} from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF(props.link);
  const myMesh = useRef();
  
  let text = "";

  // Planet Rotation
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() * 0.05;
  })

  switch (props.name) {
    case 'Earth':
      text = <group {...props} dispose={null} scale={.0025}>
      <mesh ref={myMesh} geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
      </group>;
      break;
    case 'Mars':
        text = <group {...props} dispose={null} scale={.0025}>
        </group>;
        break;
    case 'Jupiter':
        text = <group></group>;
        break;
    case 'Saturn':
        text = <group></group>;
        break;
    case 'Mercury':
        text = <group></group>;
        break;
    case 'Neptune':
        text = <group></group>;
        break;
    case 'Rover':
        text = <group {...props} dispose={null} scale={2}>
        <mesh ref={myMesh} geometry={nodes.Cube000.geometry} material={materials.tex_panels_n} />
        <mesh ref={myMesh} geometry={nodes.Cube000_1.geometry} material={materials.tex_panels2_n} />
        <mesh ref={myMesh} geometry={nodes.Cube000_2.geometry} material={materials.tex_instruments} />
        <mesh ref={myMesh} geometry={nodes.Cube000_3.geometry} material={materials.tex_body_n} />
        <mesh ref={myMesh} geometry={nodes.Cube000_4.geometry} material={materials.tex_suspension_n} />
        <mesh ref={myMesh} geometry={nodes.Cube000_5.geometry} material={materials.Silver} />
        <mesh ref={myMesh} geometry={nodes.Cube000_6.geometry} material={materials.tex_mast} />
        <mesh ref={myMesh} geometry={nodes.Cube000_7.geometry} material={materials.foil_silver} />
        <mesh ref={myMesh} geometry={nodes.Cube000_8.geometry} material={materials.tex_arm} />
      </group>;
      break;
    default:
        text = <group {...props} dispose={null} scale={.0025} rotation={[-0.5, 0.6 ,0.6]}>
        <mesh ref={myMesh} geometry={nodes.Cube001.geometry} material={materials['Default OBJ']}/>
        </group>;
        break;
  }
    
  return (
    text
  )
}
