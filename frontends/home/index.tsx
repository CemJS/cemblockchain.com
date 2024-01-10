import { Cemjsx, front, Static, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.listener.finish = () => {
    console.log(Ref.home)
    return
}

front.func.test = () => {
    Static.count = 1;
    return
}

front.loader = () => {
    front.Variable.stopAnimate = false
    Static.text = "БЛОКЧЕЙН CEM – ПЛАТФОРМА ДЛЯ ПРОЕКТОВ И ПРИЛОЖЕНИЙ.";
    Static.textEn = "BLOCKCHAIN CEM - A PLATFORM FOR PROJECTS AND APPLICATIONS.";
    return
}

front.display = () => {
    return (
        <Navigation />
    )
}

export { front }