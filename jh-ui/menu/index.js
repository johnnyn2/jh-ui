class JHMenu {
    constructor(menuEl) {
        this.jhMenu = menuEl;
    }
    open() {
        this.jhMenu.classList.remove('hide');
    }
    close() {
        this.jhMenu.classList.add('hide');
    }
}

export default JHMenu;