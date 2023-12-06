import { Cemjsx, Static, Fn } from "cemjs-all"
import ourSocial from '@json/ourSocial'

export default function () {
  console.log("567", ourSocial)
  return (
    <div class="social_media" ref="home">
      <h2 class="socialH2">Наши социальные сети</h2>

      <div class="socials_block">
        {ourSocial?.map((item) => {
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