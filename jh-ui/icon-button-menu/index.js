import JHElement from "../core/jh-element.js";
import JHIconButton from "../icon-button/index.js";
import JHMenu from "../menu/index.js";

/**
 * @author Johnny Ho
 */
class JHIconButtonMenu extends JHElement{
    /**
     * @param {HTMLElement} iconBtnMenu HTML icon button menu element
     * @param {Array.<Function>} menuItemHandlers Array of click handler for each menu item
     */
    constructor(iconBtnMenu, menuItemHandlers) {
        super(iconBtnMenu);
        this.iconBtnMenu = iconBtnMenu;
        this.jhIconBtn = new JHIconButton(iconBtnMenu.querySelector('.jh-icon-btn'));
        this.jhIconBtn.on('click', () => {
            this.jhMenu.open();
        }).on('blur', () => {
            this.jhMenu.close();
        })
        this.jhMenu = new JHMenu(iconBtnMenu.querySelector('.jh-menu'), menuItemHandlers);
    }

    /**
     * 
     * @param {Object} props Props of the html JHIconButtonMenu
     * @param {String} [props.id] Id of the icon button menu
     * @param {String} props.iconFont Icon font string from Font-Awesome-4.7.0
     * @param {{label: String}[]} props.menuItems Array of menu item objects
     * @returns {String} HTML string of icon button menu
     */
    static html(props) {
        const {id, iconFont, menuItems} = props;
        return `
            <div ${typeof id !== 'undefined' && id !== '' ? `id="${id}"` : ''} class="jh-menu-wrapper jh-icon-btn-menu">
                ${JHIconButton.html({iconFont})}
                ${JHMenu.html({menuItems})}
            </div>
        `
    }

    /**
     * 
     * @param {Object} props Props of the html JHIconButtonMenu
     * @param {String} [props.id] Id of the icon button menu
     * @param {String} props.iconFont Icon font string from Font-Awesome-4.7.0
     * @param {{label: String}[]} props.menuItems Array of menu item objects
     * @returns {HTMLElement} HTML element of icon button menu
     */
    static createElement({id, iconFont, menuItems}) {
        const jhIconBtnMenuHTML = this.html({id, iconFont, menuItems});
        const iconBtnMenuHtmlElement = super.createHTMLElement(jhIconBtnMenuHTML);
        return iconBtnMenuHtmlElement;
    }
}

export default JHIconButtonMenu;