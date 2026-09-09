# Layouts

## Page unique — `index.html`

La structure commune est définie dans ce fichier statique : header fixe, navigation desktop/mobile, contenu en sections et footer.

```html
<header class="site-header">
  <a class="brand" href="#top" aria-label="Retour en haut">
    <img src="assets/Logo.svg" alt="APCH Studio" width="145" height="50">
  </a>
  <nav class="desktop-nav" aria-label="Navigation principale">
    <a href="#projets">Projets</a><a href="#services">Services</a>
    <a href="#methode">Méthode</a><a href="#apropos">À propos</a>
  </nav>
  <a class="header-cta" href="#contact">Parler de votre projet <span aria-hidden="true">↗</span></a>
  <button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span></button>
</header>
<div class="mobile-menu" aria-hidden="true">
  <a href="#projets">Projets</a><a href="#services">Services</a>
  <a href="#methode">Méthode</a><a href="#apropos">À propos</a>
  <a href="#contact">Parler de votre projet</a>
</div>
<footer>
  <a class="brand" href="#top" aria-label="Retour en haut"><img src="assets/Logo.svg" alt="APCH Studio" width="145" height="50"></a>
  <p>Création de sites web — 2026</p><a href="#top">Retour en haut ↑</a>
</footer>
```

Source complet : `index.html`. Les styles de layout sont dans `style.css`.
