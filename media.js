// Ajoute ici tes photos et vidéos.
// Une photo peut avoir plusieurs tags : ["sleep", "tiago", "humans"].
//
// Le fichier doit être placé dans le dossier "photos" ou "videos".
// Exemple :
// {
//   type: "image",
//   src: "photos/krystal-canape.jpg",
//   title: "Krystal sur le canapé",
//   tags: ["sleep", "home"]
// }

const mediaItems = [
  {
    type: "image",
    src: "photos/exemple-krystal-1.jpg",
    title: "Exemple — remplace-moi",
    tags: ["humans", "home"]
  },
  {
    type: "image",
    src: "photos/exemple-krystal-2.jpg",
    title: "Exemple — remplace-moi",
    tags: ["sleep"]
  },
  {
    type: "video",
    src: "videos/exemple-krystal.mp4",
    title: "Exemple vidéo — remplace-moi",
    tags: ["food", "funny"]
  }
];

// Noms affichés sur les boutons.
// Tu peux en ajouter ou en retirer.
const tagLabels = {
  all: "Tous",
  food: "Food",
  sleep: "Sleep",
  tiago: "Tiago",
  humans: "Humans",
  home: "Maison",
  walks: "Balades",
  funny: "Moments drôles",
  swan: "Swan",
  puppy: "Chiot"
};
