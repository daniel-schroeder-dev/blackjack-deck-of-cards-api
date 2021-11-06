class Dealer {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
        this.element = document.createElement("div");
        this.element.id = "dealer";
        document.body.append(this.element);
    }

    distributeCards(cards) {
        this.player.hand = cards.slice(0, 2);
        this.computer.hand = cards.slice(2);
        const event = new CustomEvent("dealerDistributeCards", { bubbles: true });
        this.element.dispatchEvent(event);
    }
}

export { Dealer };
