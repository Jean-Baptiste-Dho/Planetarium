const titre = document.title;

const tabListPlanete = [
  "Mercure",
  "Vénus",
  "Terre",
  "Mars",
  "Jupiter",
  "Saturne",
  "Uranus",
  "Neptune",
];

const hrefPlanete = [
  "mercure.html",
  "venus.html",
  "terre.html",
  "mars.html",
  "jupiter.html",
  "saturne.html",
  "uranus.html",
  "neptune.html",
];

const searchAndDestroy = (cible, listecible1, listecible2) => {
  let position = listecible1.indexOf(cible);
  listecible1.splice(position, 1);
  for (i = 0; i < 7; i++) {
    document.querySelector(`#item${i + 1}`).innerHTML = listecible1[i];
  }
  for (i = 0; i < 7; i++) {
    document.querySelector(`#item${i + 1}`).href = listecible2[i];
  }
};

searchAndDestroy(titre, tabListPlanete, hrefPlanete);
