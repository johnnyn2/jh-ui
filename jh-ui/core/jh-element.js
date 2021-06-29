class JHElement {
    constructor(el) {
        this.elm = el;
    }

    el() {
        return this.elm;
    }

    static createHTMLElement(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }
}

export default JHElement;