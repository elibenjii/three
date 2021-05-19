import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Canvas } from '@react-three/fiber'


ReactDOM.render(
  <React.StrictMode>
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <App />
    </Canvas>
  </React.StrictMode>,
  document.getElementById('root')
);