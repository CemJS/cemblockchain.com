import { Cemjsx, Static, Fn, front } from "cemjs-all"
import advantages from '@json/home/advantages'
import advantagesEN from '@json/home/en/advantagesEN'
import GLTFLoader from 'three-gltf-loader'

export default function () {
  
  let lang: any

  if (front.Variable.stateLang) {
    lang = advantages
  } else {
    lang = advantagesEN
  }

  return (
    <div class="advantages_block" ref="home">
      <div class="preview_block block_wrapper">
        <div class="preview_block_main">
          <h1>{front.Variable.stateLang ? Static?.text : Static?.textEn}</h1>
        </div>
        <p>
          <b>Crypto Emergency </b>
          {front.Variable.stateLang ? "- общедоступная блокчейн платформа с открытым кодом, низкими комиссиями с отличной поддержкой продукта." :
            "is a public blockchain platform with open source, low fees and excellent product support."}
        </p>
      </div>
      <div class="our_values_block block_wrapper">
        <h2>{front.Variable.stateLang ? "НАШИ ПРЕИМУЩЕСТВА"
          : "OUR ADVANTAGES"}</h2>
        <div class="our_values_list">
          {lang?.map((item: any) => {
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