const titre = document.title;

const tabListPlanete = [
  "Mercure",
  "Venus",
  "Terre",
  "Mars",
  "Jupiter",
  "Saturne",
  "Uranus",
  "Neptune",  
];


const searchAndDestroy = (cible, listecible1) => {
  let position = listecible1.indexOf(cible);
  listecible1.splice(position, 1);
  for (i = 0; i < 7; i++) {
    document.querySelector(`#item${i + 1}`).innerHTML = listecible1[i];
    document.querySelector(`#item${i + 1}`).href = `${listecible1[i]}.html`;
  }
};

searchAndDestroy(titre, tabListPlanete);
