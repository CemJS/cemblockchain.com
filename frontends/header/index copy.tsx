import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"
import arrow_bottom from '@svg/arrow_bottom.svg'
import language_icon from '@svg/language_icon.svg'

front.Variable.stateLang = localStorage.getItem('front.Variable.stateLang') || true;
localStorage.setItem('front.Variable.stateLang', front.Variable.stateLang);

const savedStateLang = localStorage.getItem('front.Variable.stateLang');
if (savedStateLang !== null) {
    front.Variable.stateLang = JSON.parse(savedStateLang);
}
front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = () => {

    front.Variable.stateModal = false
    front.Variable.stateLang = true
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