const titre = document.title


const tabListPlanete = [
    "Mercure",
    "Vénus",
    "Terre",
    "Mars",
    "Jupiter",
    "Saturne",
    "Uranus",
    "Neptune",
]

const searchAndDestroy = (cible, listecible) => {
    let position = tabListPlanete.indexOf(titre)
    tabListPlanete.splice(position,1)
    for (i=0; i<7; i++){
        document.querySelector(`#item${i+1}`).innerHTML = tabListPlanete[i]
    }
}

searchAndDestroy(titre,tabListPlanete)


