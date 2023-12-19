import { Cemjsx, Static, Fn, front } from "cemjs-all"
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function () {

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(4, 5, 11);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 5;
  controls.maxDistance = 20;
  controls.minPolarAngle = 0.5;
  controls.maxPolarAngle = 1.5;
  controls.autoRotate = false;
  controls.target = new THREE.Vector3(0, 1, 0);
  controls.update();

  const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
  groundGeometry.rotateX(-Math.PI / 2);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x555555,
    side: THREE.DoubleSide
  });
  const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  groundMesh.castShadow = false;
  groundMesh.receiveShadow = true;
  scene.add(groundMesh);

  const spotLight = new THREE.SpotLight(0xffffff, 3, 100, 0.22, 1);
  spotLight.position.set(0, 25, 0);
  spotLight.castShadow = true;
  spotLight.shadow.bias = -0.0001;
  scene.add(spotLight);

  const loader = new GLTFLoader().setPath('assets/3d/');
  loader.load('coin.gltf', (gltf) => {
    const mesh = gltf.scene;

    // mesh.traverse((child) => {
    //   if (child.isMesh) {
    //     child.castShadow = true;
    //     child.receiveShadow = true;
    //   }
    // });

    mesh.position.set(0, 1.05, -1);
    scene.add(mesh);

    document.getElementById('progress-container').style.display = 'none';
  }, (xhr) => {
    document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
  },);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  return (
    <div>
      <div id="heading">
        <h1>THE MILLENNIUM FALCON</h1>
        <div class="border"></div>
      </div>
      <div id="progress-container">
        <div id="progress">LOADING 0/100</div>
      </div>
    </div>
  )
  

} 