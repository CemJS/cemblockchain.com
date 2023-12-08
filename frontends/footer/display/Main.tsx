import { Cemjsx, front, Fn, Static } from "cemjs-all"
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
  let scrin = window.innerWidth
  console.log("{window.screen.width", scrin);

  return (

    <div class="footer_container block_wrapper">
      <div class="footer_top">
        <div class="footer_connect">
          <img class="imgLogo" src={logo} />
          <div>
            <img src={metamask} />
            {front.Variable.stateLang ? " Добавить сеть " : "Add Network"}
          </div>
        </div>
        <div class="footer_navigation">

          <div>
            <p>
              {lang?.devolopers?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>
            </p>
            <div>
              {lang?.devolopers?.content?.map((item: any) => {
                return (
                  <a class="footer_navigation_a" href={item?.link} onclick={Fn.link}>
                    {item?.info}
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <p>
              {lang?.service?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>            </p>
            {lang?.service?.content?.map((item: any) => {
              return (
                <a class="footer_navigation_a" href={item?.link} onclick={Fn.link}>
                  {item?.info}
                </a>
              )
            })}
          </div>

          <blockabout class="paddingR4">
            <p>
              {lang?.about?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>            </p>
            {lang?.about?.content?.map((item: any) => {
              return (
                <a class="footer_navigation_a" href={item?.link} onclick={Fn.link}>
                  {item?.info}
                </a>
              )
            })}
          </blockabout>

          <div>
            <p>
              {lang?.explorer?.title}
              <div class="showIcon">
                {Static.imgArrow}
              </div>            </p>
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

  )
}