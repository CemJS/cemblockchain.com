import { Cemjsx, front } from "cemjs-all"
import logo from '@images/logo/logo.svg'
import ruflag from '@images/logo/ruflag.svg'
import enflag from '@images/logo/enflag.svg'
import metamask from '@svg/metamask.svg'
import socialsIconRU from '@json/footer/socialsIconRU'
import socialsIconEN from '@json/footer/socialsIconEN'
import blockFooterNavigation from "@json/footer/blockFooterNavigation"
import blockFooterNavigationEN from "@json/footer/en/blockFooterNavigationEN"

export default function () {

  let lang: any

  if (front.Variable.stateLang) {
    lang = blockFooterNavigation
  } else {
    lang = blockFooterNavigationEN
  }

  return (
    <footer class="footer">
      <div class="footer_container block_wrapper">
        <div class="footer_top">
          <div class="footer_connect">
            <img src={logo} />
            <div>
              <img src={metamask} />
              {front.Variable.stateLang ? " Добавить сеть " : "Add Network"}
            </div>
          </div>
          <div class="footer_navigation">

            <div>
              <p>
                {lang?.devolopers?.title}
              </p>
              {lang?.devolopers?.content?.map((item: any) => {
                return (
                  <a class="footer_navigation_a" href={item?.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>

            <div>
              <p>
                {lang?.service?.title}
              </p>
              {lang?.service?.content?.map((item: any) => {
                return (
                  <a class="footer_navigation_a" href={item?.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>

            <div>
              <p>
                {lang?.about?.title}
              </p>
              {lang?.about?.content?.map((item: any) => {
                return (
                  <a class="footer_navigation_a" href={item?.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>

            <div>
              <p>
                {lang?.explorer?.title}
              </p>
              {lang?.explorer?.content?.map((item: any) => {
                return (
                  <a class="footer_navigation_a" href={item?.link}>
                    {item?.info}
                  </a>
                )
              })}
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
    </footer>
  )
}