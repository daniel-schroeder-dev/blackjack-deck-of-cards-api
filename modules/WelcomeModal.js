class WelcomeModal {
    constructor() {
        this.triggerSignupEvent = new Event("triggerSignup", { bubbles: true });

        this.element = document.createElement("div");
        this.element.id = "welcome-modal";
        this.element.classList.add("modal");
        this.element.textContent = "Welcome to Twenty-One!"
       
        this.button = document.createElement("button");
        this.button.textContent = "Click Here To Play";
        this.button.addEventListener("click", () => this.remove())
       
        this.element.appendChild(this.button);
    }

    render() {
        document.querySelector("main").append(this.element);
    }   

    remove() {
        this.element.dispatchEvent(this.triggerSignupEvent);
        this.element.remove();
    }

}

export { WelcomeModal };
