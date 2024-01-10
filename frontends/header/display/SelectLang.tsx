import { Cemjsx, front, Static, Fn } from "cemjs-all"

export default function () {

  return (
    <div class="navigation_menu navigation_menu_item mstart">
      <span>
        {Static.imgIconLang}
        {front.Variable.stateLang == "ru" ? "Язык" : "Language"}
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          <a onclick={() => {
            front.Variable.stateLang = "en"
            localStorage.setItem('langState', front.Variable.stateLang);
            Fn.initAll()
          }}>English</a>
          <a onclick={() => {
            front.Variable.stateLang = "ru"
            localStorage.setItem('langState', front.Variable.stateLang);
            Fn.initAll()
          }}>Russian</a>
        </div>
      </div>
    </div>
  )
}