import JHElement from "../core/jh-element.js";

/**
 * @author Johnny Ho
 */
class JHTextField extends JHElement {
    /**
     * @param {HTMLInputElement} textfield HTML input textfield
     */
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

    /**
     * @param {String} event Event string of HTML input textfield
     * @param {Function} fn Handler function for the event
     * @returns {JHTextField} JHTextField reference
     */
    on(event, fn) {
        this.jhTextfield.addEventListener(event, e => fn(e));
        return this;
    }

    /**
     * @returns {String} Value of the textfield
     */
    val() {
        return this.jhTextfield.value;
    }

    /**
     * @param  {...Object} validators Comma separated validation objects of JHValidation 
     * @returns {Boolean} True if the value of JHTextField passes all validation object checkings. Otherwise, it returns false.
     */
    validate(...validators) {
        const isValid = validators.every(v => v.result === true);                      
        this.setIsError(!isValid);
        return isValid;
    }

    /**
     * @param {Boolean} isError Error flag
     * @returns {JHTextField} JHTextField reference
     */
    setIsError(isError) {
        this.isError = isError;
        if (isError) {
            this.jhTextfield.classList.add('jh-error');
        } else {
            this.jhTextfield.classList.remove('jh-error');
        }
        return this;
    }

    /**
     * @param {Boolean} isDisabled Enabled or disabled flag
     * @returns {JHTextField} JHTextField reference
     */
    setIsDisabled(isDisabled) {
        this.isDisabled = isDisabled;
    }


    /**
     * @param {Object} props Props of html JHTextField
     * @param {String} [props.id] Id of the textfield
     * @param {String} props.name Name of the input textfield
     * @returns {String} HTML string template of the JHTextField
     */
    static html(props) {
        const {id, name} = props;
        return `<input ${typeof id !== 'undefined' && id !== '' ? `id="${id}"` : ''} class="jh-textfield" type="text" name="${name}">`;
    }

    /**
     * @param {Object} props Props of html JHTextField
     * @param {String} [props.id] Id of the textfield
     * @param {String} props.name Name of the input textfield
     * @returns {HTMLInputElement} HTML input element of the JHTextField
     */
    static createElement(props) {
        const jhTextFieldHTML = this.html(props);
        const textfieldElement = super.createHTMLElement(jhTextFieldHTML);
        return textfieldElement;
    }
}

export default JHTextField;