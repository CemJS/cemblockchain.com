const app = document.getElementById('app');
const preloader = document.getElementById('preloader');

export const loader = async function (Variable: any) {
    Variable.$el = {
        app,
        body: document.querySelector('body')
    }
}

export const progress = async function () {
    if (preloader) {
        preloader.style.display = "none"
    }
}