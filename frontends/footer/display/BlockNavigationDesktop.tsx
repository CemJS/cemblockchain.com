import { Cemjsx, front, Fn, Static } from "cemjs-all"
import blockFooterNavigation from "@json/footer/blockFooterNavigation"
import blockFooterNavigationEN from "@json/footer/en/blockFooterNavigationEN"

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockFooterNavigation : blockFooterNavigationEN

  return (

    <div class="deskFlex">
      <div class="devolopersBlockDesk">
        <p>
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

      <div class="servicesBlockDesk">
        <p>
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


      <div class="aboutBlockDesk">
        <p>
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

      <div class="explorerBlockDesk">
        <p>
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



    </div>

  )
}