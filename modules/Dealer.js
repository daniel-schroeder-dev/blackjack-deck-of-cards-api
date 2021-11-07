import { Player } from "./Player.js";

class Dealer extends Player {
    constructor(username, player) {
        super(username);
        this.player = player;
    }

    distributeCards(cards) {
        this.player.hand = cards.slice(0, 2);
        this.hand = cards.slice(2);
        const event = new CustomEvent("dealerDistributeCards", { bubbles: true });
        this.element.dispatchEvent(event);
    }
}

export { Dealer };
