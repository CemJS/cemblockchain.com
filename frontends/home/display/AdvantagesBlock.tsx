import { Cemjsx, Static, Fn, front } from "cemjs-all"
import blockHomeContent from '@json/home/blockHomeContent'
import blockHomeContentEN from '@json/home/en/blockHomeContentEN'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GLTFLoader from 'three-gltf-loader'

const tmp = function () {

  return
  console.log(document.getElementsByClassName('3d_coin'))
  const scene = new window.THREE.Scene();
  const camera = new window.THREE.PerspectiveCamera(25, 400 / 300, 0.1, 1000);
  const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });
  var stopAnimate = false
  var timestop
  var noAnimate = false
  var previousCord
  renderer.setSize(400, 300);
  document.getElementsByClassName('3d_coin')[0].appendChild(renderer.domElement)



  const aLight = new window.THREE.AmbientLight(0xffffff, 6.2)
  scene.add(aLight)
  const pLight = new window.THREE.PointLight(0xffffff, 1.1)
  pLight.position.set(0, -3, 7)
  scene.add(pLight)

  let loader = new GLTFLoader();
  var obj
  loader.load('/assets/3d/coin.gltf', function (gltf) {
    obj = gltf
    obj.scene.scale.set(1.3, 1.3, 1.3)
    scene.add(obj.scene)
    renderer.render(scene, camera);
    // animate()
    timestop = setTimeout(function () {
      stopAnimate = true
    }, 16000)
  })

  //   const renderer = new window.THREE.WebGLRenderer({ antialias: true });
  //   renderer.outputColorSpace = window.THREE.SRGBColorSpace;
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(renderer.domElement);

  //   const scene = new window.THREE.Scene();

  // const camera = new window.THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  // camera.position.set(0, 0, 5);

  // const controls = new OrbitControls(camera, renderer.domElement);
  // // controls.enableDamping = true;
  // // controls.enablePan = false;
  // controls.minDistance = 5;
  // controls.maxDistance = 5;
  // controls.minPolarAngle = 1.5;
  // controls.maxPolarAngle = 1.5;
  // controls.autoRotate = false;
  // controls.update();


  // const spotLight = new window.THREE.SpotLight(0xffffff, 3, 100, 0.22, 1);
  // spotLight.position.set(0, 25, 0);
  // spotLight.castShadow = true;
  // spotLight.shadow.bias = -0.0001;
  // scene.add(spotLight);

  // const loader = new GLTFLoader().setPath('assets/3d/');
  // loader.load('coin.gltf', (gltf) => {
  //     const mesh = gltf.scene;

  //     mesh.position.set(0, 0, 0);
  //     scene.add(mesh);
  //     let rotationAngle = 0;
  //     let rotationSpeed = -0.005;
  //     function animate() {
  //         requestAnimationFrame(animate);
  //         controls.update();
  //         mesh.rotation.y += rotationSpeed;
  //         rotationAngle = (rotationAngle + rotationSpeed) % 360;
  //         renderer.render(scene, camera);
  //     }
  //     animate();

  //     document.getElementById('progress-container').style.display = 'none';
  // }, (xhr) => {
  //     document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
  // },);

}

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHomeContent : blockHomeContentEN

  return (
    <div init={tmp} class="advantages_block" ref="home">
      <div class="preview_block block_wrapper">
        <div class="preview_block_main">

          <h1>{front.Variable.stateLang == "ru" ? Static?.text : Static?.textEn}</h1>
        </div>
        <div class="3d_coin"></div>
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