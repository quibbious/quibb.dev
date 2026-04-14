import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const asciiEffect = new THREE.AsciiEffect(renderer, "-=_+|/{}[]\,.!@#$%^&*()")
// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 10, -20);
scene.add(directionalLight);

// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0xdddddd });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera position
camera.position.set(-0.5, 8, 25);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation clock
const clock = new THREE.Clock();

function animate() {
    const t = clock.getElapsedTime();

    // Smooth animation
    cube.rotation.x = Math.sin(t);
    cube.rotation.y = t;

    // controls.update(); 
    asciiEffect.render(scene, camera);
}

renderer.setAnimationLoop(animate);
