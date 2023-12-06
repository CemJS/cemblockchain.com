import { Cemjsx, Func, Static, Fn } from "cemjs-all"

export default function () {

  return (
    <div class="navigation_menu navigation_menu_item mstart">
      <span>
        {Static.imgIconLang}
        Язык
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          <a href="" onclick={Fn.link}>English</a>
          <a href="" onclick={Fn.link}>Russian</a>
        </div>
      </div>
    </div>
  )
}