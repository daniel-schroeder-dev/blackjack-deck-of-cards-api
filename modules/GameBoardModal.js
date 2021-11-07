import { buildDOMElement } from "../utils/helpers.js";

class GameBoardModal {
    constructor(player, dealer) {
        this.player = player;
        this.dealer = dealer;

        this.hitButton = buildDOMElement("button", "hit-button", "Hit");
        this.stayButton = buildDOMElement("button", "stay-button", "Stay");
        
        this.buttonContainer = buildDOMElement("div", "button-container");
        
        this.buttonContainer.append(this.hitButton);
        this.buttonContainer.append(this.stayButton);
        
        this.element = buildDOMElement("div", "game-board");

        this.element.append(this.dealer.element);
        this.element.append(this.player.element);
        this.element.append(this.buttonContainer);
    }

    render() {
        document.querySelector("main").append(this.element);
        this.player.render();
        this.dealer.render();
        this.dealer.firstDraw();
    }
}

export { GameBoardModal };
