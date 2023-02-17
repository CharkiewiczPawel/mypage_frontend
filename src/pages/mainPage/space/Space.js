import React from 'react'
import { Suspense, useRef } from 'react' //<Suspense>komponent, który pozwala „poczekać” na załadowanie jakiegoś kodu
import {Canvas, useFrame,} from '@react-three/fiber'
import {useGLTF, OrbitControls} from '@react-three/drei'
import './Space.css'



export function SpaceModel(props) {
    const group=useRef()
    const { nodes, materials } = useGLTF('/Space.gltf')
    useFrame((state, delta) => (
        group.current.rotation.y += 0.000138
        ))
        useFrame((state, delta) => (
          group.current.rotation.x -= 0.000139
          ))
    return (
      <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Sphere.geometry} material={materials['Historic Shade']} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      <mesh geometry={nodes.Sphere_36.geometry} material={materials.Melody} position={[-5.01, -11.35, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_35.geometry} material={materials.Melody} position={[-1.92, 1.92, -92.4]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Sphere_34.geometry} material={materials.Melody} position={[-2.69, 0, -347.51]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Sphere_33.geometry} material={materials.Melody} position={[0, 3.48, 669.11]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_32.geometry} material={materials.Melody} position={[-3.93, -18.45, -2.47]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_31.geometry} material={materials.Melody} position={[-1.79, 90.77, 3.39]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_30.geometry} material={materials.Monaco} position={[-2.31, -24.53, -5.62]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_29.geometry} material={materials.Monaco} position={[-14.92, -4.62, 24.57]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_28.geometry} material={materials.Melody} position={[-83.23, 6.39, 7.34]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_27.geometry} material={materials.Melody} position={[3.21, 2.87, -82.92]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_26.geometry} material={materials.Melody} position={[14.49, 2.99, 29.45]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_25.geometry} material={materials.Melody} position={[-26.89, -5.04, -7.72]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_23.geometry} material={materials.Melody} position={[12.73, -11.27, -8.81]} rotation={[-Math.PI / 2, 0, 0]} scale={0.015} />
      <mesh geometry={nodes.Sphere_24.geometry} material={materials.Melody} position={[45, -6.36, 3.6]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_22.geometry} material={materials.Monaco} position={[995.13, 4.99, 7.65]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_21.geometry} material={materials.Monaco} position={[-5.5, -14.87, 4.86]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_20.geometry} material={materials.Melody} position={[0, -15.01, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_19.geometry} material={materials.Melody} position={[0, 40.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_18.geometry} material={materials.Melody} position={[3.59, 0, 83.31]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Sphere_17.geometry} material={materials.Monaco} position={[0, 9.08, -3701.24]} rotation={[2.69, -0.83, -0.34]} scale={0.011} />
      <mesh geometry={nodes.Sphere_16.geometry} material={materials.Melody} position={[-29.27, -12.54, 7.94]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Sphere_15.geometry} material={materials.Melody} position={[8.24, 8.17, 18.21]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Sphere_14.geometry} material={materials.Melody} position={[11.41, -29.59, 13.37]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Sphere_13.geometry} material={materials.Monaco} position={[0.34, 28.54, 0.61]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Sphere_12.geometry} material={materials.Melody} position={[13.95, 8.71, 19.26]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Sphere_11.geometry} material={materials.Melody} position={[24.55, -33.55, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Sphere_10.geometry} material={materials.Melody} position={[7.83, -35.69, -17.81]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Sphere_9.geometry} material={materials.Melody} position={[6.7, 16.14, -5.49]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Sphere_8.geometry} material={materials.Melody} position={[0, 14.36, -20.22]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Sphere_7.geometry} material={materials.Melody} position={[2.72, 0, -80.36]} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      <mesh geometry={nodes.Sphere_6.geometry} material={materials.Melody} position={[4.08, -21.36, -138.04]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Sphere_5.geometry} material={materials.Melody} position={[-61.21, 0, -18.9]} rotation={[Math.PI / 2, 0.53, -Math.PI]} scale={0.012} />
      <mesh geometry={nodes.Sphere_4.geometry} material={materials.Melody} position={[-142.29, 8.61, 8.9]} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      <mesh geometry={nodes.Sphere_3.geometry} material={materials.Melody} position={[-15.47, -23.6, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Sphere_2.geometry} material={materials.Melody} position={[-91.3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Sphere_1.geometry} material={materials.Melody} position={[0, 0, 64.59]} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
    </group>
    )
      }

  export default function Space(props) {
  return (
    <div className='space' >
      <div>
       <Canvas camera={{fov:10000, position:[100,75,50]}} className='spaceCanvas' style={{width:'150vw'}}>
         <Suspense fallback={null}>
             <ambientLight intensity={0.7} className='ambientLightPlanet'/>
                 <SpaceModel/>


         </Suspense>
       </Canvas>
      </div>
     </div>
  )
}

