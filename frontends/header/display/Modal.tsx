import { Cemjsx, Static, Fn, front } from "cemjs-all"
import socialsIconEN from '@json/footer/socialsIconEN'
import language_icon from '@svg/language_icon.svg'
import blockHeaderNavigation from "@json/header/blockHeaderNavigation"
import blockHeaderNavigationEN from "@json/header/en/blockHeaderNavigationEN"

export default function () {

  let lang: any

  if (front.Variable.stateLang) {
    lang = blockHeaderNavigation
  } else {
    lang = blockHeaderNavigationEN
  }

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
            <h5 class="modal_title">{front.Variable.stateLang ? "Меню" : "Menu"}</h5>
            <button class="btn_close"></button>
          </div>
          <div class="modal_body">

            <div class="navigation_item">
              <span>{lang?.service?.title}</span>
              <div class="burger_menu_item">
                {lang?.service?.content?.map((item: any) => {
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
              <span>{lang?.devolopers?.title}</span>
              <div class="burger_menu_item">
                {lang?.devolopers?.content?.map((item: any) => {
                  return (
                    <a href={item?.link}>
                      {item?.info}
                    </a>
                  )
                })}
              </div>
            </div>

            <div class="navigation_item">
              <span>{lang?.about?.title}</span>
              <div class="burger_menu_item">
                {lang?.about?.content?.map((item: any) => {
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
              <span>{lang?.community?.title}</span>
              <div class="burger_menu_item">
                {lang?.community?.content?.map((item: any) => {
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
                {front.Variable.stateLang ? "Язык" : "Language"}
              </span>
              <div class="burger_menu_item">
                <a onclick={() => {
                  front.Variable.stateLang = false
                  Fn.initAll()
                }}>English</a>
                <a onclick={() => {
                  front.Variable.stateLang = true
                  Fn.initAll()
                }}>Russian</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}