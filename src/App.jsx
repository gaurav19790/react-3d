
import React from 'react'
import '../index.css'
import Home from './pages/Home'
import { Canvas } from '@react-three/fiber'
const App = () => {
    return (
        <Canvas    camera={{
            fov: 64,
            position: [2.3, 1.5, 2.3],
          }}>
            <Home />
        </Canvas>
    )
}

export default App
