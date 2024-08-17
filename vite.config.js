import { defineConfig } from "vite";

export default defineConfig({
  // Options de configuration
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "/src/about.html",
        entreprise: "/src/entreprise.html",
        articles: "/src/articles.html",
        contact: "/src/contact.html",
        bilan: "/src/bilan.html",
        sitemap: "/src/sitemap.html",
        mentions: "/src/mentions.html",
        remerciements: "/src/remerciements.html",
      },
    },
  },
  optimizeDeps: {
    include: ["bootstrap", "bootstrap/dist/js/bootstrap.bundle.min.js"],
  },
});
