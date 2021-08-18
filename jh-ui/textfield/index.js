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

    val() {
        return this.jhTextfield.value;
    }

    isEmpty = () => typeof this.jhTextfield.value === 'undefined' || this.jhTextfield.value === '';

    isEmail = () => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.jhTextfield.value);

    isUrl = () => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(this.jhTextfield.value);

    isNumber = () => !isNaN(this.jhTextfield.value);

    withinRange = (min, max) => this.isNumber() &&  Number(this.jhTextfield.value) >= min && Number(this.jhTextfield.value) <= max; 

    validate(...validators) {
        const isValid = validators.every(v => v === true);                      
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

    }

    static createElement(props) {
        const jhTextFieldHTML = this.html(props);
        const textfieldElement = super.createHTMLElement(jhTextFieldHTML);
        return textfieldElement;
    }
}

export default JHTextField;