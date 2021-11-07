class Deck {
    constructor() {
        this.BASE_API_URL = "https://deckofcardsapi.com/api/deck/";
        this.element = document.createElement("div");
        this.drawCardsEvent = null;
        
        this.deckID = null;
        this.currentCards = [];
        
        document.body.append(this.element);
        this.new();
    }

    new() {
        fetch(this.BASE_API_URL + "new/shuffle/?deck_count=1")
            .then(response => response.json())
            .then(data => {
                this.deckID = data.deck_id
            });
    }

    draw(numCards) {
        fetch(`${this.BASE_API_URL}${this.deckID}/draw/?count=${numCards}`)
            .then(response => response.json())
            .then(data => {
                this.distributeCards(data.cards)
            });
    }

    distributeCards(cards) {
        this.element.dispatchEvent(new CustomEvent(
            "dealerDrawCards", { detail: cards, bubbles: true }
        ));
    }

    shuffle() {

    }
}

export { Deck };
