# 🚗 Kentucky Car Wash — Application Web & PWA React

![Kentucky Car Wash](/images/hero_car_wash.jpg)

> **Kentucky Car Wash** est un centre d'entretien et de lavage automobile premium situé à **Kihisi** (Route Aéroport, à côté de African Oil). Cette application web moderne, réécrite avec React.js et Vite, est transformée en une Progressive Web App (PWA) de haute performance fonctionnant hors-ligne.

---

## 🌟 Points Forts & Fonctionnalités

- ⚡ **Migration 100% React.js & Vite** : Performance maximale, rechargement instantané et structure en composants réutilisables.
- 🎨 **Design System "Obsidian Apex"** : Défini avec UI UX Pro Max et Google Stitch MCP. Esthétique sombre de studio detailing automobile avec accents cyan électrique et verre poli (glassmorphic UI).
- 📲 **Progressive Web App (PWA)** : Installable sur smartphones (Android/iOS) et PC. Cache intelligent Workbox pour une consultation fluide hors ligne.
- 📱 **Intégration WhatsApp & Appel Direct** : Prise de contact instantanée au `+243 892 821 544` avec messages préremplis pour chaque formule de lavage.
- 🖼️ **Galerie Dynamique & Modal Lightbox** : Visualisation haute résolution des prestations pour automobiles, deux-roues et poids lourds.
- ♿ **SEO & Accessibilité WCAG AA** : HTML5 sémantique, métadonnées Open Graph, contrastes optimisés et prise en charge complète du clavier.

---

## 🛠️ Stack Technique

- **Framework Frontend** : React.js (JSX, Hooks)
- **Tooling & Bundler** : Vite
- **PWA / Service Worker** : `vite-plugin-pwa` + `workbox-build`
- **Icônes** : Lucide React
- **Design & Maquettes** : Google Stitch MCP + UI UX Pro Max Skill
- **Génération d'images** : Gemini Image Generation Engine
- **Déploiement** : Compatible Vercel, Netlify, GitHub Pages

---

## 📂 Structure du Projet

```text
Kentucky_car_wash/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   └── GalleryModal.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── OfflineNotifier.jsx
│   │   │   └── PwaInstaller.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── WhyUs.jsx
│   │       ├── Services.jsx
│   │       ├── Gallery.jsx
│   │       ├── Pricing.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Faq.jsx
│   │       └── Contact.jsx
│   ├── data/
│   │   └── carWashData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── images/
├── icons/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Installation & Lancement Local

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/ObediJustin/Kentucky_car_wash.git
   cd Kentucky_car_wash
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

4. **Compiler pour la production (avec SW & Manifest)** :
   ```bash
   npm run build
   ```

5. **Prévisualiser le build de production** :
   ```bash
   npm run preview
   ```

---

## 📞 Informations Commerciales

- **Établissement** : Kentucky Car Wash
- **Adresse** : Route Aéroport, Kihisi, à côté de African Oil, RDC
- **Téléphone / WhatsApp** : `+243 892 821 544`
- **E-mail** : `kentucky-car-wash@outlook.fr`
- **Domaine public** : `kentucky-car-wash.netlify.app`

---

## 📄 Licence

Projet développé avec passion pour Kentucky Car Wash par ObediJustin.
