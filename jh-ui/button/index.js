import JHElement from '../core/jh-element.js';

class JHButton extends JHElement {
    constructor(buttonEl) {
        super(buttonEl);
        this.jhButton = buttonEl;
        this.isLoading = false;
        this.isDisabled = false;
        buttonEl.addEventListener("click", this.createRipple);
    }

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

    on(event, fn) {
        this.jhButton.removeEventListener(event, fn);
        this.jhButton.addEventListener(event, fn);
        return this;
    }

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

    setIsDisabled(isDisabled) {
        this.isDisabled = isDisabled;
        this.jhButton.disabled = isDisabled;
        if (isDisabled) {
            this.jhButton.classList.add("jh-disabled");
        } else {
            this.jhButton.classList.remove("jh-disabled");
        }
    }

    static html(label, theme) {
        return `
            <button class="jh-btn ${theme ? theme : "jh-default"}">${label}</button>
        `;
    }

    static createElement(label, theme) {
        const jhButtonHtml = this.html(label, theme);
        const btnHtmlElement = super.createHTMLElement(jhButtonHtml);
        return btnHtmlElement;
    }
}

export default JHButton;