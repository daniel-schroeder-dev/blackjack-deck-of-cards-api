class Deck {
    constructor() {
        this.BASE_API_URL = "https://deckofcardsapi.com/api/deck/";
        this.currentCards = [];
        this.new();
    }

    new() {
        fetch(this.BASE_API_URL + "new/shuffle/?deck_count=1")
            .then(response => response.json())
            .then(data => {
                this.deckID = data.deck_id;
            });
    }

    async draw(numCards) {
        const response = await fetch(
            `${this.BASE_API_URL}${this.deckID}/draw/?count=${numCards}`
        );
        const data = await response.json();
        return data.cards;
    }

    shuffle() {

    }
}

export { Deck };
