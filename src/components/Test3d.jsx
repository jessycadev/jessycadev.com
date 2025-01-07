
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Test3d = () => {
    return (
        <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="Test3d">
            <h1></h1>
            <Canvas>
                <mesh>
                    <Sphere args={[1, 100, 200]} scale={2.4}>
                    <MeshDistortMaterial 
                        color="red" 
                        attach="material" 
                        distort={0.5} 
                        speed={2}/>
                    </Sphere>
                    {/* <meshStandardMaterial color="red"/> */}

                    <ambientLight intensity={2} />
                    <directionalLight position={[1, 2, 0]} />
                    {/* <OrbitControls enableZoom={false}/> */}
                </mesh>
            </Canvas>
        </section>
    )
}

export default Test3d