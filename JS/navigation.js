// Importing modules
import { loadBuildPage } from "./build.js";
import { loadSecretPage } from "./secret.js";

// Function to switch between pages based on navigation selection
export function initializeNavigation() {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.dataset.page;

      if (page === "build") {
        loadBuildPage();
      } else if (page === "secret") {
        loadSecretPage();
      }
    });
  });

  // Load the Build page by default on initial page load
  loadBuildPage();
}

// Call initializeNavigation to set up navigation event listeners
initializeNavigation();
