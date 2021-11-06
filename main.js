import { WelcomeModal } from "./modules/WelcomeModal.js"

const BASE_API_URL = "https://deckofcardsapi.com/api/deck/";

window.addEventListener("DOMContentLoaded", e => {
    const welcomeModal = new WelcomeModal();
    welcomeModal.render();
})

