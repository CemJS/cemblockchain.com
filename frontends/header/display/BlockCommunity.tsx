import { Cemjsx, Func, Static, Fn, front } from "cemjs-all"
import blockHeaderNavigation from "@json/header/blockHeaderNavigation"
import blockHeaderNavigationEN from "@json/header/en/blockHeaderNavigationEN"

export default function () {

  let lang: any

  if (front.Variable.stateLang) {
    lang = blockHeaderNavigation
  } else {
    lang = blockHeaderNavigationEN
  }

  return (
    <div class="navigation_menu navigation_menu_item">
      <span
      >{lang?.community?.title}
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          {lang?.community?.content.map((item: any) => {
            return (
              <a href={item?.link} onclick={() => {
                document.getElementById('contact')
              }}>{item?.info}</a>
            )
          })}
        </div>
      </div>
    </div>
  )
}