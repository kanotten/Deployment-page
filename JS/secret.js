// Exporting the function to load the Secret page
export function loadSecretPage() {
  const mainContent = document.querySelector("main");
  mainContent.innerHTML = `
        <section>
            <h2>Welcome to the Secret Page</h2>
            <p>This is a secret page. You can put secret content or Easter eggs here.</p>
        </section>
    `;
}
