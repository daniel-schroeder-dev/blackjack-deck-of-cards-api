import { WelcomeModal } from "./modules/WelcomeModal.js"
import { SignupModal } from "./modules/SignupModal.js"
import { GameBoardModal } from "./modules/GameBoardModal.js"
import { Deck } from "./modules/Deck.js"
import { Dealer } from "./modules/Dealer.js"
import { Player } from "./modules/Player.js"

const deck = new Deck();

const player = new Player("Player");
const dealer = new Dealer("Dealer", player, deck);

const welcomeModal = new WelcomeModal();
const signupModal = new SignupModal();

const gameBoardModal = new GameBoardModal(player, dealer);


window.addEventListener("DOMContentLoaded", () => welcomeModal.render());

document.body.addEventListener("triggerSignup", () => signupModal.render());
document.body.addEventListener("triggerGameBoard", e => {
    player.username = e.detail;
    gameBoardModal.render();
});

document.body.addEventListener("dealerDrawCards", e => {
    dealer.distributeCards(e.detail);
});
