import { Cemjsx, Func, front, Static, Fn } from "cemjs-all"

export default function () {

  return (
    <div class="navigation_menu navigation_menu_item mstart">
      <span>
        {Static.imgIconLang}
        {front.Variable.stateLang ? "Язык" : "Language"}
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          <a onclick={() => {
            front.Variable.stateLang = false
            Fn.initAll()
          }}>English</a>
          <a onclick={() => {
            front.Variable.stateLang = true
            Fn.initAll()
          }}>Russian</a>
        </div>
      </div>
    </div>
  )
}