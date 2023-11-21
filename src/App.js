import React from 'react';
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls, useGLTF, AmbientLight, Html } from "@react-three/drei";
import './App.css';
import { useState } from 'react';
import { Model } from './Objects';
import { Suspense } from 'react';

// 3D Source: https://www.nasa.gov/?search=gltf

const planetNames = [{name: "Mars Rover", link: "MER_static.glb"}, 
                      {name: "Earth",     link: "Earth.glb"},
                      {name: "Mars",      link: "Mars.glb"},
                      {name: "Cassini",   link: "Cassini.glb"},
                      {name: "Curiosity", link: "Curiosity.glb"},
                      {name: "Jupiter",   link: "Jupiter.glb"},
                      {name: "Mercury",   link: "Mercury_1_4878.glb"},
                      {name: "Saturn",    link: "Saturn_1_120536.glb"},
                      {name: "Neptune",   link: "Neptune_1_49528.glb"},
                      {name: "Sun",   link: "Sun_1_1391000.glb"}]

const rovers = [{name: "Curiosity", link: "Curiosity.glb"},
                {name: "ISS", link: "ISS.glb"}]
let planetIndex = 0
let astIndex = 0
let roverIndex = 0
let planetObjects = planetNames.length

function increaseIndex(){
  planetIndex += 1;
  planetIndex = planetIndex % planetObjects;
  return planetIndex;
}
function decreaseIndex(){
  planetIndex -= 1;
  if (planetIndex < 0){
    planetIndex += planetObjects;
  }
  return planetIndex;
}

function openFullscreen() {
  var elem = document.getElementById("mainWindow");

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function App() {
  const [object, setObjects] = useState(planetNames[0])

  return (
    <div id={"mainWindow"} style = {{width: "100vw", height: "100vh"}}>
      <Canvas>
        <Stars />
        <OrbitControls />
        <ambientLight intensity={0.05}/>
        <spotLight position = {[10, 15, 20]} angle = {0.3} intensity={1.5} />
        <Suspense fallback={<Html>Loading...</Html>}>
          <Model name={object.name} link={object.link}/>
        </Suspense>
      </Canvas>
      <div className="ObjectName" onClick={openFullscreen}>
        <h1>{object.name}</h1>
      </div>
      <button className="nextButton" onClick={() => setObjects(planetNames[increaseIndex()])}></button>
      <button className="prevButton" onClick={() => setObjects(planetNames[decreaseIndex()])}></button>
    </div>
  );
}

export default App;