import JHElement from '../core/jh-element.js';

/**
 * @author Johnny Ho
 */
class JHButton extends JHElement {
    /**
     * @param {HTMLButtonElement} buttonEl HTML button element
     */
    constructor(buttonEl) {
        super(buttonEl);
        this.jhButton = buttonEl;
        this.isLoading = false;
        this.isDisabled = false;
        buttonEl.addEventListener("click", this.createRipple);
    }

    /**
     * @param {Event} event Click event
     */
    createRipple(event) {
        const button = event.currentTarget;
    
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
    
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("jh-ripple");
    
        const ripple = button.getElementsByClassName("jh-ripple")[0];
    
        if (ripple) {
            ripple.remove();
        }
    
        button.appendChild(circle);
    }

    /**
     * @param {String} event Event string of HTML button
     * @param {Function} fn Handler function for the event
     * @returns {JHButton} JHButton reference
     */
    on(event, fn) {
        this.jhButton.removeEventListener(event, fn);
        this.jhButton.addEventListener(event, fn);
        return this;
    }


    /**
     * @param {Boolean} isLoading Loading or idle flag
     */
    setIsLoading(isLoading) {
        this.isLoading = isLoading;
        if (isLoading) {
            this.jhButton.classList.add("loading");
            this.setIsDisabled(true);
        } else {
            this.jhButton.classList.remove("loading");
            this.setIsDisabled(false);
        }
    }

    /**
     * @param {Boolean} isDisabled Enabled or disabled flag
     */
    setIsDisabled(isDisabled) {
        this.isDisabled = isDisabled;
        this.jhButton.disabled = isDisabled;
        if (isDisabled) {
            this.jhButton.classList.add("jh-disabled");
        } else {
            this.jhButton.classList.remove("jh-disabled");
        }
    }

    /**
     * @param {Object} props Props of html JHButton
     * @param {String} [props.id] Id of the button
     * @param {String} props.label Label of the button
     * @param {String} [props.theme] Theme of the button 
     * @returns {String} HTML string of JHButton
     */
    static html(props) {
        const {id, label, theme} = props;
        return `
            <button ${id && id !== '' ? `id="${id}"` : ''} class="jh-btn ${theme ? theme : "jh-default"}">${label}</button>
        `;
    }

    /**
     * @param {Object} props Props of html JHButton
     * @param {String} [props.id] Id of the button
     * @param {String} props.label Label of the button
     * @param {String} props.theme Theme of the button 
     * @returns {HTMLElement} HTML element of JHButton
     */
    static createElement(props) {
        const jhButtonHtml = this.html(props);
        const btnHtmlElement = super.createHTMLElement(jhButtonHtml);
        return btnHtmlElement;
    }
}

export default JHButton;