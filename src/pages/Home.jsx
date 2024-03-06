import { OrbitControls, ScrollControls }from "@react-three/drei";
import React from 'react'
import { Office } from "./Office";
import { Overlay } from "./Overlay";

const Home = () => {
    return (
        <>
     <ambientLight intensity={3} />
     <spotLight intensity={4} position={[2,0,2]}/>
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
    <Overlay/>
        <Office />
      </ScrollControls>
        </>
    )
}

export default Home
