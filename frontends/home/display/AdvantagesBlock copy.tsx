import { Cemjsx, Static, Fn, front } from "cemjs-all"
import blockHomeContent from '@json/home/blockHomeContent'
import blockHomeContentEN from '@json/home/en/blockHomeContentEN'
import GLTFLoader from 'three-gltf-loader'

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