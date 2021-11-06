class Deck {
    constructor() {
        this.BASE_API_URL = "https://deckofcardsapi.com/api/deck/";
        this.element = document.createElement("div");
        this.drawCardsEvent = null;
        
        this.deckID = null;
        this.currentCards = [];
        
        document.body.append(this.element);
    }

    new() {
        fetch(this.BASE_API_URL + "new/shuffle/?deck_count=1")
            .then(response => response.json())
            .then(data => {
                this.deckID = data.deck_id
                this.draw(4, "dealer");
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
        if (player === "dealer") {
            this.drawCardsEvent = new CustomEvent(
                "drawDealerCards", { detail: cards, bubbles: true }
            );
        } else if (player === "computer") {
            this.drawCardsEvent = new CustomEvent(
                "drawComputerCards", { detail: cards, bubbles: true }
            );
        } else if (player == "player") {
            this.drawCardsEvent = new CustomEvent(
                "drawPlayerCards", { detail: cards, bubbles: true }
            );
        }
        this.element.dispatchEvent(this.drawCardsEvent);
    }

    shuffle() {

    }
}

export { Deck };
