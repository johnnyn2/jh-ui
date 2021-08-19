/**
 * @author Johnny Ho
 */
class JHElement {
    /**
     * @param {HTMLElement} el HTML element
     */
    constructor(el) {
        this.elm = el;
    }

    /**
     * 
     * @returns {HTMLElement} Target HTMLElement
     */
    el() {
        return this.elm;
    }

    /**
     * 
     * @param {String} htmlString HTML element string template 
     * @returns {HTMLElement} A HTML element created from the string template
     */
    static createHTMLElement(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }


    /**
     * 
     * @returns {JSON} Create JSON object from JH-UI input elements for API request
     */
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

    /**
     * 
     * @returns {String} Create query string from JH-UI input elements for API request
     */
    static queryForm() {
        const inputs = document.querySelectorAll('input');
        const form = document.createElement('form');
        inputs.forEach(input => form.appendChild(input.cloneNode()));
        const formData = new URLSearchParams(new FormData(form)).toString();
        return formData;
    }
}

export default JHElement;