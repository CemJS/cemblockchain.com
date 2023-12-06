import { Cemjsx, Static, Fn, front } from "cemjs-all";
import advantages from "@json/home/advantages";
import advantagesEN from "@json/home/en/advantagesEN";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function () {
  const canvas = document.querySelector(".webg1");
  const scene = new THREE.Scene();

  const loader = new GLTFLoader();

  loader.load("/assets/coin.gltf.", (gltf) => {
    scene.add(gltf.scene);

    // Create a renderer and attach it to the canvas
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Create a camera and set its position
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Animate the scene
    function animate() {
      requestAnimationFrame(animate);

      // Update the camera position
      camera.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    }

    animate();
    
  });

  let lang: any;

  if (front.Variable.stateLang) {
    lang = advantages;
  } else {
    lang = advantagesEN;
  }
  console.log("loader", loader);

  return (
    <div class="advantages_block" ref="home">
      <div class="preview_block block_wrapper">
        <div class="preview_block_main">
          <h1>{front.Variable.stateLang ? Static?.text : Static?.textEn}</h1>
          <div class="3d_coin">
            <canvas class="webg1">123</canvas>
          </div>
        </div>
        <p>
          <b>Crypto Emergency</b>
          {front.Variable.stateLang
            ? "- общедоступная блокчейн платформа с открытым кодом, низкими комиссиями с отличной поддержкой продукта."
            : "is a public blockchain platform with open source, low fees and excellent product support."}
        </p>
      </div>
      <div class="our_values_block block_wrapper">
        <h2>
          {front.Variable.stateLang ? "НАШИ ПРЕИМУЩЕСТВА" : "OUR ADVANTAGES"}
        </h2>
        <div class="our_values_list">
          {lang?.map((item: any) => {
            return (
              <div class="our_values_item">
                {item?.icon && (
                  <img
                    class="imgFirsBlock"
                    src={item?.icon}
                    alt={item?.info}
                  />
                )}
                <span>{item?.info}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}