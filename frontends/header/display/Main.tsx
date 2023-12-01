import { Cemjsx, Func, Static, Fn } from "cemjs-all"
import logo from '@images/logo/logo.jpg'


export default function () {
  return (
    <header class="header header_container">
      <div class="header_inner">
        <div class="header_logo">
          <a href="/" onclick={Fn.link}>
            <img
              class="header_logo-img"
              src={logo}
            ></img>
          </a>
        </div>
        <nav>
          <ul class="header_menu">
            <li
              class={["header_menu_item", Static.page == "cemjs" ? "header_menu_item-active" : null]}

            ><a href="/about/" onclick={Fn.link}>Cem JS</a>
            </li>
            <li
              class={["header_menu_item", Static.page == "examples" ? "header_menu_item-active" : null]}
            ><a href="https://ya.ru" onclick={Fn.link}>Examples</a></li>
            <li
              class={["header_menu_item", Static.page == "contacts" ? "header_menu_item-active" : null]}
              onclick={() => {
                Static.page = "contacts"
                Fn.init()
              }}
            >Contacts</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}