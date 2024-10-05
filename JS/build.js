// Exporting the function to load the Build page
export function loadBuildPage() {
  const mainContent = document.querySelector("main");
  mainContent.innerHTML = `
        <section>
            <h2>Welcome to the Build Page</h2>
            <p>This is the content for the Build page. You can put any build-related information here.</p>
        </section>
    `;
}
