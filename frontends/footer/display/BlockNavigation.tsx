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

    <div class="blockNavigation">
      <div class="mobileFlex">
        <p onclick={showDevolopers}>
          {lang?.devolopers?.title}
          <div class="showIcon">
            {Static.imgArrow}
          </div>
        </p>
        <div class={Static.devolopersState ? "blockNavigation_content" : "blockNavigation_content_block"}>
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

      <div class="mobileFlex">
        <p onclick={showServices}>
          {lang?.services?.title}
          <div class="showIcon">
            {Static.imgArrow}
          </div>
        </p>
        <div class={Static.servicesState ? "blockNavigation_content" : "blockNavigation_content_block"}>
          {lang?.services?.content?.map((item: any) => {
            return (
              <a class="footer_navigation_a" href={item?.link} onclick={Fn.link}>
                {item?.info}
              </a>
            )
          })}
        </div>
      </div>

      <div class="mobileFlex">
        <p onclick={showAbout}>
          {lang?.about?.title}
          <div class="showIcon">
            {Static.imgArrow}
          </div>
        </p>
        <div class={Static.aboutState ? "blockNavigation_content" : "blockNavigation_content_block"}>
          {lang?.about?.content?.map((item: any) => {
            return (
              <a class="footer_navigation_a" href={item?.link} onclick={Fn.link}>
                {item?.info}
              </a>
            )
          })}
        </div>
      </div>

      <div class="mobileFlex">
        <p onclick={showExplorer}>
          {lang?.explorer?.title}
          <div class="showIcon">
            {Static.imgArrow}
          </div>
        </p>
        <div class={Static.explorerState ? "blockNavigation_content" : "blockNavigation_content_block"}>
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

  )
}