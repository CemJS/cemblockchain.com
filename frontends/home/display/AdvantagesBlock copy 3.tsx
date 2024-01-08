import { Cemjsx, Static, Fn, front } from "cemjs-all"
import blockHomeContent from '@json/home/blockHomeContent'
import blockHomeContentEN from '@json/home/en/blockHomeContentEN'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 5, 15);

    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(1920 , 1080);
    document.body.appendChild(renderer.domElement);


    const pLight = new THREE.PointLight(0xFFFFFF, 15);
    pLight.position.set(0,5,0)
    scene.add(pLight);

    const phelper = new THREE.PointLightHelper(pLight);
    scene.add(phelper);


    const loader = new GLTFLoader();
    let obj = null;

    loader.load("assets/3d/coin.gltf", function(gltf) {
        obj = gltf.scene;
        scene.add(gltf.scene);
    });

    function animate(){
        requestAnimationFrame(animate)
        obj.rotation.y += 0.005;  // speed
        renderer.render(scene, camera)
    }
    animate();

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHomeContent : blockHomeContentEN

  return (
    <div class="advantages_block" ref="home">
      <div class="preview_block block_wrapper">
        <div class="preview_block_main">
          <h1>{front.Variable.stateLang == "ru" ? Static?.text : Static?.textEn}</h1>
         <canvas id="threejs-canvas" class="3d_coin"></canvas>
        </div>
        <p>
          <b>Crypto Emergency </b>
          {front.Variable.stateLang == "ru" ? "- общедоступная блокчейн платформа с открытым кодом, низкими комиссиями с отличной поддержкой продукта." :
            "is a public blockchain platform with open source, low fees and excellent product support."}
        </p>
      </div>
      <div class="our_values_block block_wrapper">
        <h2>{lang?.title}</h2>
        <div class="our_values_list">
          {lang?.advantages?.content?.map((item: any) => {
            return (
              <div class="our_values_item">
                {item?.icon &&
                  <img
                    class="imgFirsBlock"
                    src={item?.icon}
                  />
                }
                <span>{item?.info}</span>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}