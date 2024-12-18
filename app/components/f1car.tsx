'use client'
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import Link from 'next/link';

function F1Car() {
  const { scene } = useGLTF("/models/3d_mclaren.glb"); // Path to your GLB model
  const modelRef = useRef(null);

  return (
    <div>
        <div className='absolute left-1/2 z-10 top-1/3 transform -translate-y-56 translate-x-28 w-2/5 h-80'>
            <Canvas camera={{ position: [3, 2, 3], fov: 40 }}>
            <Environment preset="sunset" />
            <primitive
                ref={modelRef}
                object={scene}
                scale={0.6} // Adjust size as necessary
                position={[0, 0, 0]} // Adjust position as necessary
                />
            <OrbitControls
                autoRotate
                autoRotateSpeed={2}
                enableDamping
                dampingFactor={0.1}
                maxPolarAngle={1.2 * Math.PI / 2}
                enableZoom={false}    // Disable zoom
                enablePan={false}     // Disable pan
                />
            </Canvas>
            <Link href="/hobbies">
                <p className="text-2xl text-mclaren-orange text-shadow-outline font-semibold -translate-y-16 translate-x-72 w-max">
                    Hobbies
                </p>
            </Link>
        </div>

    </div>
  );
}

export default F1Car;