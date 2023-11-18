/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\public\MER_static.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/MER_static.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube000.geometry} material={materials.tex_panels_n} />
      <mesh geometry={nodes.Cube000_1.geometry} material={materials.tex_panels2_n} />
      <mesh geometry={nodes.Cube000_2.geometry} material={materials.tex_instruments} />
      <mesh geometry={nodes.Cube000_3.geometry} material={materials.tex_body_n} />
      <mesh geometry={nodes.Cube000_4.geometry} material={materials.tex_suspension_n} />
      <mesh geometry={nodes.Cube000_5.geometry} material={materials.Silver} />
      <mesh geometry={nodes.Cube000_6.geometry} material={materials.tex_mast} />
      <mesh geometry={nodes.Cube000_7.geometry} material={materials.foil_silver} />
      <mesh geometry={nodes.Cube000_8.geometry} material={materials.tex_arm} />
    </group>
  )
}

useGLTF.preload('/MER_static.glb')
