import { Gltf, OrbitControls } from "@react-three/drei";
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
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas
        style={{
          background: "#292929",
        }}
      >
        <BasicCube />
        <Logo />

        <OrbitControls rotateSpeed={2} />
        <gridHelper />
        <axesHelper />
        <directionalLight color="red" position={[5, 0, 0]} />
        <ambientLight intensity={0.4} />
      </Canvas>
    </div>
  );
}

export default App;
