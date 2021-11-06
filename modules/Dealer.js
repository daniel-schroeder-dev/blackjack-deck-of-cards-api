class Dealer {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
    }

    distributeCards(cards) {
        console.log("Dealer distributing", cards);
    }
}

export { Dealer };
