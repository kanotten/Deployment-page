import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // Serve files from the root directory
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        dynamic: "dynamic.html", // Include your dynamic.html as an entry point
      },
    },
  },
});
