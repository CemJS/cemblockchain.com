const app = document.getElementById('app');
const preloader = document.getElementById('preloader');
const percent = document.querySelector('.preloader_percent');
const prog = document.getElementById('progress');

export const loader = async function (Variable: any) {
    Variable.$el = {
        app,
        body: document.querySelector('body')
    }
}

export const progress = async function ({ load, total }) {

    let count = Math.round((load / total) * 100)
    if (percent && prog) {
        if (count == 100) {
            percent.classList.add("text_blink");
            percent.textContent = 'Connected to Blockchain!';
            setTimeout(() => {
                if (preloader) {
                    preloader.style.display = "none"
                }
            }, 50);
        } else {
            prog.style.width = 200 / 100 * count + 'px';
            if (count > 80) {
                percent.textContent = 'Connected to Blockchain!';
            } else {
                percent.textContent = count + '%';

            }
        }
    }
}