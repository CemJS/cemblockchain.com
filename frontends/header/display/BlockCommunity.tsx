import { Cemjsx, Static, Fn, front } from "cemjs-all"
import blockHeaderNavigation from "@json/header/blockHeaderNavigation"
import blockHeaderNavigationEN from "@json/header/en/blockHeaderNavigationEN"

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHeaderNavigation : blockHeaderNavigationEN

  return (
    <div class="navigation_menu navigation_menu_item">
      <span>
        {lang?.community?.title}
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          {lang?.community?.content.map((item: any) => {
            if (item?.link === '/#contact') {
              return (
                <a href={item?.link}
                  onclick={() => {
                    document.querySelector('#contact').scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}>
                  {item?.info}</a>
              )
            } else {
              return (
                <a href={item?.link}
                  onclick={Fn.link}>
                  {item?.info}
                </a>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}