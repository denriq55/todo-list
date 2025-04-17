import "./styles.css";
import { homePage } from './home.js'
import { menuPage } from './menu.js'
import { contactPage } from './contact.js'
 
export const mainContainer = document.getElementById("content");
const buttons = document.querySelectorAll(".tab-btn");


export function loadPage(page) {
    mainContainer.replaceChildren();
    page()
}


buttons.forEach((tabBtn) => {
    tabBtn.addEventListener("click", (e) => {
        
        if (tabBtn.id === "home") {
            loadPage(homePage);
        } else if (tabBtn.id === "menu") {
            loadPage(menuPage);
        } else if (tabBtn.id === "contact") {
            loadPage(contactPage);
        }

        buttons.forEach((clickedBtn) => clickedBtn.classList.remove("active"));
        tabBtn.classList.add("active");

        
    });
});

loadPage(homePage)