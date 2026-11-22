import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CharacterProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export const DeveloperCharacter: React.FC<CharacterProps> = ({ mouse }) => {
  const rootGroupRef = useRef<THREE.Group>(null);
  const headGroupRef = useRef<THREE.Group>(null);
  const leftEyePupilRef = useRef<THREE.Mesh>(null);
  const rightEyePupilRef = useRef<THREE.Mesh>(null);

  // Stylized character materials matching Moncy's 3D avatar exactly:
  // 1. Warm stylized clay/plastic skin tone
  const skinMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xdf8c63, // Distinctive Moncy peach skin
        roughness: 0.35,
        metalness: 0.05,
      }),
    []
  );

  // 2. White Baseball Cap / Snapback
  const capMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xf0f3f8,
        roughness: 0.3,
        metalness: 0.1,
      }),
    []
  );

  // 3. Dark Grey / Charcoal Oversized Sweatshirt
  const sweaterMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x22242b,
        roughness: 0.6,
        metalness: 0.1,
      }),
    []
  );

  // 4. Stylized Dark Hair
  const hairMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x18171c,
        roughness: 0.7,
      }),
    []
  );

  // 5. Stylized Eyebrows
  const browMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x16151a,
        roughness: 0.6,
      }),
    []
  );

  // 6. Eye Whites & Pupils
  const eyeWhiteMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xfcfdff,
        roughness: 0.2,
      }),
    []
  );

  const pupilMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x101015,
        roughness: 0.2,
      }),
    []
  );

  const teethMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
      }),
    []
  );

  // Natural idle head tracking and eye gaze tracking mouse
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Subtle breathing float for torso
    if (rootGroupRef.current) {
      rootGroupRef.current.position.y = -0.55 + Math.sin(time * 1.8) * 0.035;
      rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        rootGroupRef.current.rotation.y,
        mouse.current.x * 0.25,
        delta * 3.5
      );
    }

    // Moncy-style Head Tracking (follows cursor seamlessly)
    if (headGroupRef.current) {
      headGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        headGroupRef.current.rotation.y,
        mouse.current.x * 0.45,
        delta * 5
      );
      headGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        headGroupRef.current.rotation.x,
        -mouse.current.y * 0.35 + Math.sin(time * 2) * 0.02,
        delta * 5
      );
    }

    // Eye pupils follow mouse inside the sockets
    if (leftEyePupilRef.current && rightEyePupilRef.current) {
      const pupilX = mouse.current.x * 0.04;
      const pupilY = mouse.current.y * 0.03;
      leftEyePupilRef.current.position.x = -0.22 + pupilX;
      leftEyePupilRef.current.position.y = 0.08 + pupilY;

      rightEyePupilRef.current.position.x = 0.22 + pupilX;
      rightEyePupilRef.current.position.y = 0.08 + pupilY;
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, -0.55, 0]} scale={[1.15, 1.15, 1.15]}>
      {/* ================= TORSO & CHARCOAL SWEATSHIRT ================= */}
      <group position={[0, -0.4, 0]}>
        {/* Main curved rounded upper body */}
        <mesh material={sweaterMaterial} position={[0, 0, 0]} castShadow>
          <capsuleGeometry args={[0.7, 0.7, 24, 24]} />
        </mesh>

        {/* Shoulders rounding */}
        <mesh material={sweaterMaterial} position={[-0.6, 0.1, 0]}>
          <sphereGeometry args={[0.32, 24, 24]} />
        </mesh>
        <mesh material={sweaterMaterial} position={[0.6, 0.1, 0]}>
          <sphereGeometry args={[0.32, 24, 24]} />
        </mesh>

        {/* Neck Sweater Collar */}
        <mesh material={sweaterMaterial} position={[0, 0.46, 0]} rotation={[0.1, 0, 0]}>
          <torusGeometry args={[0.26, 0.09, 16, 32]} />
        </mesh>
      </group>

      {/* ================= HEAD & FACE GROUP ================= */}
      <group ref={headGroupRef} position={[0, 0.65, 0]}>
        {/* Neck */}
        <mesh material={skinMaterial} position={[0, -0.38, 0]}>
          <cylinderGeometry args={[0.24, 0.28, 0.35, 24]} />
        </mesh>

        {/* Main Stylized Head (Chubby rounded Moncy profile) */}
        <mesh material={skinMaterial} position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[0.62, 32, 32]} />
        </mesh>

        {/* Lower Chin / Jaw Plumpness */}
        <mesh material={skinMaterial} position={[0, -0.15, 0.12]}>
          <sphereGeometry args={[0.48, 24, 24]} />
        </mesh>

        {/* Cute Stylized Bulbous Nose */}
        <mesh material={skinMaterial} position={[0, -0.04, 0.65]}>
          <sphereGeometry args={[0.14, 24, 24]} />
        </mesh>

        {/* ================= DISTINCTIVE MONCY LARGE EARS ================= */}
        {/* Left Ear */}
        <group position={[-0.65, 0.02, 0]} rotation={[0, -0.25, -0.1]}>
          <mesh material={skinMaterial}>
            <torusGeometry args={[0.2, 0.08, 16, 32]} />
          </mesh>
          <mesh material={skinMaterial} position={[0, 0, -0.02]}>
            <circleGeometry args={[0.18, 24]} />
          </mesh>
        </group>

        {/* Right Ear */}
        <group position={[0.65, 0.02, 0]} rotation={[0, 0.25, 0.1]}>
          <mesh material={skinMaterial}>
            <torusGeometry args={[0.2, 0.08, 16, 32]} />
          </mesh>
          <mesh material={skinMaterial} position={[0, 0, -0.02]}>
            <circleGeometry args={[0.18, 24]} />
          </mesh>
        </group>

        {/* ================= EYES & EXPRESSIVE BROWS ================= */}
        {/* Left Eye Whites */}
        <mesh material={eyeWhiteMaterial} position={[-0.22, 0.08, 0.52]} rotation={[0, -0.2, 0]}>
          <sphereGeometry args={[0.13, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        </mesh>
        {/* Left Eye Pupil */}
        <mesh ref={leftEyePupilRef} material={pupilMaterial} position={[-0.22, 0.08, 0.64]}>
          <sphereGeometry args={[0.065, 16, 16]} />
        </mesh>
        {/* Left Eyebrow (Angular confident Moncy style) */}
        <mesh material={browMaterial} position={[-0.24, 0.26, 0.53]} rotation={[0, 0, 0.2]}>
          <boxGeometry args={[0.26, 0.07, 0.09]} />
        </mesh>

        {/* Right Eye Whites */}
        <mesh material={eyeWhiteMaterial} position={[0.22, 0.08, 0.52]} rotation={[0, 0.2, 0]}>
          <sphereGeometry args={[0.13, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        </mesh>
        {/* Right Eye Pupil */}
        <mesh ref={rightEyePupilRef} material={pupilMaterial} position={[0.22, 0.08, 0.64]}>
          <sphereGeometry args={[0.065, 16, 16]} />
        </mesh>
        {/* Right Eyebrow */}
        <mesh material={browMaterial} position={[0.24, 0.26, 0.53]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.26, 0.07, 0.09]} />
        </mesh>

        {/* ================= CHARISMATIC MONCY WIDE SMILE ================= */}
        <group position={[0, -0.25, 0.52]} rotation={[0.08, 0, 0]}>
          {/* Mouth Cavity */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.38, 0.14, 0.08]} />
            <meshBasicMaterial color={0x181820} />
          </mesh>
          {/* Top & Bottom Teeth Band */}
          <mesh material={teethMaterial} position={[0, 0, 0.025]}>
            <boxGeometry args={[0.36, 0.1, 0.06]} />
          </mesh>
        </group>

        {/* Hair line around the sides & back */}
        <mesh material={hairMaterial} position={[0, 0.1, -0.1]}>
          <sphereGeometry args={[0.64, 24, 24, 0, Math.PI * 2, Math.PI / 2.5, Math.PI / 2]} />
        </mesh>

        {/* ================= ICONIC WHITE CAP / SNAPBACK ================= */}
        <group position={[0, 0.32, 0]} rotation={[-0.05, 0, 0]}>
          {/* Cap Dome / Crown */}
          <mesh material={capMaterial} position={[0, 0.05, 0]}>
            <sphereGeometry args={[0.64, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          </mesh>

          {/* Cap Button on top */}
          <mesh material={capMaterial} position={[0, 0.7, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
          </mesh>

          {/* Cap Visor / Curved Front Brim */}
          <mesh
            material={capMaterial}
            position={[0, 0.08, 0.62]}
            rotation={[0.3, 0, 0]}
          >
            <cylinderGeometry args={[0.62, 0.65, 0.04, 32, 1, false, -Math.PI / 3, Math.PI / 1.5]} />
          </mesh>
        </group>
      </group>
    </group>
  );
};
