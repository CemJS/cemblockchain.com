import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"
import arrow_bottom from '@svg/arrow_bottom.svg'


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
    Static.servicesState = false
    Static.devolopersState = false
    Static.aboutState = false
    Static.explorerState = false
    Static.imgArrow = <img
        class="img-arrow-bottom_footer"
        src={arrow_bottom}>
    </img>;
    return
}

front.display = () => {
    return (
        <footer class="footer">
            <Navigation />
        </footer>
    )
}

export { front }