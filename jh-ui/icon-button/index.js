import JHElement from '../core/jh-element.js';
import JHButton from '../button/index.js';

class JHIconButton extends JHButton {
    constructor(iconBtnEl) {
        super(iconBtnEl);
    }

    static html({id, iconFont}) {
        return `
            <button ${typeof id !== 'undefined' && id !== '' ? `id="${id}"` : ''} class="jh-btn jh-icon-btn">
                <i class="${iconFont}" aria-hidden="true"></i>
            </button>
        `
    }

    static createElement({id, iconFont}) {
        const jhButtonHtml = this.html({id, iconFont});
        const buttonElement = super.createHTMLElement(jhButtonHtml);
        return buttonElement;
    }
}

export default JHIconButton;