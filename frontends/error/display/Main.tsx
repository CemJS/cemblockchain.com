import { Cemjsx, Fn, Func, Static } from "cemjs-all"

export default function () {
    return (
        <div class="error_wrap">
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title"
            >Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={Fn.link}
                class="btn btn_timing"
            >
                <span>На главную</span>
            </a>
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title">Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={Fn.link}
                class="btn btn_timing"
            >
                <span>На главную</span>
            </a>
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title"
                init={(el) => {
                    console.log('init первая', el)
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            console.log('=287f08 первая=', entry.isIntersecting, entry)

                        })

                    })

                    observer.observe(el)

                }}
            >Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={Fn.link}
                class="btn btn_timing"
            >
                <span>На главную</span>
            </a>
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title">Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={Fn.link}
                class="btn btn_timing"
            >
                <span>На главную</span>
            </a>
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title">Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={Fn.link}
                class="btn btn_timing"
            >
                <span>На главную</span>
            </a>
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title">Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={Fn.link}
                class="btn btn_timing"
            >
                <span>На главную</span>
            </a>
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title">Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={Fn.link}
                class="btn btn_timing"
            >
                <span>На главную</span>
            </a>
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title"
                init={(el) => {
                    console.log('init последняя', el)
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            console.log('=287f08 последняя=', entry.isIntersecting, entry)

                        })

                    })

                    observer.observe(el)
                }}
            >Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={Fn.link}
                class="btn btn_timing"
            >
                <span>На главную</span>
            </a>
        </div>
    )
}