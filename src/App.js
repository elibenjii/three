import React, { useRef, useState, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, PositionalAudio } from '@react-three/drei'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Triangle = forwardRef(({ position, ix, iy }, ref) => {
  // This reference will give us direct access to the mesh




  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)




  // useFrame((state, delta) => {

  //   if (mesh.current.position.y > -10) {
  //     mesh.current.position.y -= ix / 10
  //   } else {
  //     mesh.current.position.y += ix / 10
  //   }

  // })
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      position={position}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <tetrahedronGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
})
const rows = 26


function App() {
  const mesh = useRef({})
  const [goUp, setGoUp] = useState(false)

  const goUpAction = bool => setGoUp(bool)
  useFrame((state, delta) => {
    console.log('mesh', mesh?.current)
    // if (mesh.current.position.z > 1) {
    //   goUpAction(false)
    // }
    // if (mesh.current.position.z < -1) {
    //   goUpAction(true)
    // }
    // if (goUp) {
    //   mesh.current.position.z += 0.01
    // } else {
    //   mesh.current.position.z -= 0.01
    // }
  })

  return (
    <>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <ambientLight />
      <pointLight position={[0, 10, 10]} />

      {/* <Triangle ix={1} iy={1} position={[0, 1, 0]} /> */}

      {
        new Array(rows).fill(0).map((x, ix) =>
          new Array(rows).fill(0).map((x, iy) => <Triangle ref={mesh.current[ix + 'i' + iy]} key={ix + 'e' + iy} ix={ix} iy={iy} position={[-rows / 2 + ix, -rows / 2 + iy, 0]} />)
        )
      }
    </>
  )
}
export default App;
