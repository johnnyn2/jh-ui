import JHElement from "../core/jh-element.js";

class JHRadio extends JHElement {
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

    on(event, fn) {
        this.jhRadio.querySelector('input[type="radio"]').removeEventListener(event, fn);
        this.jhRadio.querySelector('input[type="radio"]').addEventListener(event, fn);
        return this;
    }

    setIsChecked(isChecked) {
        this.isChecked = isChecked;
        this.jhRadio.querySelector('input[type="radio"]').checked = isChecked;
        return this;
    }

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

    static html({id, checked, name, value, label}) {
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

    static createElement({id, checked, name, value, label}) {
        const jhRadioHtml = this.html({id, checked, name, value, label});
        const radioHtmlElement = super.createHTMLElement(jhRadioHtml);
        return radioHtmlElement;
    }
}

export default JHRadio;