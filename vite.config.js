import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        dynamic: path.resolve(__dirname, "dynamic.html"),
      },
    },
  },
});
