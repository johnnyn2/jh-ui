import JHElement from '../core/jh-element.js';
import JHButton from '../button/index.js';

/**
 * @author Johnny Ho
 */
class JHIconButton extends JHButton {
    /**
     * @param {HTMLButtonElement} iconBtnEl HTML icon button element 
     */
    constructor(iconBtnEl) {
        super(iconBtnEl);
    }

    /**
     * @param {Object} props Props of html JHIconButton
     * @param {String} [props.id] Id of the icon button
     * @param {String} props.iconFont Icon font string from Font-Awesome-4.7.0
     * @returns {String} HTML string of JHIconButton
     * @description Get HTML string of JHIconButton
     */
    static html(props) {
        const {id, iconFont} = props;
        return `
            <button ${typeof id !== 'undefined' && id !== '' ? `id="${id}"` : ''} class="jh-btn jh-icon-btn">
                <i class="${iconFont}" aria-hidden="true"></i>
            </button>
        `
    }

    /**
     * @param {Object} props Props of html JHIconButton
     * @param {String} [props.id] Id of the icon button
     * @param {String} props.iconFont Icon font string from Font-Awesome-4.7.0
     * @returns {HTMLElement} HTML element of JHIconButton
     * @description Create a HTML element of JHIconButton
     */
    static createElement(props) {
        const jhButtonHtml = this.html(props);
        const buttonElement = super.createHTMLElement(jhButtonHtml);
        return buttonElement;
    }
}

export default JHIconButton;