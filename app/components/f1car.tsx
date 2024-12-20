'use client'
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import Link from 'next/link';
import { motion } from 'framer-motion';

function F1Car() {
    const { scene } = useGLTF("/models/3d_mclaren.glb"); // Path to your GLB model
    const modelRef = useRef(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
        >
            <div className='absolute left-1/2 z-30 top-1/3 -translate-y-48 translate-x-28 w-2/5 h-80'>
                <Canvas camera={{ position: [3, 1, 3], fov: 40 }}>
                    <Suspense>
                        <Environment preset="sunset" />
                        <primitive
                            ref={modelRef}
                            object={scene}
                            scale={0.6}
                            position={[0, 0, 0]}
                        />
                        <OrbitControls
                            autoRotate
                            autoRotateSpeed={2}
                            maxPolarAngle={1.2 * Math.PI / 2}
                            enableZoom={false}    // Disable zoom
                            enablePan={false}     // Disable pan
                        />
                    </Suspense>
                </Canvas>
                <Link href="/hobbies" className="relative text-2xl font-semibold text-mclaren-orange text-shadow-outline -top-16 left-72 hover:drop-shadow-md-strong">
                    Hobbies
                </Link>
            </div>
        </motion.div>
    );
}

export default F1Car;