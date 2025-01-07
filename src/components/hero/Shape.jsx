import { MeshDistortMaterial, Sphere } from "@react-three/drei"

const Shape = () => {
    return (
        <>
            <Sphere args={[1, 50, 200]} scale={2.0}>
                <MeshDistortMaterial
                    color="#383838"
                    attach="material"
                    distort={0.5}
                    speed={2} />
            </Sphere>
            <ambientLight intensity={2} />
            <directionalLight position={[1, 2, 0]} />
        </>
    );
};

export default Shape