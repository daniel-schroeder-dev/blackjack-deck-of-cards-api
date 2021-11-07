import { Player } from "./Player.js";

class Dealer extends Player {
    constructor(username, player, deck) {
        super(username);
        this.player = player;
        this.deck = deck;
    }

    async firstDraw() {
        const cards = await this.deck.draw(4);
        this.player.hand = cards.slice(0, 2);
        this.hand = cards.slice(2);
        this.element.dispatchEvent(
            new CustomEvent("dealerDistributeCards", { bubbles: true })
        );
    }
}

export { Dealer };
