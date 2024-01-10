import { Cemjsx, Fn, front } from "cemjs-all"
import socialsIconEN from '@json/footer/socialsIconEN'
import language_icon from '@svg/language_icon.svg'
import blockHeaderNavigation from "@json/header/blockHeaderNavigation"
import blockHeaderNavigationEN from "@json/header/en/blockHeaderNavigationEN"

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHeaderNavigation : blockHeaderNavigationEN

  return (
    <div
      onclick={() => {
        front.Variable.stateModal = false
        this.Variable.$el.body.style.overflow = 'auto'
        Fn.initAll()
      }}
      class={!front.Variable.stateModal ? "modal modal_close" : "modal"} id="burgerMenu">
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
                  if (item?.info === 'Lite Paper') {
                    return (
                      <a href={item?.link} target="_blank">{item?.info}</a>
                    )
                  } else {
                    return (
                      <a href={item?.link}>{item?.info}</a>
                    );
                  }
                })}
              </div>
            </div>

            <div class="navigation_item">
              <span>{lang?.about?.title}</span>
              <div class="burger_menu_item">
                {lang?.about?.content?.map((item: any) => {
                  return (
                    <a href={item?.link}
                      onclick={Fn.link}>
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
                  if (item?.link === '/#contact') {
                    return (
                      <a href={item?.link}
                        onclick={() => {
                          document.querySelector('#contact').scrollIntoView({
                            behavior: 'smooth'
                          })
                        }}
                      >{item?.info}</a>
                    );
                  } else {
                    return (
                      <a href={item?.link}
                        onclick={Fn.link}>{item?.info}</a>
                    )
                  }
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
                {front.Variable.stateLang == "ru" ? "Язык" : "Language"}
              </span>
              <div class="burger_menu_item">
                <a onclick={() => {
                  front.Variable.stateLang = "en"
                  localStorage.setItem('langState', front.Variable.stateLang)
                  Fn.initAll()
                }}>English</a>
                <a onclick={() => {
                  front.Variable.stateLang = "ru"
                  localStorage.setItem('langState', front.Variable.stateLang)
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