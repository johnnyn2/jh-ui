import JHElement from '../core/jh-element.js';
import JHTextField from '../textfield/index.js';

class JHTextFieldGroup extends JHElement {
    constructor(textfieldGroup) {
        super(textfieldGroup);
        this.jhTextfieldGroup = textfieldGroup;
        const jhErrTxt = textfieldGroup.querySelector('.jh-errtxt');
        const textfieldEl = textfieldGroup.querySelector('.jh-textfield');
        const jhTextField = new JHTextField(textfieldEl);
        this.jhTextField = jhTextField;
    }

    validate(...validators) {
        const isValid = this.jhTextField.validate(validators);
        if (isValid) {
            this.jhErrTxt.innerHTML = '&nbsp;';
        } else {
            
        }
    }

    static html() {

    }

    static createElement(props) {
        const jhTextFieldGroupHTML = this.html(props);
        const textfieldGroupElement = super.createHTMLElement(jhTextFieldGroupHTML);
        return textfieldGroupElement;
    }
}

export default JHTextFieldGroup;