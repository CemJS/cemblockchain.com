import { Cemjsx, Fn } from "cemjs-all"
import AdvantagesBlock from "./display/AdvantagesBlock"
import OurSocialBlock from "./display/OurSocialBlock"
import AboutProduct from "./display/AboutProduct"

export default function () {
  return (
    <div>
      <AdvantagesBlock />
      <OurSocialBlock />
      <AboutProduct />
    </div>
  )
}