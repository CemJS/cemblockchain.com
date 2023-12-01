import { Cemjsx, Static } from "cemjs-all"
import space from '@svg/space.svg'


export default function () {
  return (
    <div class="home home_container">
      <h2 class="home_title">{Static.text}</h2>
      <img class="home_logoCem" src={space}></img>
    </div>
  )
}