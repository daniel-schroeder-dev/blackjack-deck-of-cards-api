import { Player } from "./Player.js";

class Computer extends Player {
    constructor() {
        this.hand = [];
        this.element = document.createElement("div");
        this.element.id = "computer";
    }

    render() {
        this.element.textContent = "Computer";
    }
}

export { Computer };
