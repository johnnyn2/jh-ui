import JHElement from '../core/jh-element.js';

class JHCheckbox extends JHElement {
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
            if (ref.isDisabled) {
                e.preventDefault();
                return;
            }
            ref.setIsChecked(!ref.isChecked);
            ref.setIsError(false);
        })
    }

    setIsChecked(isChecked) {
        this.isChecked = isChecked;
        this.jhCheckbox.querySelector('input[type="checkbox"]').checked = isChecked;
        const checkmark = this.jhCheckbox.querySelector('.checkmark');
        checkmark.style.backgroundColor = this.isChecked ? this.themeColor : '';
        checkmark.style.borderColor =  this.isChecked ? 'transparent' : this.themeColor;
        return this;
    }

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

    static html() {
        
    }

    static createElement() {

    }
}

export default JHCheckbox;