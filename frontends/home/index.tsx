import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
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