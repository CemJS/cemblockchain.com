import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor("#ff000000");
// renderer.setPixelRatio(window.devicePixelRatio);

// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 5);

const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 5;
controls.minPolarAngle = 1.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.update();


const spotLight = new THREE.SpotLight(0xffffff, 3, 100, 0.22, 1);
spotLight.position.set(0, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

const loader = new GLTFLoader().setPath('assets/3d/');
loader.load('coin.gltf', (gltf) => {
    const mesh = gltf.scene;

    mesh.position.set(0, 0, 0);
    scene.add(mesh);
    let rotationAngle = 0;
    let rotationSpeed = -0.005;
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        mesh.rotation.y += rotationSpeed;
        rotationAngle = (rotationAngle + rotationSpeed) % 360;
        renderer.render(scene, camera);
    }
    animate();

    document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
    document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
},);
