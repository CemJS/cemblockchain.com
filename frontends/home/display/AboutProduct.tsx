import { Cemjsx, front, Static } from "cemjs-all"
import plus from '@images/plus/plus.svg'
import blockHomeContent from '@json/home/blockHomeContent'
import blockHomeContentEN from '@json/home/en/blockHomeContentEN'

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHomeContent : blockHomeContentEN
console.log("front.Variable.stateLang", front.Variable.stateLang);

  return (
    <div class="about_product">
      <div class="key_pillars block_wrapper">
        <h2 class="socialH2">{lang?.aboutProduct?.title}</h2>
        {lang?.aboutProduct?.content?.map((item: any) => {
          return (
            <div key={item} class="key_pillars_item">
              <p>{item?.title}</p>
              <span>{item?.text}</span>
            </div>
          )
        })}
      </div>
      <div class="contact_us block_wrapper" id="contact">
        <h2 class="socialH2">
          {lang?.contacts?.title}
        </h2>
        {lang?.contacts?.content?.map((item: any) => {
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