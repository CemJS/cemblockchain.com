import { Cemjsx, front, Fn, Static } from "cemjs-all"
import logo from '@images/logo/logo.svg'
import ruflag from '@images/logo/ruflag.svg'
import enflag from '@images/logo/enflag.svg'
import metamask from '@svg/metamask.svg'
import socialsIconRU from '@json/footer/socialsIconRU'
import socialsIconEN from '@json/footer/socialsIconEN'
import blockFooterNavigation from "@json/footer/blockFooterNavigation"
import blockFooterNavigationEN from "@json/footer/en/blockFooterNavigationEN"

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

          <div class="devolopersBlockDesk">
            <p onclick={showDevolopers}>
              {lang?.devolopers?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>
            </p>
            <div class="footerMobile">
              {lang?.devolopers?.content?.map((item: any) => {
                if (item?.info === 'Lite Paper') {
                  return (
                    <a class="footer_navigation_a" href={item?.link} target="_blank">{item?.info}</a>
                  );
                } else {
                  return (
                    <a class="footer_navigation_a" href={item?.link}>{item?.info}</a>
                  );
                }
              })}
            </div>
          </div>

          <div class="devolopersBlockMobile">
            <p onclick={showDevolopers}>
              {lang?.devolopers?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>
            </p>
            {Static.devolopersState &&
              <div class="footerMobile">
                {lang?.devolopers?.content?.map((item: any) => {
                  if (item?.info === 'Lite Paper') {
                    return (
                      <a class="footer_navigation_a" href={item?.link} target="_blank">{item?.info}</a>
                    );
                  } else {
                    return (
                      <a class="footer_navigation_a" href={item?.link}>{item?.info}</a>
                    );
                  }
                })}
              </div>
            }
          </div>

          <div class="servicesBlockDesk">
            <p onclick={showServices}>
              {lang?.services?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>
            </p>
            <div class="footerMobile">
              {lang?.services?.content?.map((item: any) => {
                return (
                  <a class="footer_navigation_a" href={item?.link} onclick={Fn.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>
          </div>

          <div class="servicesBlockMobile">
            <p onclick={showServices}>
              {lang?.services?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>
            </p>
            {Static.servicesState &&
              <div class="footerMobile">
                {lang?.services?.content?.map((item: any) => {
                  return (
                    <a class="footer_navigation_a" href={item?.link} onclick={Fn.link}>
                      {item?.info}
                    </a>
                  )
                })}
              </div>
            }
          </div>

          <div class="aboutBlockDesk">
            <p onclick={showAbout}>
              {lang?.about?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>
            </p>
            <div class="footerMobile">
              {lang?.about?.content?.map((item: any) => {
                return (
                  <a class="footer_navigation_a" href={item?.link} onclick={Fn.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>
          </div>

          <div class="aboutBlockMobile">
            <p onclick={showAbout}>
              {lang?.about?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>
            </p>
            {Static.aboutState &&
              <div class="footerMobile">
                {lang?.about?.content?.map((item: any) => {
                  return (
                    <a class="footer_navigation_a" href={item?.link} onclick={Fn.link}>
                      {item?.info}
                    </a>
                  )
                })}
              </div>
            }
          </div>

          <div class="explorerBlockDesk">
            <p onclick={showExplorer}>
              {lang?.explorer?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>
            </p>
            <div class="footerMobile">
              {lang?.explorer?.content?.map((item: any) => {
                return (
                  <a class="footer_navigation_a" href={item?.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>
          </div>

          <div class="explorerBlockMobile">
            <p onclick={showExplorer}>
              {lang?.explorer?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>
            </p>
            {Static.explorerState &&
              <div class="footerMobile">
                {lang?.explorer?.content?.map((item: any) => {
                  return (
                    <a class="footer_navigation_a" href={item?.link}>
                      {item?.info}
                    </a>
                  )
                })}
              </div>
            }
          </div>
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