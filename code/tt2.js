export default class Dom {
    element = null;

    constructor(selector) {
        this.element = document.querySelectorAll(selector);
    }

    on = (event, fn) => {
        if (!this.element.length) return false;
        this.element.length > 1 ? this.element.forEach(element => {
            element.addEventListener(event, fn);
        }) : this.element[0].addEventListener(event, fn);
    }
    onPaste = (fn) => {
        if (!this.element.length) return false;
        this.element.length > 1 ? this.element.forEach(element => {
            element.addEventListener('paste', function (e) {
                setTimeout(function () {
                    fn(e)
                }, 100)
            });
        }) : this.element[0].addEventListener('paste', function (e) {
            setTimeout(function () {
                fn(e)
            }, 100)
        });
    }
    val = (value) => {
        if (!value && value !== '') return this.element.length > 1 ? this.element.map(element => element.value) : this.element[0].value;

        this.element.length > 1 ? this.element.forEach(element => {
            element.value = value;
        }) : this.element[0].value = value;
    }
    focus = x => {
        this.element[0].focus();
    }
    html = html => {
        this.element.length > 1 ? this.element.forEach(element => {
            element.innerHTML = html;
        }) : this.element[0].innerHTML = html;
    }
    each = fn => {
        this.element.forEach((element, index) => {
            fn(element, index)
        });
    }
    attr = (name, value) => {
        if (!value && value !== '') {
            this.element.forEach((element) => {
                element[name] = value;
            });
        } else {
            return this.element.length > 1 ? this.element.map(element => element[name]) : this.element[0][name];
        }
    }
    toggleClass = (className) => {
        this.element.length > 1 ? this.element.forEach(element => element.classList.toggle(className)) : this.element[0].classList.toggle(className);
    }
    removeClass = (className) => {
        this.element.length > 1 ? this.element.forEach(element => element.classList.remove(className)) : this.element[0].classList.remove(className);
    }
    addClass = (className) => {
        this.element.length > 1 ? this.element.forEach(element => element.classList.add(className)) : this.element[0].classList.add(className);
    }
}