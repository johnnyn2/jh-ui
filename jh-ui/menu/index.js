import JHElement from '../core/jh-element.js';
import JHButton from '../button/index.js';

/**
 * @author Johnny Ho
 */
class JHMenu extends JHElement {
    /**
     * 
     * @param {HTMLElement} menuEl HTML menu element
     * @param {Array.<Function>} menuItemHandlers Array of click handler for each menu item
     */
    constructor(menuEl, menuItemHandlers) {
        super(menuEl);
        this.jhMenu = menuEl;
        const menuItems = menuEl.querySelectorAll('.jh-menu-item');
        const jhMenuItems = [];
        for(let i = 0; i < menuItems.length; i++) {
            const jhMenuItem = new JHButton(menuItems[i]);
            jhMenuItem.on('click', menuItemHandlers[i]);
            jhMenuItems.push(jhMenuItem);
        }
        this.jhMenuItems = jhMenuItems;
    }

    /**
     * @description Open the JHMenu
     */
    open() {
        this.jhMenu.classList.remove('hide');
    }

    /**
     * @description Close the JHMenu
     */
    close() {
        this.jhMenu.classList.add('hide');
    }

    /**
     * @param {Object} props Props of the html JHMenu 
     * @param {String} props.id Id of the menu
     * @param {{label: String}[]} props.menuItems Array of menu item objects
     * @returns {String} HTML string of the menu
     */
    static html(props) {
        const {id, menuItems} = props;
        return `
            <div ${typeof id !== 'undefined' && id !== '' ? `id="${id}"` : ''} class="jh-menu hide">
                ${menuItems.map(item => `<button class="jh-menu-item">${item.label}</button>`).join('')}
            </div>
        `
    }

    /**
     * @param {Object} props Props of the html JHMenu 
     * @param {String} props.id Id of the menu
     * @param {{label: String}[]} props.menuItems Array of menu item objects
     * @returns {HTMLElement} HTML element of the menu
     */
    static createElement(props) {
        const jhMenuHTML = this.html(props);
        const menuHtmlElement = super.createHTMLElement(jhMenuHTML);
        return menuHtmlElement;
    }
}

export default JHMenu;