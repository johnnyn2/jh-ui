import JHElement from "../core/jh-element.js";

class JHTextField extends JHElement {
    constructor(textfield) {
        super(textfield);
        this.jhTextfield = textfield;
        this.isError = false;
        this.isDisabled = false;
        const t = this;
        textfield.addEventListener('input', function(e) {
            t.setIsError(false);
        });
    }

    on(type, handler) {
        this.jhTextfield.addEventListener(type, e => handler(e));
        return this;
    }

    val() {
        return this.jhTextfield.value;
    }

    validate(...validators) {
        const isValid = validators.every(v => v.result === true);                      
        this.setIsError(!isValid);
        return isValid;
    }

    setIsError(isError) {
        this.isError = isError;
        if (isError) {
            this.jhTextfield.classList.add('jh-error');
        } else {
            this.jhTextfield.classList.remove('jh-error');
        }
    }

    setIsDisabled(isDisabled) {
        this.isDisabled = isDisabled;
    }

    static html({id}) {
        return `<input id="${id}" class="jh-textfield" type="text">`;
    }

    static createElement(props) {
        const jhTextFieldHTML = this.html(props);
        const textfieldElement = super.createHTMLElement(jhTextFieldHTML);
        return textfieldElement;
    }
}

export default JHTextField;