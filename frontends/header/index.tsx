import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"
import arrow_bottom from '@svg/arrow_bottom.svg'
import language_icon from '@svg/language_icon.svg'

front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
    front.Variable.stateModal = false
    Static.imgArrow = <img
        class="img-arrow-bottom"
        src={arrow_bottom}>
    </img>;

    Static.imgIconLang = <img
        class="img-lang-select"
        src={language_icon}>
    </img>;
    return
}

front.display = () => {
    return (
        <div>
            <Navigation />
        </div>
    )
}

export { front }