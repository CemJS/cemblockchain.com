import { Cemjsx, Func, Static, Fn } from "cemjs-all"

export default function () {

  return (
    <div class="navigation_menu navigation_menu_item">
      <span
      >Разработчикам
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          <a href="/ru/api/" target="_blank">API info</a>
          <a href="/assets/docs/LitePaperRu.pdf" onclick={Fn.link}>Lite Paper</a>
        </div>
      </div>
    </div>
  )
}