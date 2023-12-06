import { Cemjsx } from "cemjs-all"
import logo from '@images/logo/logo.svg'
import ruflag from '@images/logo/ruflag.svg'
import enflag from '@images/logo/enflag.svg'
import metamask from '@svg/metamask.svg'
import navigationDev from '@json/navigationDev'
import navigationService from '@json/navigationService'
import navigationAboutUs from '@json/navigationAboutUs'
import navigationReviewer from '@json/navigationReviewer'
import socialsIconRU from '@json/socialsIconRU'
import socialsIconEN from '@json/socialsIconEN'

export default function () {

  return (
    <footer>
      <div class="footer_container block_wrapper">
        <div class="footer_top">
          <div class="footer_connect">
            <img src={logo} />
            <div>
              <img src={metamask} />
              Добавить сеть
            </div>
          </div>
          <div class="footer_navigation">

            <div>
              <p>
                Разработчикам
              </p>
              {navigationDev?.map((item) => {
                return (
                  <a class="footer_navigation_a" href={item?.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>

            <div>
              <p>
                Сервисы
              </p>
              {navigationService?.map((item) => {
                return (
                  <a class="footer_navigation_a" href={item?.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>

            <div>
              <p>
                О нас
              </p>
              {navigationAboutUs?.map((item) => {
                return (
                  <a class="footer_navigation_a" href={item?.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>

            <div>

              <p>
                Обозреватель
              </p>
              {navigationReviewer?.map((item) => {
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