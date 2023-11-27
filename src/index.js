import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Canvas } from '@react-three/fiber';
import './index.css'
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Planets from './Planets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavBar/>
    <Routes>
			<Route path = "/" element={<App category={0}/>} />
			<Route path = "/about" element={<About />} />
			<Route path = "/planets" element={<App category={0}/>} />
      <Route path = "/rovers" element={<App category={1}/>} />
			<Route path = "/asteroids" element={<App category={2}/>} />
		</Routes>
  </Router>
);
