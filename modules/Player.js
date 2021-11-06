class Player {
    constructor(username) {
        this.hand = [];
        this.username = username;
        this.element = document.createElement("div");
        this.element.id = username.toLowerCase();

        this.usernameElement = document.createElement("p");

        this.handContainer = document.createElement("div");
        this.handContainer.classList.add("hand-container");
        
        this.element.append(this.usernameElement);
        this.element.append(this.handContainer);

        document.body.addEventListener("dealerDistributeCards", () => this.render())
    }

    render() {
        this.usernameElement.textContent = this.username;
        if (this.hand) {
            this.hand.forEach(card => {
                const imageElement = document.createElement("img");
                imageElement.src = card.image;
                this.handContainer.append(imageElement);
            });
        }
    }
}

export { Player };
