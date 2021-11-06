import { WelcomeModal} from "./modules/WelcomeModal.js"
import { SignupModal} from "./modules/SignupModal.js"
import { GameBoardModal} from "./modules/GameBoardModal.js"
import { Deck } from "./modules/Deck.js"


const welcomeModal = new WelcomeModal();
const signupModal = new SignupModal();
const deck = new Deck();
const gameBoardModal = new GameBoardModal(deck);


window.addEventListener("DOMContentLoaded", () => welcomeModal.render());

document.body.addEventListener("triggerSignup", () => signupModal.render());
document.body.addEventListener("triggerStart", () => gameBoardModal.render());
