import { Cemjsx, Static, Fn, front } from "cemjs-all"
import ourSocial from '@json/home/ourSocial'
import ourSocialEN from '@json/home/En/ourSocialEN'

export default function () {

  let lang: any

  if (front.Variable.stateLang) {
    lang = ourSocial
  } else {
    lang = ourSocialEN
  }

  return (
    <div class="social_media" ref="home">
      <h2 class="socialH2">{lang?.title}</h2>

      <div class="socials_block">
        {lang?.content.map((item: any) => {
          return (
            <div key={item} class="socials_block_item">
              <a target="_blank" href={item?.link} rel="nofollow noopener">
                <img
                  class="imgFirsBlock"
                  src={item?.icon}
                />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}