import JHButton from './jh-ui/button/index.js';
import JHMenu from './jh-ui/menu/index.js';
import JHIconButton from './jh-ui/icon-button/index.js';

document.addEventListener("DOMContentLoaded", e => {
    const buttons = document.getElementsByClassName("jh-btn");
    for(const button of buttons) {
        const jhBtn = new JHButton(button);
        jhBtn.on('click', e => console.log('listener: ', e));
    }

    const menus = document.getElementsByClassName("jh-menu");
    for (const menu of menus) {
        new JHMenu(menu);
    }

    const iconBtns = document.getElementsByClassName("jh-icon-btn");
    for (const iconBtn of iconBtns) {
        const jhIconBtn = new JHIconButton(iconBtn);
        jhIconBtn.on('click', e => console.log('icon btn listener: ', e));
    }
})