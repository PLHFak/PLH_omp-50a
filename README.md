# One Madison · Floor 50 — site de présentation

Site privé de présentation de la résidence 50A, One Madison (23 East 22nd Street, New York), reconstruit le 25 octobre 2026 à partir de la version Manus (`onemad50-ttxgdux7.manus.space`).

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Un texte, le prix, un restaurant, une légende de photo | `content/site.ts` (anglais et français côte à côte) |
| Une photo | ajouter le fichier dans `public/media/`, puis le référencer dans `content/site.ts` |
| La mise en page | `app/page.tsx` et `app/globals.css` |

## Accès

Tout le site (pages, photos, vidéo) est protégé par un mot de passe vérifié côté serveur (`middleware.ts`).
Le mot de passe n'est jamais dans le code : il se règle dans Vercel, variable d'environnement `SITE_PASSWORD`.
Changer cette variable déconnecte tous les visiteurs.

## Développement

```bash
npm install
SITE_PASSWORD=... npm run dev
```

Déployé sur Vercel à chaque `git push` sur `main`.
