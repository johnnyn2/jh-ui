import JHElement from "../core/jh-element.js";
import JHIconButton from "../icon-button/index.js";
import JHMenu from "../menu/index.js";

class JHIconButtonMenu extends JHElement{
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

    static html(iconFont, menuItems) {
        return `
            <div class="jh-menu-wrapper jh-icon-btn-menu">
                ${JHIconButton.html(iconFont)}
                ${JHMenu.html(menuItems)}
            </div>
        `
    }

    static createElement(iconFont, menuItems) {
        const jhIconBtnMenuHTML = this.html(iconFont, menuItems);
        const iconBtnMenuHtmlElement = super.createHTMLElement(jhIconBtnMenuHTML);
        return iconBtnMenuHtmlElement;
    }
}

export default JHIconButtonMenu;