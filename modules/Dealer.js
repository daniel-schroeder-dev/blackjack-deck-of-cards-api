import { Player } from "./Player.js";

class Dealer extends Player {
    constructor(username, player, deck) {
        super(username);
        this.player = player;
        this.deck = deck;
    }

    distributeCards(cards) {
        this.player.hand = cards.slice(0, 2);
        this.hand = cards.slice(2);
        const event = new CustomEvent("dealerDistributeCards", { bubbles: true });
        this.element.dispatchEvent(event);
    }
}

export { Dealer };
