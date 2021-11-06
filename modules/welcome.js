class WelcomeModal {
    #element = null;
    constructor() {
        this.#element = document.createElement("div");
        thie.#element.id = "welcome-modal";
    }

    render() {
        document.querySelector("main").append(this.#element);
    }   
}

export { WelcomeModal };
