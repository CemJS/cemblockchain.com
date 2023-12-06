import { Cemjsx, Static, Fn } from "cemjs-all"
import adv from '@json/advantages'

export default function () {

  return (
    <div class="advantages_block" ref="home">
      <div class="preview_block block_wrapper">
        <div class="preview_block_main">
          <h1>{Static?.text}</h1>
        </div>
        <p>
          <b>Crypto Emergency </b>
          - общедоступная блокчейн платформа с
          открытым кодом, низкими комиссиями с
          отличной поддержкой продукта.
        </p>
      </div>
      <div class="our_values_block block_wrapper">
        <h2>НАШИ ПРЕИМУЩЕСТВА</h2>

        <div class="our_values_list">
          {adv?.map((item, index) => {
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