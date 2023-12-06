import * as THREE from "three";
import GLTFLoader from 'three-gltf-loader';

  // Create a renderer and set its size
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create a scene and add a camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;
  scene.add(camera);

  // Create a 3D model loader
  const loader = new GLTFLoader();

  // Load the coin model from the assets folder
  loader.load("assets/coin.gltf", (gltf) => {
    const coin = gltf.scene;
    scene.add(coin);

    // Animate the coin
    function animate() {
      requestAnimationFrame(animate);

      coin.rotation.x += 0.01;
      coin.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  });

