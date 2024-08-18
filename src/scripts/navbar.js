export default function renderNavbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#" id="homeLink">Accueil</a>

        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <!-- Category: Information -->
            <li class="nav-item">
              <a class="nav-link button-link" href="#" id="aboutLink">À propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link button-link" href="#" id="entrepriseLink">Entreprise</a>
            </li>

            <!-- Category: Content -->
            <li class="nav-item">
              <a class="nav-link button-link" href="#" id="articlesLink">Articles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link button-link" href="#" id="contactLink">Contact</a>
            </li>

            <!-- Category: Reports -->
            <li class="nav-item">
              <a class="nav-link button-link" href="#" id="bilanLink">Bilan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link button-link" href="#" id="sitemapLink">Sitemap</a>
            </li>

            <!-- Category: Legal -->
            <li class="nav-item">
              <a class="nav-link button-link" href="#" id="mentionsLink">Mentions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link button-link" href="#" id="remerciementsLink">Remerciements</a>
            </li>
          </ul>

          <!-- Theme Toggle - Positioned at the right end -->
          <div class="ml-auto theme-switch-wrapper">
            <label class="theme-switch" for="theme-toggle">
              <input type="checkbox" id="theme-toggle" />
              <span class="slider"></span>
            </label>
            <span id="theme-label">Clair</span>
          </div>
        </div>
      </div>
    </nav>
  `;
}
