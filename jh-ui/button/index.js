class JHButton {
    constructor(buttonEl) {
        this.jhButton = buttonEl;
        buttonEl.addEventListener("click", this.createRipple);
    }

    createRipple(event) {
        const button = event.currentTarget;
    
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
    
        console.log('clientX: ', event.clientX);
        console.log('clientY: ', event.clientY);
        console.log('offset left: ', button.offsetLeft);
        console.log('offset top: ', button.offsetTop);
        console.log('radius: ', radius);
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
        this.jhButton.addEventListener(event, fn)
    }
}

export default JHButton;