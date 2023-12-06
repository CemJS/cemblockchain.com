import { Cemjsx, Static, Fn, front } from "cemjs-all"
import blockService from "@json/header/blockService"
import blockDevolopers from "@json/header/blockDevolopers"
import blockAboutUs from "@json/header/blockAboutUs"
import BlockCommunity from "@json/header/BlockCommunity"
import socialsIconEN from '@json/socialsIconEN'
import language_icon from '@svg/language_icon.svg'

export default function () {

  return (
    <div
      onclick={() => {
        front.Variable.stateModal = false
        Fn.initAll()
      }}
      class={!front.Variable.stateModal ? "closeModal" : "modal"} id="burgerMenu">
      <div class="modal_dialog">
        <div class="modal_content">
          <div class="modal_header">
            <h5 class="modal_title">Меню</h5>
            <button class="btn_close"></button>
          </div>
          <div class="modal_body">

            <div class="navigation_item">
              <span>Сервисы</span>
              <div class="burger_menu_item">
                {blockService?.map((item) => {
                  return (
                    <a href={item?.link}
                      target="_blank">
                      {item?.info}
                    </a>
                  )
                })}
              </div>
            </div>

            <div class="navigation_item">
              <span>Разработчикам</span>
              <div class="burger_menu_item">
                {blockDevolopers?.map((item) => {
                  return (
                    <a href={item?.link}
                      target="_blank">
                      {item?.info}
                    </a>
                  )
                })}
              </div>
            </div>

            <div class="navigation_item">
              <span>О нас</span>
              <div class="burger_menu_item">
                {blockAboutUs?.map((item) => {
                  return (
                    <a href={item?.link}
                      target="_blank">
                      {item?.info}
                    </a>
                  )
                })}
              </div>
            </div>

            <div class="navigation_item">
              <span>Сообщество</span>
              <div class="burger_menu_item">
                {BlockCommunity?.map((item) => {
                  return (
                    <a href={item?.link}
                      target="_blank">
                      {item?.info}
                    </a>
                  )
                })}
              </div>
            </div>

          </div>

          <div class="burger_socials">
            {socialsIconEN?.map((item) => {
              return (
                <div>
                  <a target="_blank" href={item?.link} rel="nofollow noopener">
                    <img src={item?.icon} />
                  </a>
                </div>
              )
            })}
          </div>

          <div class="lang_select">
            <div class="navigation_item">
              <span>
                <img src={language_icon} />
                Language
              </span>
              <div class="burger_menu_item">
                <a href="/">English</a>
                <a href="#">Russian</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}