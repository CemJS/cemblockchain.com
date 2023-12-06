import { Cemjsx, Func, Static, Fn } from "cemjs-all"

export default function () {

  return (
    <div class="navigation_menu navigation_menu_item">
      <span
      >Сообщество
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          <a href="https://github.com/CryptoEmergency" target="_blank">Github</a>
          <a href="/ru/#contact" target="_blank">Контакты</a>
          <a href="/ru/add-network/" target="_blank">Инструкция по добавлению сети</a>
        </div>
      </div>
    </div>
  )
}