import React from 'react';
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls, useGLTF } from "@react-three/drei";
import './App.css';
import { useState } from 'react';
import { Model } from './Planet';

function CollapseMenu(props){
  return(
    <div className="CollapseMenu">
      <h1 classname="PlanetName">{props.name}</h1>
    </div>
  )
}

function App() {
  const [planet, setPlanets] = useState({name: "Rover", link: "MER_static.glb"})

  return (
    <div style = {{width: "100vw", height: "90vh"}}>
      <Canvas>
        <Stars />
        <OrbitControls />
        <spotLight position = {[10, 15, 20]} angle = {0.3} intensity={1.5} />
        <Model name={planet.name} link={planet.link} />
      </Canvas>
      <CollapseMenu name={planet.name}/>
    </div>
  );
}

export default App;