import { Cemjsx, Func, Static, Fn } from "cemjs-all"
import blockService from "@json/header/blockService"
export default function () {

  return (
    <div class="navigation_menu navigation_menu_item">
      <span
      >Сервисы
        {Static.imgArrow}
      </span>
      <div class="navigation_menu_item_full">
        <div class="navigation_menu_item_full_inner">
          <a href="https://crypto-emergency.com" target="_blank">Crypto Emergency</a>
          <a href="https://cemscan.com" target="_blank">CEM Explorer</a>
          <a href="https://cemwallet.com" target="_blank">CEM Wallet</a>
          <a href="https://cemnft.com" target="_blank">CEM NFT</a>
          <a href="https://cemswap.com" target="_blank">CEM Swap</a>
        </div>
      </div>
    </div>
  )
}