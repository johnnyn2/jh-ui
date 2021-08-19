import JHElement from '../core/jh-element.js';
import JHTextField from '../textfield/index.js';

class JHTextFieldGroup extends JHElement {
    constructor(textfieldGroup) {
        super(textfieldGroup);
        this.jhTextfieldGroup = textfieldGroup;
        const jhErrTxt = textfieldGroup.querySelector('.jh-errtxt');
        this.jhErrTxt = jhErrTxt;
        const textfieldEl = textfieldGroup.querySelector('.jh-textfield');
        const jhTextField = new JHTextField(textfieldEl);
        this.jhTextField = jhTextField;
        this.jhTextField.on('input', e => {
            jhErrTxt.innerHTML = '&nbsp;';
            jhErrTxt.style.visibility = 'hidden';
            jhTextField.setIsError(false);
        })
    }

    validate(...validators) {
        const errObjs = validators.filter(v => !v.result);
        const isValid = errObjs.length <= 0;
        if (isValid) {
            this.jhErrTxt.innerHTML = '&nbsp;';
            this.jhErrTxt.style.visibility = 'hidden';
            this.jhTextField.setIsError(false);
        } else {
            this.jhErrTxt.innerHTML = errObjs[0].errTxt;
            this.jhErrTxt.style.visibility = 'visible';
            this.jhTextField.setIsError(true);
        }
        return isValid;
    }

    static html({textfieldGroupId, label, textfieldId, placeholder, name}) {
        return `
            <div ${typeof textfieldGroupId !== 'undefined' && textfieldGroupId !== '' ? `id="${textfieldGroupId}"` : ''} class="jh-textfield-group">
                <label for="${textfieldId}">${label}</label>
                <div class="jh-textfield-row">
                    <input id="${textfieldId}" class="jh-textfield" type="text" placeholder="${placeholder}" name="${name}">
                </div>
                <div class="jh-errtxt"></div>
            </div>
        `;
    }

    static createElement({textfieldGroupId, label, textfieldId, placeholder, name}) {
        const jhTextFieldGroupHTML = this.html({textfieldGroupId, label, textfieldId, placeholder, name});
        const textfieldGroupElement = super.createHTMLElement(jhTextFieldGroupHTML);
        return textfieldGroupElement;
    }
}

export default JHTextFieldGroup;