import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
      },
    },
  },
  optimizeDeps: {
    include: ["bootstrap", "bootstrap/dist/js/bootstrap.bundle.min.js"],
  },
});
