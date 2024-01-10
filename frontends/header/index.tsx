import { Cemjsx, front, Static } from "cemjs-all"
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
    if (localStorage.getItem('langState') == null) {
        front.Variable.stateLang = "ru"
    } else {
        front.Variable.stateLang = localStorage.getItem('langState')
    }

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
        <Navigation />
    )
}

export { front }

