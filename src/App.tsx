import { Gltf, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const BasicCube = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial />
  </mesh>
);

const Logo = () => (
  <Gltf
    scale={15}
    position={[1, 0, 0]}
    src="/logo.glb"
    receiveShadow
    castShadow
  />
);

function App() {
  return (
    <>
      <div
        style={{
          height: "50vh",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50vw",
          }}
        >
          <Canvas
            style={{
              background: "#252525",
            }}
            shadows
          >
            <OrbitControls rotateSpeed={2} enableZoom={false} />

            <ambientLight intensity={0.35} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.75}
              penumbra={1}
              intensity={1.5}
              castShadow
              shadow-bias={-0.0001}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-near={0.1}
              shadow-camera-far={50}
            />

            <mesh>
              <Gltf src="/pizzaBox.glb" receiveShadow castShadow />
              <Gltf src="/pizza.glb" receiveShadow castShadow />
            </mesh>
          </Canvas>
        </div>
        <div
          style={{
            width: "50vw",
          }}
        >
          <Canvas
            style={{
              background: "#272727",
            }}
            shadows
          >
            <BasicCube />
            <Logo />

            <gridHelper />
            <axesHelper />

            <directionalLight color="red" position={[5, 0, 0]} />
            <ambientLight intensity={0.4} />

            <OrbitControls rotateSpeed={2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          height: "50vh",
        }}
      >
        <Canvas
          style={{
            background: "#292929",
          }}
          shadows
        >
          <Stage intensity={0.5} shadows="contact" environment="city">
            <Gltf src="/sedanSports.glb" receiveShadow castShadow />
          </Stage>

          <OrbitControls autoRotate rotateSpeed={2} position={[0, 10, 5]} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
