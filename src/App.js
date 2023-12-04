import React from 'react';
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls, useGLTF, AmbientLight, Html } from "@react-three/drei";
import './App.css';
import { useState } from 'react';
import { Model } from './Objects';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Planets from './Planets';

// 3D Source: https://www.nasa.gov/?search=gltf

const planetNames = [[{name: "Earth",     link: "Earth.glb"}, // objectCategory = 0; planets
                      {name: "Mars",      link: "Mars.glb"},
                      {name: "Jupiter",   link: "Jupiter.glb"},
                      {name: "Mercury",   link: "Mercury.glb"},
                      {name: "Saturn",    link: "Saturn.glb"},
                      {name: "Neptune",   link: "Neptune.glb"},
                      {name: "Sun",       link: "Sun.glb"}],

                      [{name: "Curiosity", link: "Curiosity.glb"}, // objectCategory = 1; rovers
                      {name: "Cassini",    link: "Cassini.glb"},
                      {name: "Mars Rover", link: "MER_static.glb"}],

                      [{name: "Eros",   link: "Eros.glb"}, // objectCategory = 2; asteroids
                      {name: "Vesta",   link: "Vesta.glb"},
                      {name: "Bennu",   link: "Bennu.glb"}]]

let objectIndex = 0
let objectCategory = 0
let number_of_Objects = planetNames[objectCategory].length

function changeCategory(props){
  objectCategory = props.category;
}

function increaseIndex(){
  objectIndex += 1;
  objectIndex = objectIndex % planetNames[objectCategory].length;
  return objectIndex;
}
function decreaseIndex(){
  objectIndex -= 1;
  if (objectIndex < 0){
    objectIndex += number_of_Objects;
  }
  return objectIndex;
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

function setObject(props){

  return planetNames[props.category][objectIndex];
}

function App(props) {
  objectCategory = props.category;
  number_of_Objects = planetNames[objectCategory].length
  let [object, setObjects] = useState(setObject(props));
  return (
		<div id={"mainWindow"} style = {{width: "100vw", height: "100vh"}}>
      <NavBar />
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
		  <button className="nextButton" onClick={() => setObjects(planetNames[props.category][increaseIndex()])}></button>
		  <button className="prevButton" onClick={() => setObjects(planetNames[props.category][decreaseIndex()])}></button>
		</div>
  );
}

export default App;
