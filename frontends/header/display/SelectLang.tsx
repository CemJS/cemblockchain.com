import { Cemjsx, Func, front, Static, Fn } from "cemjs-all"

export default function () {

  console.log("front.Variable.stateLang", front.Variable.stateLang);
  console.log("localStorage.lang", localStorage.lang);
  
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
            localStorage.setItem('langState', front.Variable.stateLang);
            Fn.initAll()
          }}>English</a>
          <a onclick={() => {
            front.Variable.stateLang = true
            localStorage.setItem('langState', front.Variable.stateLang);
            Fn.initAll()
          }}>Russian</a>
        </div>
      </div>
    </div>
  )
}