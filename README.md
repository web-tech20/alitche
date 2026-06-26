# ALITCHÉ

ALITCHÉ est une application web statique d’orientation académique et professionnelle pensée pour les bacheliers béninois. Elle guide l’utilisateur à travers un parcours simple : onboarding, quiz de personnalité, résultats, simulation immersive et rapport final.

## Fonctionnalités principales

- Diagnostic d’orientation avec quiz interactif
- Recommandation de métiers et de filières
- Simulation immersive avec métiers, filières et établissements
- Rapport final avec synthèse, écoles, métiers et bourses
- Interface responsive adaptée mobile et desktop
- Mode clair/sombre géré automatiquement selon les préférences du système

## Structure du projet

- [index.html](index.html) : structure de l’application et écrans
- [css/style.css](css/style.css) : styles, responsive design et thème clair/sombre
- [js/app.js](js/app.js) : logique de navigation, quiz, simulation et rapport
- [js/data.js](js/data.js) : contenus métiers, profils, écoles et bourses

## Lancer localement

Vous pouvez ouvrir [index.html](index.html) directement dans un navigateur, ou utiliser un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrir : http://127.0.0.1:8000/

## Vérifications réalisées

- Responsive design testé sur un viewport mobile (390 px)
- Adaptation des composants en colonne sur petits écrans
- Masquage de la navigation principale sur mobile
- Support du mode sombre/clair via les préférences système grâce à CSS

## Déploiement

Le projet est prêt pour un hébergement statique tel que :

- GitHub Pages
- Netlify
- Vercel
- Any static host

## Statut

Version fonctionnelle de démonstration avec interface complète, parcours de simulation et rapport final.
