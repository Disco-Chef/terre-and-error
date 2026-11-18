// Une étape (step) : { id: 3, name: "Séchage", order: 3, isLoss: false }
//
// Variables suggérées :
//   current      la step dont l'id vaut currentStepId
//   candidates   les steps qui viennent après `current` et qui ne sont pas une perte (isLoss)
//
// 1. Trouve `current`. S'il n'existe pas, throw l'erreur "Étape inconnue : <currentStepId>".
// 2. Construis `candidates`.
// 3. Si `candidates` est vide, return null.
// 4. Sinon, return la candidate qui vient en premier dans l'atelier, c'est-à-dire la plus proche (plus petit `order`).

export function nextStep(steps, currentStepId) {
  throw new Error("À implémenter");
}
