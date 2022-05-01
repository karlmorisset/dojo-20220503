// Trouver le "B" (bug) dans un tableau bi-dimensionnel de "A"

// Entrée : tableau bi-dimensionnel de chaînes de caractères
// Sortie : Emplacement de "B" sous la forme [x,y]

// NB: Il y aura toujours au moins un et un seul bug dans le tableau, il n'est donc pas
// nécessaire de considérer la situation où il n'y a pas de bug ou plus d'un bug.

// Exemple :  arr=[
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","B","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"]
// ]
// Sortie attendue : [2, 1]

function findTheBug(arr){
  let bugLocation = []

  arr.forEach((line, index) => {
    if (line.includes("B")) bugLocation = [index, line.indexOf("B")]
  });

  return bugLocation
}

module.exports = findTheBug

