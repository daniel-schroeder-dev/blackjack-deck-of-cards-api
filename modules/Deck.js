class Deck {
    constructor() {
        this.BASE_API_URL = "https://deckofcardsapi.com/api/deck/";
        this.deckID = null;
        this.currentCards = [];
    }

    new() {
        fetch(this.BASE_API_URL + "new")
            .then(response => response.json())
            .then(data => {
                this.deckID = data.deck_id
                this.draw(4, "both");
            });
    }

    draw(numCards, player) {
        fetch(`${this.BASE_API_URL}${this.deckID}/draw/?count=${numCards}`)
            .then(response => response.json())
            .then(data => {
                this.distributeCards(data.cards, player)
            });
    }

    distributeCards(cards, player) {
        if (player === "both") {
            console.log("cards to both players", cards);
        } else if (player === "computer") {
            console.log("cards to computer", cards);
        } else if (player == "player") {
            console.log("cards to player", cards);
        }
    }

    shuffle() {

    }
}

export { Deck };
