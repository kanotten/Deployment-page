// vite.config.js
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        login: path.resolve(__dirname, "auth/login/index.html"),
        register: path.resolve(__dirname, "auth/register/index.html"),
        profile: path.resolve(__dirname, "profile/index.html"),
        post: path.resolve(__dirname, "post/index.html"),
        postCreate: path.resolve(__dirname, "post/create/index.html"),
        postEdit: path.resolve(__dirname, "post/edit/index.html"),
      },
    },
  },
});
