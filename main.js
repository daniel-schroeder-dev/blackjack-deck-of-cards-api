import { WelcomeModal} from "./modules/WelcomeModal.js"
import { SignupModal} from "./modules/SignupModal.js"

const BASE_API_URL = "https://deckofcardsapi.com/api/deck/";

const welcomeModal = new WelcomeModal();
const signupModal = new SignupModal();

window.addEventListener("DOMContentLoaded", e => {
    welcomeModal.render();
});

document.body.addEventListener("triggerSignup", e => {
    signupModal.render();
});

document.body.addEventListener("triggerPlay", e => {
    
});
