import { Cemjsx } from "cemjs-all"

interface Params {
    items: Array<Item>
    options: Options
}

interface Item {
    cover: string
    name: string
    desc: string
    link?: string
}

interface Options {
    mainClass: string
    name: string
}

class TitlePreview {
    element: HTMLElement;
    options: Options;

    constructor(element: HTMLElement, options: Options) {
        this.element = element;
        this.options = options;
    }

    buttonPress(type: string) {
        let count = this.element.childNodes.length
        if (count > 1) {
            if (type == "prev") {
                this.element.prepend(this.element.childNodes[count - 1])
            } else {
                this.element.appendChild(this.element.childNodes[0])
            }
        }
        return
    }
}


const init = function ($el: HTMLElement, options: Options) {
    const { name, mainClass } = options
    this.Static[name] = new TitlePreview($el, options)
    return
}

const display = function (params: Params) {
    const { items, options } = params
    const { name, mainClass } = options
    return (
        <div class={mainClass}>
            <div class={`${mainClass}_slide`} init={($el: HTMLElement) => init.bind(this)($el, options)}>
                {
                    items.map(item => {
                        return (
                            <div class={`${mainClass}_item`} style={`background-image: url(${item.cover});`}>
                                <div class={`${mainClass}_item_content`}>
                                    <div class={`${mainClass}_item_name`}>{item.name}</div>
                                    <div class={`${mainClass}_item_desc`}>{item.desc}</div>
                                    {item?.link ? <a href={item.link} class="btn btn_timing" onclick={this.Fn.link}>Перейти</a> : null}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div class={`${mainClass}_arrows`}>
                <button
                    class={["glass", `${mainClass}_arrow`, `${mainClass}_arrow_prev`]}
                    onclick={() => {
                        this.Static[name].buttonPress("prev")
                    }}>
                </button>
                <button
                    class={["glass", `${mainClass}_arrow`, `${mainClass}_arrow_next`]}
                    onclick={() => {
                        this.Static[name].buttonPress("next")
                    }}
                ></button>
            </div>
        </div>
    )
}

export default display