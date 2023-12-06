import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import gas from '@svg/gas.svg'
import time from '@svg/time.svg'
import tokens from '@svg/tokens.svg'
import nft from '@svg/nft.svg'
import wallet from '@svg/wallet.svg'
import swap from '@svg/swap.svg'


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