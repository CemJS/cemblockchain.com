import { Cemjsx, front } from "cemjs-all"
import blockHomeContent from '@json/home/blockHomeContent'
import blockHomeContentEN from '@json/home/en/blockHomeContentEN'

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHomeContent : blockHomeContentEN

  return (
    <div class="social_media" ref="home">
      <h2 class="socialH2">{lang?.ourSocial?.title}</h2>
      <div class="socials_block">
        {lang?.ourSocial?.content?.map((item: any) => {
          return (
            <div key={item} class="socials_block_item">
              <a target="_blank" href={item?.link} rel="nofollow noopener">
                <img
                  class="imgFirsBlock"
                  src={item?.icon} />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}