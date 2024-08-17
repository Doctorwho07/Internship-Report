import { defineConfig } from "vite";

export default defineConfig({
  // Configuration basique de Vite
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
