import JHElement from '../core/jh-element.js';
import JHButton from '../button/index.js';

class JHMenu extends JHElement {
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

    open() {
        this.jhMenu.classList.remove('hide');
    }

    close() {
        this.jhMenu.classList.add('hide');
    }

    static html(menuItems) {
        return `
            <div class="jh-menu hide">
                ${menuItems.map(item => `<button class="jh-menu-item">${item.label}</button>`).join('')}
            </div>
        `
    }

    static createElement(menuItems) {
        const jhMenuHTML = this.html(menuItems);
        const menuHtmlElement = super.createHTMLElement(jhMenuHTML);
        return menuHtmlElement;
    }
}

export default JHMenu;