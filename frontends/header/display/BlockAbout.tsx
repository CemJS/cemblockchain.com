import { Cemjsx, Func, Static, Fn } from "cemjs-all"

export default function () {

  return (
    <div class="navigation_menu navigation_menu_item">
      <span
      >О нас
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          <a href="https://crypto-emergency.com/en/about/" target="_blank">Команда</a>
          <a href="/ru/roadmap/" target="_blank">Дорожная карта</a>
          <a href="/ru/#tokenomics" target="_blank">Токеномика</a>
          <a href="/ru/terms/" target="_blank">Политика приватности</a>
        </div>
      </div>
    </div>
  )
}