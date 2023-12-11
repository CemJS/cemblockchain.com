import { Cemjsx, front, Fn, Static } from "cemjs-all"
import logo from '@images/logo/logo.svg'
import ruflag from '@images/logo/ruflag.svg'
import enflag from '@images/logo/enflag.svg'
import metamask from '@svg/metamask.svg'
import socialsIconRU from '@json/footer/socialsIconRU'
import socialsIconEN from '@json/footer/socialsIconEN'
import blockFooterNavigation from "@json/footer/blockFooterNavigation"
import blockFooterNavigationEN from "@json/footer/en/blockFooterNavigationEN"
import BlockNavigationMobail from "./BlockNavigationMobail"
import BlockNavigationDesktop from "./BlockNavigationDesktop"
import BlockNavigationDesktopTesting from "./BlockNavigationDesktopTesting"

const showServices = () => {
  Static.servicesState = !Static.servicesState
  Fn.init()
}
const showDevolopers = () => {
  Static.devolopersState = !Static.devolopersState
  Fn.init()
}
const showAbout = () => {
  Static.aboutState = !Static.aboutState
  Fn.init()
}
const showExplorer = () => {
  Static.explorerState = !Static.explorerState
  Fn.init()
}

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockFooterNavigation : blockFooterNavigationEN

  return (

    <div class="footer_container block_wrapper">
      <div class="footer_top">
        <div class="footer_connect">
          <img class="imgLogo" src={logo} />
          <div>
            <img src={metamask} />
            {front.Variable.stateLang == "ru" ? " Добавить сеть " : "Add Network"}
          </div>
        </div>
        <div class="footer_navigation">
          {/* <BlockNavigationDesktopTesting/> */}
          <BlockNavigationDesktop />
          <BlockNavigationMobail />
        </div>
      </div>

      <div class="footer_bottom">
        <div class="footer_socials">
          <img class="footer_flags" src={ruflag} />
          {socialsIconRU?.map((item) => {
            return (
              <div>
                <a target="_blank" href={item?.link} rel="nofollow noopener">
                  <img src={item?.icon} />
                </a>
              </div>
            )
          })}
        </div>

        <div class="footer_socials">
          <img class="footer_flags" src={enflag} />
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
        <span>Crypto Emergency. All rights reserved © 2022</span>
      </div>
    </div>

  )
}