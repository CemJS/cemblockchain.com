import { Cemjsx, Static, Fn, front } from "cemjs-all"
import blockHomeContent from '@json/home/blockHomeContent'
import blockHomeContentEN from '@json/home/en/blockHomeContentEN'
import * as THREE from 'three';
import {GLTFLoader} from 'THREE/examples/jsm/loaders/GLTFLoader.js'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xf0ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
console.log("scene", scene);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHomeContent : blockHomeContentEN

  return (
    <div class="advantages_block" ref="home">
      <div class="preview_block block_wrapper">
        <div class="preview_block_main">
          <h1>{front.Variable.stateLang == "ru" ? Static?.text : Static?.textEn}</h1>
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