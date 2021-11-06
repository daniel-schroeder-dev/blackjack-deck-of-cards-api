import { WelcomeModal} from "./modules/WelcomeModal.js"
import { SignupModal} from "./modules/SignupModal.js"
import { GameBoardModal} from "./modules/GameBoardModal.js"

const BASE_API_URL = "https://deckofcardsapi.com/api/deck/";

const welcomeModal = new WelcomeModal();
const signupModal = new SignupModal();
const gameBoardModal = new GameBoardModal();

window.addEventListener("DOMContentLoaded", () => welcomeModal.render());

document.body.addEventListener("triggerSignup", () => signupModal.render());

document.body.addEventListener("triggerStart", () => gameBoardModal.render());
