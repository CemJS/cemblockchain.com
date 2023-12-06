import { Cemjsx, Static } from "cemjs-all"
import plus from '@images/plus/plus.svg'
import aboutProduct from '@json/aboutProduct'
import contacts from '@json/contacts'

export default function () {
  return (
    <div class="about_product">
      <div class="key_pillars block_wrapper">
        <h2 class="socialH2">Ключевые моменты нашего продукта</h2>
        {aboutProduct?.map((item) => {
          return (
            <div key={item} class="key_pillars_item">
              <p>{item?.title}</p>
              <span>{item?.text}</span>
            </div>
          )
        })}
      </div>
      <div class="contact_us block_wrapper">
        <h2 class="socialH2">
          Контакты
        </h2>
        {contacts?.map((item) => {
          return (
            <a target="_blank"
              href={item?.link}
              rel="nofollow noopener"
              class="contact_us_link">
              <div>
                <img src={item?.icon} />
              </div>
              <span>{item?.info}</span>
            </a>)
        })}
        <img class="background_plus" src={plus} />
      </div>
    </div>
  )
}