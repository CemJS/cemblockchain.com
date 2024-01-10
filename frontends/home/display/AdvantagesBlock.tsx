import { Cemjsx, Static, Fn, front } from "cemjs-all"
import blockHomeContent from '@json/home/blockHomeContent'
import blockHomeContentEN from '@json/home/en/blockHomeContentEN'
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const tmp = function () {
  let el_3d = document.getElementsByClassName('3d_coin')[0]
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(25, 400 / 300, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  var stopAnimate = false
  var timestop
  var noAnimate = false
  // var previousCord
  renderer.setSize(375, 290);
  el_3d.appendChild(renderer.domElement)

  const aLight = new THREE.AmbientLight(0xffffff, 2)
  scene.add(aLight)
  const pLight = new THREE.PointLight(0xffffff, 20)
  pLight.position.set(0, 0, 4)
  scene.add(pLight)
  let loader = new GLTFLoader();
  var obj
  loader.load('/contents/3d/coin.gltf', function (gltf) {
    obj = gltf
    obj.scene.scale.set(1.3, 1.3, 1.3)
    scene.add(obj.scene)
    renderer.render(scene, camera);
    animate()
  })

  function animate() {
    obj.scene.rotation.y -= 0.006;
    if (!stopAnimate) {
      requestAnimationFrame(animate);
    }
    if (obj == null) {
      return
    }
    if (noAnimate) {
      return
    }
    renderer.render(scene, camera);
  }

  camera.position.z = 6;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry?.isIntersecting == true) {
        stopAnimate = false
        animate()
      } else {
        stopAnimate = true
      }
    })
  })

  observer.observe(el_3d)
}

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHomeContent : blockHomeContentEN

  return (
    <div init={tmp} class="advantages_block" ref="home">
      <div class="preview_block block_wrapper">
        <div class="preview_block_main">
          <h1>{front.Variable.stateLang == "ru" ? Static?.text : Static?.textEn}</h1>
          <div class="coin 3d_coin"></div>
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