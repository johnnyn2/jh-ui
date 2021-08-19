import JHElement from '../core/jh-element.js';
import JHTextField from '../textfield/index.js';

/**
 * @author Johnny Ho
 */
class JHTextFieldGroup extends JHElement {
    /**
     * @param {HTMLElement} textfieldGroup HTML textfield group element
     */
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

    /**
     * @param  {...Object} validators Comma separated validation objects of JHValidation 
     * @returns {Boolean} True if the value of JHTextField passes all validation object checkings. Otherwise, it returns false.
     */
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

    /**
     * @param {Object} props Props of html JHTextFieldGroup
     * @param {String} [props.textfieldGroupId] Id of the textfield group
     * @param {String} props.label Label of the textfield
     * @param {String} [props.textfieldId] Id of the textfield
     * @param {String} [props.placeholder] Placeholder of the textfield
     * @param {String} props.name Name of the input textfield
     * @returns {String} HTML string template of the JHTextFieldGroup
     */
    static html(props) {
        const {textfieldGroupId, label, textfieldId, placeholder, name} = props;
        return `
            <div ${typeof textfieldGroupId !== 'undefined' && textfieldGroupId !== '' ? `id="${textfieldGroupId}"` : ''} class="jh-textfield-group">
                <label for="${textfieldId}">${label}</label>
                <div class="jh-textfield-row">
                    <input id="${textfieldId}" class="jh-textfield" type="text" ${typeof placeholder !== 'undefined' && placeholder !== '' ? `placeholder="${placeholder}"` : ''} name="${name}">
                </div>
                <div class="jh-errtxt"></div>
            </div>
        `;
    }

    /**
     * @param {Object} props Props of html JHTextFieldGroup
     * @param {String} [props.textfieldGroupId] Id of the textfield group
     * @param {String} props.label Label of the textfield
     * @param {String} [props.textfieldId] Id of the textfield
     * @param {String} [props.placeholder] Placeholder of the textfield
     * @param {String} props.name Name of the input textfield
     * @returns {HTMLElement} HTML element of the JHTextFieldGroup
     */
    static createElement(props) {
        const jhTextFieldGroupHTML = this.html(props);
        const textfieldGroupElement = super.createHTMLElement(jhTextFieldGroupHTML);
        return textfieldGroupElement;
    }
}

export default JHTextFieldGroup;