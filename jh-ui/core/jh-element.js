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

    static json() {
        const data = {};
        const queryData = this.queryForm();
        queryData.split('&').forEach(pair => {
            const [key, value] = pair.split('=');
            if (typeof data[key] !== 'undefined') {
                if (typeof data[key] === 'string') {
                    const array = [data[key], value];
                    data[key] = array;
                } else {
                    data[key] = [...data[key], value];
                }
            } else {
                data[key] = value;
            }
        });
        return data;
    }

    static queryForm() {
        const inputs = document.querySelectorAll('input');
        const form = document.createElement('form');
        inputs.forEach(input => form.appendChild(input.cloneNode()));
        const formData = new URLSearchParams(new FormData(form)).toString();
        return formData;
    }
}

export default JHElement;