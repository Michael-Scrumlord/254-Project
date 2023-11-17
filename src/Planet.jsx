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
        <mesh ref={myMesh} geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
        </group>;
        break;
    default:
        text = <group {...props} dispose={null} scale={.0025} rotation={[-0.5, 0.6 ,0.6]}>
        <mesh ref={myMesh} geometry={nodes.Cube001.geometry} material={materials['Default OBJ']}/>
        </group>;
  }
    
  return (
    text
  )
}
