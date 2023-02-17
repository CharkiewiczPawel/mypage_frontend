import React from 'react'
import { Suspense, useRef } from 'react' //<Suspense>komponent, który pozwala „poczekać” na załadowanie jakiegoś kodu
import {Canvas, useFrame,} from '@react-three/fiber'
import {useGLTF,OrbitControls} from '@react-three/drei'

import '../Main.css'



function ModelMoon(props){
  const group=useRef()
  const { nodes, materials } = useGLTF('/sceneMoon.gltf')
  useFrame((state, delta) => (
    group.current.rotation.y += 0.0007
    ))
    useFrame((state, delta) => (
      group.current.rotation.x -= 0.0005
      ))
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.6}>
          <group position={[0, 0, 0]} scale={6.47}>
            <mesh geometry={nodes.pSphere1_lambert2_0.geometry} material={materials.lambert2} />
          </group>
        </group>
      </group>
    </group>
  )
}
export function Sun(props) {
  const group = useRef()
  const { nodes, materials} = useGLTF('/sceneSun.gltf')
  useFrame((state, delta) => (
    group.current.rotation.y -= 0.0002
    ))
    useFrame((state, delta) => (
      group.current.rotation.x += 0.0003
      ))
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
          <group name="354182bbcaf14773b2e3a50f808276bffbx" rotation={[Math.PI / 2, 0, 0]} scale={0.2}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sphere001" position={[-0.78, 0, -0.78]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="Sphere001_01_-_Default_0" geometry={nodes['Sphere001_01_-_Default_0'].geometry} material={materials['01_-_Default']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
function ModelEarth(props) {
  
  const group=useRef()
  const { nodes, materials } = useGLTF('/sceneEarth.gltf')
  useFrame((state, delta) => (
    group.current.rotation.y -= 0.0004
    ))
    useFrame((state, delta) => (
      group.current.rotation.x -= 0.0004
      ))
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.009}>
          <group position={[16.94, 18.25, -24.02]} scale={100}>
            <mesh geometry={nodes.Globo_Sphere003_Green_0.geometry} material={materials.Green} />
            <mesh geometry={nodes.Globo_Sphere003_White_0.geometry} material={materials.White} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={312.14}>
            <mesh geometry={nodes.Sphere_Blue_0.geometry} material={materials.Blue} />
          </group>
          <group position={[62.58, 172.94, 256.59]} rotation={[-0.46, 0.23, -0.07]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder001_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder001_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-81.04, 188.09, 243.02]} rotation={[-0.53, -0.27, 0.16]} scale={[10.45, 10.45, 20.25]}>
            <mesh geometry={nodes.Cylinder003_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder003_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-18.73, 253.33, 187.87]} rotation={[-0.88, 0.04, 0.08]} scale={[7.91, 7.91, 15.34]}>
            <mesh geometry={nodes.Cylinder004_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder004_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[78.95, 212.4, 222.5]} rotation={[-0.65, 0.17, 0.06]} scale={[7.91, 7.91, 15.34]}>
            <mesh geometry={nodes.Cylinder005_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder005_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-3.58, 204.85, 240.42]} rotation={[-0.74, 0.07, 0.06]} scale={[7.91, 7.91, 15.34]}>
            <mesh geometry={nodes.Cylinder006_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder006_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-100.37, 235.28, 187.66]} rotation={[-0.98, -0.43, -0.02]} scale={[7.6, 7.6, 14.73]}>
            <mesh geometry={nodes.Cylinder007_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder007_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[16.79, 162.75, 270.74]} rotation={[-0.4, 0.07, 2.57]} scale={[10.45, 10.45, 20.25]}>
            <mesh geometry={nodes.Cylinder008_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder008_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[92.57, 3.73, 301.7]} rotation={[0.02, 0.36, -1.46]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder009_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder009_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-56.3, 136.07, 280.46]} rotation={[-0.47, -0.21, 0.08]} scale={[7.91, 7.91, 15.34]}>
            <mesh geometry={nodes.Cylinder010_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder010_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[144.11, -109.22, 263.06]} rotation={[0.32, 0.3, -0.93]} scale={[10.45, 10.45, 20.25]}>
            <mesh geometry={nodes.Cylinder012_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder012_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[176.46, 244.03, -91.97]} rotation={[-1.9, 0.59, 0.56]} scale={[9.3, 9.3, 18.03]}>
            <mesh geometry={nodes.Cylinder013_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder013_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[56.49, 97.89, 291.55]} rotation={[-0.26, 0.08, -2.4]} scale={[7, 7, 0.74]}>
            <mesh geometry={nodes.Cylinder014_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder014_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[305.74, 73.86, -51.3]} rotation={[-2.12, 1.14, 0.77]} scale={[9.3, 9.3, 18.03]}>
            <mesh geometry={nodes.Cylinder015_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder015_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[231.04, 84.1, -198.63]} rotation={[-2.65, 0.75, 1.24]} scale={[9.3, 9.3, 18.03]}>
            <mesh geometry={nodes.Cylinder016_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder016_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[207.45, 45.25, -233.63]} rotation={[-3.09, 0.74, 1.63]} scale={[8.21, 8.21, 15.91]}>
            <mesh geometry={nodes.Cylinder017_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder017_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[269.73, -7.62, -169.95]} rotation={[2.96, 1.05, 2.51]} scale={[9.3, 9.3, 18.03]}>
            <mesh geometry={nodes.Cylinder018_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder018_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[236.74, -99.72, -182.83]} rotation={[2.74, 0.84, -2.91]} scale={[10.45, 10.45, 20.25]}>
            <mesh geometry={nodes.Cylinder019_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder019_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[218.85, -39.47, -224.89]} rotation={[3.07, 0.54, 2.94]} scale={[8.26, 8.26, 16]}>
            <mesh geometry={nodes.Cylinder020_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder020_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[315.01, 38.91, 10.11]} rotation={[-1.98, 1.49, -0.03]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder021_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder021_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[223.03, 216.78, -70.85]} rotation={[-1.45, 0.91, -0.54]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder022_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder022_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[86.23, 252.93, -167.37]} rotation={[-2.17, 0.35, 0.88]} scale={[9.3, 9.3, 18.03]}>
            <mesh geometry={nodes.Cylinder023_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder023_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-6.92, 210.39, -235.49]} rotation={[-2.39, 0.02, 0.92]} scale={[8.07, 8.07, 15.64]}>
            <mesh geometry={nodes.Cylinder024_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder024_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-102.43, 210.17, -216.55]} rotation={[-2.35, -0.48, 0.96]} scale={[9.3, 9.3, 18.03]}>
            <mesh geometry={nodes.Cylinder025_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder025_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-164.17, 147.4, -227.2]} rotation={[-2.54, -0.42, 0.89]} scale={[8.39, 8.39, 16.26]}>
            <mesh geometry={nodes.Cylinder026_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder026_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-216.02, -115.74, -200.54]} rotation={[2.82, -0.81, -2.92]} scale={[10.45, 10.45, 20.25]}>
            <mesh geometry={nodes.Cylinder027_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder027_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-277.84, -96.87, -114.3]} rotation={[2.39, -0.99, -0.64]} scale={[9.2, 9.2, 17.84]}>
            <mesh geometry={nodes.Cylinder028_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder028_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[190.2, -124.92, 221.65]} rotation={[0.45, 0.56, 0.87]} scale={[9.14, 9.14, 17.71]}>
            <mesh geometry={nodes.Cylinder030_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder030_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[215.41, -37.19, 228.09]} rotation={[0.14, 0.68, 1.06]} scale={[9.14, 9.14, 17.71]}>
            <mesh geometry={nodes.Cylinder031_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder031_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-182.83, 207.68, -153.28]} rotation={[-2.29, -0.51, 0.94]} scale={[8.07, 8.07, 15.64]}>
            <mesh geometry={nodes.Cylinder032_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder032_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[273.75, -72.98, -138.93]} rotation={[2.45, 1.1, 1.82]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder033_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder033_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[289.12, -13.27, -126.68]} rotation={[2.84, 1.05, 1.47]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder034_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder034_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[237.86, -49.13, -201.98]} rotation={[2.82, 0.73, -2.1]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder035_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder035_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[188.99, 2.05, -253.5]} rotation={[-3.13, 0.51, -2.29]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder036_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder036_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[203.91, -78.08, -226.37]} rotation={[2.76, 0.67, -2.07]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder037_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder037_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[143.74, -86.95, -265.88]} rotation={[2.84, 0.49, -2.12]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder038_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder038_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-3.81, 108.2, -298.19]} rotation={[-2.86, 0.12, -2.3]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder039_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder039_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-51.73, 112.74, -291.6]} rotation={[-3.03, -0.18, -2.31]} scale={[6.59, 6.59, 0.7]}>
            <mesh geometry={nodes.Cylinder040_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder040_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-160.45, 79.97, -261.19]} rotation={[-3.09, -0.68, 2.66]} scale={[4.93, 4.93, 0.52]}>
            <mesh geometry={nodes.Cylinder041_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder041_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-188.78, -0.28, -253.74]} rotation={[-2.97, -0.56, -2.32]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder042_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder042_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-146.42, 2.51, -281.64]} rotation={[3.1, -0.21, -0.34]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder043_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder043_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-258.46, -79.36, -164.09]} rotation={[2.71, -1, -0.59]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder044_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder044_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-285.37, -69.86, -117.52]} rotation={[2.59, -1.09, -1.83]} scale={[4.76, 4.76, 0.5]}>
            <mesh geometry={nodes.Cylinder045_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder045_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[132.98, 213.67, -195.62]} rotation={[-2.51, 0.38, -2.39]} scale={[7.08, 7.08, 0.75]}>
            <mesh geometry={nodes.Cylinder046_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder046_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[77.98, 179.98, -246.8]} rotation={[-2.56, 0.49, -0.57]} scale={[6.28, 6.28, 0.66]}>
            <mesh geometry={nodes.Cylinder047_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder047_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-20.74, 158.01, -272.84]} rotation={[-2.3, -0.02, -1.61]} scale={15.36}>
            <mesh geometry={nodes.Cylinder048_Grey_0.geometry} material={materials.Grey} />
            <mesh geometry={nodes.Cylinder048_White_0.geometry} material={materials.White} />
          </group>
          <group position={[215.71, 212.14, -90.89]} rotation={[-2.41, 0.58, -1.55]} scale={10.57}>
            <mesh geometry={nodes.Cylinder049_Grey_0.geometry} material={materials.Grey} />
            <mesh geometry={nodes.Cylinder049_White_0.geometry} material={materials.White} />
          </group>
          <group position={[250.1, 34.71, -190.64]} rotation={[-2.8, 0.9, -1.28]} scale={10.57}>
            <mesh geometry={nodes.Cylinder050_Grey_0.geometry} material={materials.Grey} />
            <mesh geometry={nodes.Cylinder050_White_0.geometry} material={materials.White} />
          </group>
          <group position={[206.72, 4.35, -238.9]} rotation={[3.04, 0.71, -0.91]} scale={[8.26, 8.26, 16]}>
            <mesh geometry={nodes.Cylinder051_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder051_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[157.47, 32.33, -269.99]} rotation={[-3.07, 0.5, -2.33]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder052_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder052_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[103.09, 139.61, -262.72]} rotation={[-2.66, 0.35, 1.37]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder053_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder053_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-66.04, 252.47, -176.43]} rotation={[-2.22, -0.26, 1.35]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder054_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder054_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[-157.17, 257.89, -93.61]} rotation={[-2.14, -0.76, 3.11]} scale={[7.34, 7.34, 0.77]}>
            <mesh geometry={nodes.Cylinder055_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder055_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[245.2, 8.47, -199.91]} rotation={[-3.11, 0.99, 1.57]} scale={[7.08, 7.08, 13.72]}>
            <mesh geometry={nodes.Cylinder056_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder056_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[224.74, -82.34, 208.18]} rotation={[0.54, 0.83, -2.22]} scale={[7.08, 7.08, 13.72]}>
            <mesh geometry={nodes.Cylinder057_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder057_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[162.44, -53.59, 265.46]} rotation={[0.15, 0.51, -1.99]} scale={[7.08, 7.08, 13.72]}>
            <mesh geometry={nodes.Cylinder058_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder058_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[139.47, -157.3, 239.74]} rotation={[0.64, 0.63, -2.23]} scale={[7.08, 7.08, 13.72]}>
            <mesh geometry={nodes.Cylinder059_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder059_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[102.73, -57.04, 293.79]} rotation={[0.22, 0.44, -2.04]} scale={[7.08, 7.08, 13.72]}>
            <mesh geometry={nodes.Cylinder060_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder060_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[171.36, -1.08, 266.24]} rotation={[-0.04, 0.24, -0.16]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder061_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder061_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[94.97, -179.7, 245.8]} rotation={[0.81, 0.34, -0.42]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder062_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder062_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[137.96, 15.75, 282.74]} rotation={[-0.01, 0.14, 1.37]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder063_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder063_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder063_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-8.63, 74.71, 306.82]} rotation={[-0.3, -0.63, -2.71]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder064_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder064_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder064_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-5.53, 77.27, 306]} rotation={[-0.45, -0.11, 0.17]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder065_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder065_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder065_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-33.78, 177.92, 258.94]} rotation={[-0.6, -0.14, 0.15]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder066_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder066_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder066_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[248.75, -59.23, 186.44]} rotation={[0.4, 0.95, -0.34]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder067_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder067_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder067_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[291.68, 36.17, -119.86]} rotation={[-2.63, 1.08, 2.66]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder068_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder068_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder068_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[113.58, 92.89, -278.49]} rotation={[-2.78, 0.19, 2.76]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder069_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder069_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder069_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-28.99, 94.37, -301.28]} rotation={[-2.83, -0.35, 2.75]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder070_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder070_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder070_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-122.43, 84.81, -279.87]} rotation={[-2.74, -0.45, 1.47]} scale={[4.71, 4.71, 0.5]}>
            <mesh geometry={nodes.Cylinder071_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder071_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder071_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-291.2, -21.72, -118.44]} rotation={[2.73, -1.07, 3.03]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder072_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder072_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder072_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-122, 284.77, -63.14]} rotation={[-1.65, -0.31, -1.72]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder073_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder073_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder073_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-89.83, 286.3, -100.94]} rotation={[-1.9, -0.34, 1.11]} scale={[8.07, 8.07, 15.64]}>
            <mesh geometry={nodes.Cylinder074_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder074_Green2_0.geometry} material={materials.Green2} />
            <mesh geometry={nodes.Cylinder074_White_0.geometry} material={materials.White} />
          </group>
          <group position={[-15.88, 286.12, -135.64]} rotation={[-2, 0.01, 1.09]} scale={[8.07, 8.07, 15.64]}>
            <mesh geometry={nodes.Cylinder075_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder075_Green2_0.geometry} material={materials.Green2} />
            <mesh geometry={nodes.Cylinder075_White_0.geometry} material={materials.White} />
          </group>
          <group position={[69.29, 264.68, 161.41]} rotation={[-1.13, 0.26, 1.07]} scale={[8.07, 8.07, 15.64]}>
            <mesh geometry={nodes.Cylinder076_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder076_Green2_0.geometry} material={materials.Green2} />
            <mesh geometry={nodes.Cylinder076_White_0.geometry} material={materials.White} />
          </group>
          <group position={[-76.72, 278.44, 130.03]} rotation={[-1.1, -0.21, 1.07]} scale={[9.27, 9.27, 17.97]}>
            <mesh geometry={nodes.Cylinder002_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder002_Green2_0.geometry} material={materials.Green2} />
            <mesh geometry={nodes.Cylinder002_White_0.geometry} material={materials.White} />
          </group>
          <group position={[265.79, 85.73, -144.4]} rotation={[-2.57, 0.77, 0.46]} scale={[6.17, 6.17, 0.65]}>
            <mesh geometry={nodes.Cylinder077_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder077_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder077_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-258.22, -152.72, -99.11]} rotation={[2.04, -0.94, 2.74]} scale={[9.2, 9.2, 17.84]}>
            <mesh geometry={nodes.Cylinder078_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder078_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-246.61, -122.07, -158.93]} rotation={[2.26, -0.79, -0.3]} scale={[8.07, 8.07, 15.64]}>
            <mesh geometry={nodes.Cylinder079_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder079_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[274.03, 103.63, -114.34]} rotation={[-2.51, 0.81, -1.83]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder080_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder080_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder080_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[260.44, 177.56, -19.59]} rotation={[-1.6, 0.86, 1.74]} scale={[8.26, 8.26, 16]}>
            <mesh geometry={nodes.Cylinder081_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder081_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[52.73, 210.16, -228.33]} rotation={[-2.44, 0.15, 2.19]} scale={[8.26, 8.26, 16]}>
            <mesh geometry={nodes.Cylinder082_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder082_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-10.07, 253.26, -188.45]} rotation={[-2.25, 0.13, 2.76]} scale={[8.26, 8.26, 16]}>
            <mesh geometry={nodes.Cylinder083_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder083_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-133.26, 247.25, -144.13]} rotation={[-2.1, -0.38, -0.41]} scale={[8.26, 8.26, 16]}>
            <mesh geometry={nodes.Cylinder084_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder084_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[148.49, 88.56, -264.9]} rotation={[-2.95, 0.55, -0.37]} scale={[6.28, 6.28, 0.66]}>
            <mesh geometry={nodes.Cylinder085_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder085_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[217.55, 182.32, -137.87]} rotation={[-2.14, 0.58, -0.83]} scale={[6.28, 6.28, 0.66]}>
            <mesh geometry={nodes.Cylinder086_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder086_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[195.83, 170.44, -180.78]} rotation={[-2.59, 0.67, -0.56]} scale={[6.28, 6.28, 0.66]}>
            <mesh geometry={nodes.Cylinder087_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder087_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <group position={[152.39, 174.17, -217.46]} rotation={[-2.61, 0.42, 2.24]} scale={[8.26, 8.26, 16]}>
            <mesh geometry={nodes.Cylinder088_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder088_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[82.65, 37.95, 301.99]} rotation={[-0.13, 0.26, -1.92]} scale={[7.08, 7.08, 13.72]}>
            <mesh geometry={nodes.Cylinder089_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder089_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-116.92, 111.48, -274.79]} rotation={[-2.76, -0.44, 1.42]} scale={[8.39, 8.39, 16.26]}>
            <mesh geometry={nodes.Cylinder090_Brown_0.geometry} material={materials.Brown} />
            <mesh geometry={nodes.Cylinder090_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-170.52, 112.33, -240.24]} rotation={[-2.89, -0.59, 2.26]} scale={[6.35, 6.35, 0.67]}>
            <mesh geometry={nodes.Cylinder091_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder091_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder091_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[131.95, -16.15, 285.75]} rotation={[0.08, 0.48, 1.35]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder011_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder011_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder011_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-111.9, 194.73, 221.5]} rotation={[-0.83, -0.22, 2.76]} scale={[7.97, 7.97, 0.84]}>
            <mesh geometry={nodes.Cylinder029_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder029_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder029_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-54.77, 216.99, 225.27]} rotation={[-0.82, -0.12, 1.68]} scale={[6.28, 6.28, 0.66]}>
            <mesh geometry={nodes.Cylinder092_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder092_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder092_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-125.81, 262.5, 124.05]} rotation={[-1.35, -0.52, 3.12]} scale={[6.28, 6.28, 0.66]}>
            <mesh geometry={nodes.Cylinder093_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder093_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder093_Green2_0.geometry} material={materials.Green2} />
          </group>
          <group position={[-104.79, 172.24, -242.03]} rotation={[-2.74, -0.45, 1.47]} scale={[4.71, 4.71, 0.5]}>
            <mesh geometry={nodes.Cylinder094_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Cylinder094_Yellow_0.geometry} material={materials.Yellow} />
            <mesh geometry={nodes.Cylinder094_Green2_0.geometry} material={materials.Green2} />
          </group>
        </group>
      </group>
    </group>
  )
}
export function Spring(props) {
  const group=useRef()
  const { nodes, materials } = useGLTF('/sceneSpring.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <group position={[83.35, 0.53, 4.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Tent_Spring_Tent_Spring_0.geometry} material={materials.Tent_Spring} />
          </group>
          <group position={[6.27, 0.01, 6.92]} rotation={[-Math.PI / 2, 0, 2.71]}>
            <group position={[-9.31, 0, 0.89]}>
              <mesh geometry={nodes.Gas_Stove_Gas_Stove_0.geometry} material={materials.Gas_Stove} />
            </group>
          </group>
          <group position={[34.66, 1.84, 7.82]} rotation={[Math.PI / 2, 0.44, -Math.PI / 2]}>
            <group position={[0, 1.58, 0]}>
              <mesh geometry={nodes.Stool_Stool_0.geometry} material={materials.Stool} />
            </group>
          </group>
          <group position={[61.17, 0, 4.43]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Ground_Plane_Ground_Spring_0.geometry} material={materials.Ground_Spring} />
          </group>
          <group position={[6.25, 11.56, 6.9]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Pot_Pot_0.geometry} material={materials.material} />
          </group>
          <group position={[31.39, -0.11, -21.38]} rotation={[-Math.PI / 2, 0, -1.4]}>
            <mesh geometry={nodes.Pack_Spring_Pack_Spring_0.geometry} material={materials.Pack_Spring} />
          </group>
          <group position={[8.56, 0, 19.65]} rotation={[-Math.PI / 2, 0, -0.44]} scale={0.83}>
            <mesh geometry={nodes.Food_Pouch_Food_Pouch_0.geometry} material={materials.Food_Pouch} />
          </group>
          <group position={[25.92, 11.22, 22.11]} rotation={[-1.67, 0.87, -3.01]}>
            <group position={[-1.53, 0, -0.49]}>
              <mesh geometry={nodes.Spoon_Spoon_0.geometry} material={materials.Spoon} />
            </group>
          </group>
          <group position={[18.13, 1.19, -22.17]} rotation={[-3.11, 0.69, 2.95]}>
            <group position={[84.27, 0.45, -12.09]}>
              <mesh geometry={nodes.Trekking_Pole_Trekking_Pole_0.geometry} material={materials.Trekking_Pole} />
            </group>
          </group>
          <group position={[17.54, 1.19, -26.71]} rotation={[-3.12, 0.52, 2.95]}>
            <group position={[84.27, 0.45, -12.09]}>
              <mesh geometry={nodes.Trekking_Pole002_Trekking_Pole_0.geometry} material={materials.Trekking_Pole} />
            </group>
          </group>
          <group position={[6.86, 30.51, 8.75]} rotation={[0, -1.57, 0]}>
            <group position={[33.27, -12.91, 6.86]}>
              <mesh geometry={nodes.Steam_Steam_0.geometry} material={materials.Steam} />
            </group>
          </group>
          <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.Camper_Spring} skeleton={nodes.Object_7.skeleton} />
        </group>
      </group>
    </group>
  )
}






export default function Planet(props) {
  
  const data=new Date();
  const month=data.getMonth()
  const day=data.getDate()
  if(month+1===3&&(day>19&&day<23)){
    return(
      <div className='boardPlanet'>
      <div>
       <Canvas camera={{fov:130, position:[-4.5,5,1.7]}} style={{cursor:'pointer'}}>
         <Suspense fallback={null}>
             <ambientLight intensity={0.5} className='ambientLightPlanet'/>
                 <Spring/>
                 <OrbitControls enableZoom={false}/>
         </Suspense>
       </Canvas>
      </div>
     </div>
     )
    
  }else if((data.getHours()<6&&data.getHours()>0)||(data.getHours()>=21)){
      return (
       <div className='boardPlanet'>
        <div>
          <Canvas camera={{fov:50, position:[0,0,10]}} style={{cursor:'pointer'}}>
                <ambientLight intensity={0.5}/>
                <OrbitControls enableZoom={false}/>
                    <ModelMoon />
          </Canvas>
        </div>
       </div>
     )
  }else if(data.getHours()<7&&data.getHours()>9){
    return(
            <div className='boardPlanet'>
       <div>
        <Canvas camera={{fov:45, position:[0,0,10]}} style={{cursor:'pointer'}}>
          <Suspense fallback={null}>
              <ambientLight intensity={0.5} className='ambientLightPlanet'/>
                  <ModelEarth/>
                <OrbitControls enableZoom={false}/> 
          </Suspense>
        </Canvas>
       </div>
      </div>
    )
  }else{
    return(
      <div className='boardPlanet'>
<div>
 <Canvas camera={{fov:45, position:[0,0,10]}} style={{cursor:'pointer'}}>
   <Suspense fallback={null} >
       <ambientLight intensity={0} className='ambientLightPlanet'/>
           <Sun />
         <OrbitControls enablePan={true}  enableRotate={true} enableZoom={false}/> 
   </Suspense>
 </Canvas>
</div>
</div>)

  }
}



