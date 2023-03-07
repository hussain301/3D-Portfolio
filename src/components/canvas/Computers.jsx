import React, { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  // Define a useEffect hook that runs after the component has mounted
  useEffect(() => {
    // Define a media query using window.matchMedia method
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of "isMobile" using the matches property of the media query
    setIsMobile(mediaQuery.matches)

    // Define a function called "handleMediaQueryChange" that will be called when the media query matches change
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }

    // Add an event listener to the media query that will call "handleMediaQueryChange" when the query matches change
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, []) 


  return (
    <Canvas frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>)
}
export default ComputersCanvas