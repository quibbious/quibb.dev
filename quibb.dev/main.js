import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';


const scene = new THREE.Scene()
const loader = new GLTFLoader()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const composer = new EffectComposer(renderer);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;
const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
controls.target.set(0, 0, 0); 
controls.autoRotate = true;

const afterimagePass = new AfterimagePass(0.9);
composer.addPass(afterimagePass);


const renderPixelatedPass = new RenderPixelatedPass(0.5, scene, camera);


composer.addPass(renderPixelatedPass);


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight(0xFF00AA, 1)
directionalLight.position.y = 10
directionalLight.position.x = 0
directionalLight.position.z = -20
//const LightHelper = new THREE.DirectionalLightHelper(directionalLight)
//scene.add(LightHelper)

scene.add(directionalLight)


loader.load("/assets/source/bmw_m4_modified_widebody_knitro_builds.glb", function (glb) {

    scene.add(glb.scene)
    
})



camera.position.set(-0.5, 8, 25);



function animate() {
    composer.render();

    controls.update(0.0007)
    
    console.log(directionalLight.position.y)

    


}
renderer.setAnimationLoop(animate);