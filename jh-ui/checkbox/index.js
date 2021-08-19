import JHElement from '../core/jh-element.js';

/**
 * @author Johnny Ho
 */
class JHCheckbox extends JHElement {
    /**
     * @param {HTMLElement} checkboxEl HTML Input checkbox element
     * @param {String} [themeColor="rgba(0, 0, 0, 0.54)"] Checkbox theme in hex or rgba color code
     */
    constructor(checkboxEl, themeColor = 'rgba(0, 0, 0, 0.54)') {
        super(checkboxEl);
        const checkboxInput = checkboxEl.querySelector('input[type="checkbox"]');
        const checkmark = checkboxEl.querySelector('.checkmark');
        this.jhCheckbox = checkboxEl;
        this.isChecked = checkboxInput.checked;
        this.isError = false;
        this.isDisabled = false;
        this.themeColor = themeColor;
        checkmark.style.borderColor = this.isChecked ? 'transparent' : themeColor;
        checkmark.style.backgroundColor = this.isChecked ? themeColor : '';
        const ref = this;
        checkboxInput.addEventListener('click', function(e) {
            e.stopPropagation();
            if (ref.isDisabled) {
                e.preventDefault();
                return;
            }
            ref.setIsChecked(!ref.isChecked);
            ref.setIsError(false);
        })
    }

    /**
     * @param {String} event Event string of HTML checkbox
     * @param {Function} fn Handler function for the event
     * @returns {JHCheckbox} JHCheckbox reference
     */
    on(event, fn) {
        this.jhCheckbox.querySelector('input[type="checkbox"]').removeEventListener(event, fn);
        this.jhCheckbox.querySelector('input[type="checkbox"]').addEventListener(event, fn);
        return this;
    }

    /**
     * @param {Boolean} isChecked Check flag
     * @returns {JHCheckbox} JHCheckbox reference
     */
    setIsChecked(isChecked) {
        this.isChecked = isChecked;
        this.jhCheckbox.querySelector('input[type="checkbox"]').checked = isChecked;
        const checkmark = this.jhCheckbox.querySelector('.checkmark');
        checkmark.style.backgroundColor = this.isChecked ? this.themeColor : '';
        checkmark.style.borderColor =  this.isChecked ? 'transparent' : this.themeColor;
        return this;
    }

    /**
     * @param {Boolean} isError Error flag 
     * @returns {JHCheckbox} JHCheckbox reference
     */
    setIsError(isError) {
        this.isError = isError;
        const checkmark = this.jhCheckbox.querySelector('.checkmark');
        if (isError) {
            checkmark.classList.add('jh-error');
        } else {
            checkmark.classList.remove('jh-error');
        }
        return this;
    }

    /**
     * @param {Boolean} isDisabled Enabled or disabled flag
     * @returns {JHCheckbox} JHCheckbox reference
     */
    setIsDisabled(isDisabled) {
        this.isDisabled = isDisabled;
        this.jhCheckbox.querySelector('input[type="checkbox"]').disabled = isDisabled;
        if (isDisabled) {
            this.jhCheckbox.classList.add('jh-disabled');
        } else {
            this.jhCheckbox.classList.remove('jh-disabled');
        }
        return this;
    }

    /**
     * 
     * @param {Object} props Props of html JHCheckbox
     * @param {String} [props.id] Id of the checkbox
     * @param {Boolean} props.checked Check falg of the checkbox
     * @param {String} props.name Name of the input
     * @param {String} props.value Value of the input
     * @param {String} props.label Label of the checkbox
     * @returns {String} HTML string of JHCheckbox
     */
    static html(props) {
        const {id, checked, name, value, label} = props;
        return `
            <label ${typeof id !== 'undefined' && id !== '' ? `id="${id}"` : ''} class="jh-checkbox">
                <input type="checkbox" checked="${checked}" name="${name}" value="${value}">
                <span class="checkmark">
                    <span class="check"></span>
                </span>
                ${label}
            </label>
        `;
    }

    /**
     * 
     * @param {Object} props Props of html JHCheckbox
     * @param {String} [props.id] Id of the checkbox
     * @param {Boolean} props.checked Check flag of the checkbox
     * @param {String} props.name Name of the input
     * @param {String} props.value Value of the input
     * @param {String} props.label Label of the checkbox
     * @returns {HTMLElement} HTML element of JHCheckbox
     */
    static createElement(props) {
        const jhCheckboxHtml = this.html(props);
        const checkboxHtmlElement = super.createHTMLElement(jhCheckboxHtml);
        return checkboxHtmlElement;
    }
}

export default JHCheckbox;