class GameBoardModal {
    constructor(deck, player, computer) {
        this.deck = deck;
        this.player = player;
        this.computer = computer;

        this.element = document.createElement("div");
        this.element.id = "game-board";

        this.buttonContainer = document.createElement("div");
        this.buttonContainer.id = "button-container";

        this.hitButton = document.createElement("button");
        this.hitButton.id = "hit-button";
        this.hitButton.textContent = "Hit";

        this.stayButton = document.createElement("button");
        this.stayButton.id = "stay-button";
        this.stayButton.textContent = "Stay";

        this.buttonContainer.append(this.hitButton);
        this.buttonContainer.append(this.stayButton);

        this.element.append(this.computer.element);
        this.element.append(this.player.element);
        this.element.append(this.buttonContainer);
    }

    render() {
        document.querySelector("main").append(this.element);
        this.player.render();
        this.computer.render();
        this.deck.new();
    }
}

export { GameBoardModal };
