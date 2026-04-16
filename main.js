import * as THREE from 'three';

import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

let camera, controls, scene, renderer, effect;

let cube, plane;
const start = Date.now();

camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.y = 150;
camera.position.z = 500;

scene = new THREE.Scene();
scene.background = new THREE.Color( 0, 0, 0 );

const pointLight1 = new THREE.PointLight( 0xffffff, 3, 0, 0 );
pointLight1.position.set( 500, 500, 500 );
scene.add( pointLight1 );

const pointLight2 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
pointLight2.position.set( - 500, - 500, - 500 );
scene.add( pointLight2 );

cube = new THREE.Mesh( new THREE.BoxGeometry(300,50,300), new THREE.MeshPhongMaterial( { flatShading: true } ) );
scene.add( cube );

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

var big_charset = ' !@#$%^&*()_+-=~`|[]{};"<>?\\'
var numbers = ' 1234567890.'
var small_charset = " -=_~|\\/."
var binary_charset = " 01"

effect = new AsciiEffect(renderer, " ._-+*|\\quibradnjcobper", { invert: true } );
effect.setSize( window.innerWidth, window.innerHeight );
effect.domElement.style.color = "yellow";
effect.domElement.style.backgroundColor = "skyblue";

document.body.appendChild( effect.domElement );

controls = new TrackballControls( camera, effect.domElement );


window.addEventListener( 'resize', onWindowResize );
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    effect.setSize( window.innerWidth, window.innerHeight );
}
var i = 0
function animate() {



    const timer = Date.now() - start;

    cube.rotation.x = timer * 0.0003;
    cube.rotation.z = timer * 0.0002;

    cube.position.x = 100 * Math.cos(timer * 0.0004);
    cube.position.y = 100 * Math.cos(timer * 0.0004);

    controls.update();

  
    effect.render(scene, camera);
}
renderer.setAnimationLoop(animate)