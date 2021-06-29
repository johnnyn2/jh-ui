import JHElement from '../core/jh-element.js';
import JHButton from '../button/index.js';

class JHIconButton extends JHButton {
    constructor(iconBtnEl) {
        super(iconBtnEl);
    }

    static html(iconFont) {
        return `
            <button class="jh-btn jh-icon-btn">
                <i class="${iconFont}" aria-hidden="true"></i>
            </button>
        `
    }

    static createElement(iconFont) {
        const jhButtonHtml = this.html(iconFont);
        const buttonElement = super.createHTMLElement(jhButtonHtml);
        return buttonElement;
    }
}

export default JHIconButton;