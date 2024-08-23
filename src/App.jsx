import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Entreprise from "./pages/Entreprise";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Bilan from "./pages/Bilan";
import MentionsLegales from "./pages/MentionsLegales";
import Remerciements from "./pages/Remerciements";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteMap from "./pages/SiteMap";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bilan" element={<Bilan />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/remerciements" element={<Remerciements />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
    <Footer />
  </Router>
);

export default App;
