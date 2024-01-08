import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import blockHeaderNavigation from "@json/header/blockHeaderNavigation"
import blockHeaderNavigationEN from "@json/header/en/blockHeaderNavigationEN"

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHeaderNavigation : blockHeaderNavigationEN

  return (
    <div class="navigation_menu navigation_menu_item">
      <span>
        {lang?.service?.title}
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          {lang?.service?.content.map((item: any) => {
            return (
              <a href={item?.link} target="_blank">{item?.info}</a>
            )
          })}
        </div>
      </div>
    </div>
  )
}