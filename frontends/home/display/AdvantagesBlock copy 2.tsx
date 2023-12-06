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
    console.log(gltf)
  }, function (xhr) {
    console.log(xhr.loaded / xhr.total * 100) + "% loaded";

  }, function (error) {
    console.log('an error occurred');
  })

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  })

  const boxMesh = new THREE.Mesh(geometry, material)
  scene.add(boxMesh)

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(0, 1, 2)
  scene.add(camera)

  const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
  })

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  // renderer.gammaOuput = true
  renderer.render(scene, camera)

  let lang: any;

  if (front.Variable.stateLang) {
    lang = advantages;
  } else {
    lang = advantagesEN;
  }
console.log("canvas", canvas);

  return (
    <div class="advantages_block" ref="home">
      <div class="preview_block block_wrapper">
        <div class="preview_block_main">
          <h1>{front.Variable.stateLang ? Static?.text : Static?.textEn}</h1>
          <div class="3d_coin">
            <canvas class="webg1"></canvas>
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