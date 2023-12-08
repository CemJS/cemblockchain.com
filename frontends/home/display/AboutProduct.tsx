import { Cemjsx, front, Static } from "cemjs-all"
import plus from '@images/plus/plus.svg'
import aboutProduct from '@json/home/aboutProduct'
import aboutProductEN from '@json/home/en/aboutProductEN'
import contacts from '@json/home/contacts'
import contactsEN from '@json/home/en/contactsEN'

export default function () {

  let lang: any
  let langSecond: any

  if (front.Variable.stateLang) {
    lang = aboutProduct
    langSecond = contacts
  } else {
    lang = aboutProductEN
    langSecond = contactsEN
  }


  return (
    <div class="about_product">
      <div class="key_pillars block_wrapper">
        <h2 class="socialH2">{lang?.title}</h2>
        {lang?.content?.map((item: any) => {
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
          {langSecond?.title}
        </h2>
        {langSecond?.content?.map((item: any) => {
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