import { Cemjsx, Fn, front } from "cemjs-all"
import logo from '@images/logo/logo.svg'
import burger_menu from '@images/logo/burger_menu.svg'
import BlockService from "./BlockService";
import BlockDevolopers from "./BlockDevolopers";
import BlockCommunity from "./BlockCommunity";
import BlockAbout from "./BlockAbout";
import SelectLang from "./SelectLang";
import Modal from "frontends/header/display/Modal";

export default function () {

  return (
    <div class="block_wrapper img-logo-mr">
      <a href="/" onclick={Fn.link}>
        <img src={logo} />
      </a>
      <div class="header header_menu">
        <img
          class="burger_menu_icon"
          src={burger_menu}
          onclick={() => {
            front.Variable.stateModal = true
            this.Variable.$el.body.style.overflow = 'hidden'
            Fn.initAll()
          }} />
        <div class="navigation_menu">
          <BlockService />
          <BlockDevolopers />
          <BlockCommunity />
          <BlockAbout />
          <SelectLang />
        </div>
      </div>
      <Modal />
    </div>
  )
}