import { WelcomeModal} from "./modules/WelcomeModal.js"
import { SignupModal} from "./modules/SignupModal.js"
import { GameBoardModal} from "./modules/GameBoardModal.js"
import { Deck } from "./modules/Deck.js"
import { Dealer } from "./modules/Dealer.js"
import { Player } from "./modules/Player.js"


const player = new Player("Player");
const computer = new Player("Computer");
const dealer = new Dealer(player, computer);
const welcomeModal = new WelcomeModal();
const signupModal = new SignupModal(player);
const deck = new Deck();
const gameBoardModal = new GameBoardModal(deck, player, computer);


window.addEventListener("DOMContentLoaded", () => welcomeModal.render());

document.body.addEventListener("triggerSignup", () => signupModal.render());
document.body.addEventListener("triggerStart", () => gameBoardModal.render());

document.body.addEventListener("drawDealerCards", e => {
    dealer.distributeCards(e.detail);
});
