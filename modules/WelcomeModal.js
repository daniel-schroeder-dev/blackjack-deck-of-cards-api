class WelcomeModal {
    constructor() {
        this.element = document.createElement("div");
        this.element.id = "welcome-modal";
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
        this.element.remove();
    }

}

export { WelcomeModal };
