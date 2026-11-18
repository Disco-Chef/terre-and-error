// Un ticket : { id: 12, piece: "Bol", history: ["À faire", "Façonnage", "Séchage", "Perte"] }
// `history` liste les étapes par lesquelles la pièce est passée, de la plus ancienne à la plus récente.
//
// Return le nombre de pièces perdues par étape, par exemple :
//   { "Séchage": 2, "Cuisson biscuit": 1 }
//
// Les règles :
// - Une pièce est perdue quand la dernière étape de son `history` est "Perte".
// - Elle a cassé à l'étape juste avant "Perte".
// - S'il n'y a pas d'étape avant "Perte", compte-la dans "Inconnue".
// - Les pièces qui n'ont pas été perdues ne sont pas comptées.

// Ta démarche, avant le code :
//

export function lossesByStep(tickets) {
  throw new Error("À implémenter");
}
