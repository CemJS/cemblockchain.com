import { Cemjsx, front, Fn, Static } from "cemjs-all"
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

    <div >
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

  )
}