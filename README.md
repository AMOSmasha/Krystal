# Site souvenir de Krystal

## Installation

Copie tout le contenu de ce dossier dans ton dépôt GitHub `Krystal`.

## Ajouter une photo

1. Copie la photo dans le dossier `photos`.
2. Ouvre `media.js`.
3. Ajoute une entrée dans `mediaItems` :

```js
{
  type: "image",
  src: "photos/nom-de-la-photo.jpg",
  title: "Krystal sur le canapé",
  tags: ["sleep", "home"]
},
```

## Ajouter une vidéo

1. Copie la vidéo dans le dossier `videos`.
2. Ajoute dans `media.js` :

```js
{
  type: "video",
  src: "videos/nom-de-la-video.mp4",
  title: "Krystal joue",
  tags: ["funny", "humans"]
},
```

## Tags disponibles

- `food`
- `sleep`
- `tiago`
- `humans`
- `home`
- `walks`
- `funny`
- `swan`
- `puppy`

Une photo peut avoir plusieurs tags.

## Important

GitHub Pages ne peut pas détecter automatiquement les fichiers présents dans un dossier.
Il faut donc ajouter chaque nom de fichier dans `media.js`.

Quand tout est prêt dans GitHub Desktop :

1. Écris un résumé, par exemple `Création du site`.
2. Clique sur **Commit to main**.
3. Clique sur **Push origin**.
