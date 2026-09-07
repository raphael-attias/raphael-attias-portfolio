# Portfolio — Raphaël Attias

Portfolio professionnel : cybersécurité, infrastructure et agents IA.
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Three.js.
100 % statique, aucun backend, aucune clé d'API.

## Lancer en local

```bash
npm install && npm run dev
```

Le site est servi sur http://localhost:3000.

Autres commandes :

```bash
npm run build
```

```bash
npm run typecheck
```

```bash
npm run lint
```

## Déployer sur Vercel

1. Pousser le dépôt sur GitHub.
2. Sur vercel.com, **Add New… → Project**, puis importer le dépôt.
3. Ne rien changer : Vercel détecte Next.js, la commande de build (`next build`) et le
   répertoire de sortie automatiquement. Aucune variable d'environnement n'est nécessaire.
4. **Deploy**.

Toutes les pages sont pré-rendues au build (SSG). Le formulaire de contact ouvre un lien
`mailto:` côté navigateur : il n'y a donc aucune fonction serverless à configurer.

Après l'ajout d'un domaine personnalisé, mettre à jour `site.url` dans `lib/data.ts` pour
que l'URL canonique et les métadonnées Open Graph pointent au bon endroit.

## Arborescence

```
.
├── app
│   ├── components
│   │   ├── three
│   │   │   ├── GridScene.tsx   Scène WebGL : vague de piliers instanciés
│   │   │   └── HeroCanvas.tsx  Chargement différé, détection WebGL, pause hors écran
│   │   ├── About.tsx           Section « À propos »
│   │   ├── Contact.tsx         Formulaire mailto + liens directs
│   │   ├── Experience.tsx      Expérience professionnelle
│   │   ├── Footer.tsx          Pied de page
│   │   ├── Hero.tsx            En-tête, titre géant, curseur clignotant
│   │   ├── Homelab.tsx         Fiche technique en fenêtre de terminal
│   │   ├── Marquee.tsx         Bande défilante de mots-clés
│   │   ├── Nav.tsx             Barre pilule flottante + menu plein écran
│   │   ├── Projects.tsx        Grille bento des 9 projets
│   │   ├── Reveal.tsx          Wrapper d'animation au scroll
│   │   ├── ScrollProgress.tsx  Barre de progression de lecture
│   │   ├── SectionHeading.tsx  Titre de section numéroté
│   │   ├── Skills.tsx          Compétences par domaine
│   │   ├── Stats.tsx           Compteurs animés
│   │   ├── StormSecurity.tsx   Encart Storm Security
│   │   ├── Talks.tsx           Conférences et prises de parole
│   │   ├── TiltCard.tsx        Inclinaison 3D + halo au pointeur
│   │   └── Writing.tsx         Articles Medium
│   ├── globals.css             Tokens, grille de fond, grain, focus, reduced-motion
│   ├── layout.tsx              Polices, métadonnées SEO, JSON-LD
│   └── page.tsx                Assemblage des sections
├── lib
│   └── data.ts                 Tout le contenu éditorial (source unique)
├── public                      Vide pour l'instant (voir TODO ci-dessous)
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## À savoir avant de modifier

- **Ne pas lancer `npm run build` pendant que `npm run dev` tourne.** Les deux partagent
  le dossier `.next` : le serveur de développement se met alors à renvoyer une erreur 500
  sur une classe Tailwind « inexistante ». Si cela arrive, arrêter le serveur, supprimer
  `.next`, relancer `npm run dev`.
- **Ne jamais nommer un groupe de couleurs `base`, `sm`, `lg`, `xl` ou `xs`.** Tailwind
  générerait une classe de couleur qui écrase l'utilitaire de taille du même nom. La
  palette s'appelle `night` pour cette raison.
- La scène 3D est chargée après le premier rendu et se coupe hors écran ou sous
  `prefers-reduced-motion`. Sans WebGL, un dégradé prend sa place.

## Modifier le contenu

Tout le texte éditorial vit dans [`lib/data.ts`](lib/data.ts) : projets, expérience,
articles, conférences, compétences, liens. Les composants ne contiennent que la mise en
forme. Ajouter un projet revient à ajouter un objet dans le tableau `projects`.

## Points restants (`TODO` dans le code)

- `public/og.png` (1200×630) puis décommenter les blocs `images` dans `app/layout.tsx`.
- Photo de profil éventuelle dans `app/components/About.tsx`.
- `site.url` dans `lib/data.ts` : domaine final.
- Chiffres précis du homelab (nœuds, RAM, stockage) : volontairement absents tant qu'ils
  ne sont pas confirmés.
- Année de publication des articles Medium : seules les dates jour/mois fournies sont
  affichées.

La documentation complète du projet est dans le vault Obsidian, dossier `Portfolio`.
