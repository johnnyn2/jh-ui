import JHElement from "../core/jh-element.js";

/**
 * @author Johnny Ho
 */
class JHRadio extends JHElement {
    /**
     * 
     * @param {HTMLElement} radioEl HTML radio element
     * @param {String} [themeColor="rgba(0, 0, 0, 0.54)"] Checkbox theme in hex or rgba color code
     */
    constructor(radioEl, themeColor = 'rgba(0, 0, 0, 0.54)') {
        super(radioEl);
        this.jhRadio = radioEl;
        const radioInput = radioEl.querySelector('input[type="radio"]');
        const checkmark = radioEl.querySelector('.checkmark');
        const check = checkmark.querySelector('.check');
        this.isDisabled = false;
        this.isChecked = radioInput.checked;
        this.isError = false;
        this.themeColor = themeColor;
        checkmark.style.borderColor = themeColor;
        check.style.backgroundColor = themeColor;
        const ref = this;
        radioInput.addEventListener('click', function(e) {
            e.stopPropagation();
            if (ref.isDisabled) {
                e.preventDefault();
                return;
            }
            ref.setIsChecked(true);
            ref.setIsError(false);
        });
    }

    /**
     * @param {String} event Event string of HTML button
     * @param {Function} fn Handler function for the event
     * @returns {JHRadio} JHRadio reference
     */
    on(event, fn) {
        this.jhRadio.querySelector('input[type="radio"]').removeEventListener(event, fn);
        this.jhRadio.querySelector('input[type="radio"]').addEventListener(event, fn);
        return this;
    }

    /**
     * @param {Boolean} isChecked Check flag
     * @returns {JHRadio} JHRadio reference
     */
    setIsChecked(isChecked) {
        this.isChecked = isChecked;
        this.jhRadio.querySelector('input[type="radio"]').checked = isChecked;
        return this;
    }

    /**
     * @param {Boolean} isDisabled Enabled or disabled flag
     * @returns {JHRadio} JHRadio reference
     */
    setIsDisabled(isDisabled) {
        this.isDisabled = isDisabled;
        this.jhRadio.querySelector('input[type="radio"]').disabled = isDisabled;
        if (isDisabled) {
            this.jhRadio.classList.add('jh-disabled');
        } else {
            this.jhRadio.classList.remove('jh-disabled');
        }
        return this;
    }

    /**
     * @param {Boolean} isError Error flag 
     * @returns {JHRadio} JHRadio reference
     */
    setIsError(isError) {
        this.isError = isError;
        this.setIsChecked(!isError);
        const checkmark = this.jhRadio.querySelector('.checkmark');
        if (isError) {
            checkmark.classList.add('jh-error-radio-border');
        } else {
            checkmark.classList.remove('jh-error-radio-border');
        }
        return this;
    }

    /**
     * 
     * @param {Object} props Props of html JHRadio
     * @param {String} [props.id] Id of the radio
     * @param {Boolean} props.checked Check falg of the radio
     * @param {String} props.name Name of the input
     * @param {String} props.value Value of the input
     * @param {String} props.label Label of the radio
     * @returns {String} HTML string of JHRadio
     */
    static html(props) {
        const {id, checked, name, value, label} = props;
        return `
            <label ${typeof id !== 'undefined' && id !== '' ? `id="${id}"` : ''} class="jh-radio">
                <input type="radio" checked="${checked}" name="${name}" value="${value}">
                <span class="checkmark">
                    <span class="check"></span>
                </span>
                ${label}
            </label>
        `;
    }

    /**
     * 
     * @param {Object} props Props of html JHRadio
     * @param {String} [props.id] Id of the radio
     * @param {Boolean} props.checked Check flag of the radio
     * @param {String} props.name Name of the input
     * @param {String} props.value Value of the input
     * @param {String} props.label Label of the radio
     * @returns {HTMLElement} HTML element of JHRadio
     */
    static createElement(props) {
        const jhRadioHtml = this.html(props);
        const radioHtmlElement = super.createHTMLElement(jhRadioHtml);
        return radioHtmlElement;
    }
}

export default JHRadio;