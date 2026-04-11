import * as THREE from 'three';
const scene = new THREE.Scene()
const loader = new GLTFLoader()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

//const controls = new OrbitControls(camera, renderer.domElement);
const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);



//const renderPixelatedPass = new RenderPixelatedPass(0.5, scene, camera);


//composer.addPass(renderPixelatedPass);


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//                                                    FF00AA
const directionalLight = new THREE.DirectionalLight(0xFF00AA, 1)
directionalLight.position.y = 10
directionalLight.position.x = 0
directionalLight.position.z = -20
//const LightHelper = new THREE.DirectionalLightHelper(directionalLight)
//scene.add(LightHelper)

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshPhongMaterial({color: 0xDDDDDD})
const cube = new THREE.Mesh(geometry, material)

scene.add(directionalLight)
scene.add(cube)



camera.position.set(-0.5, 8, 25);



function animate() {
    renderer.render()
    
    cube.rotation.x = Math.sin(45 * 1000 / 60)
}
renderer.setAnimationLoop(animate);
