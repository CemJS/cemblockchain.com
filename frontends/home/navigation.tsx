import { Cemjsx } from "cemjs-all"
import AdvantagesBlock from "./display/AdvantagesBlock"
import OurSocialBlock from "./display/OurSocialBlock"
import AboutProduct from "./display/AboutProduct"

export default function () {
  return (
    <home>
      <AdvantagesBlock />
      <OurSocialBlock />
      <AboutProduct />
    </home>
  )
}