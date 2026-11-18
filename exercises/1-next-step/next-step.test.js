import { test } from "node:test";
import assert from "node:assert/strict";
import { nextStep } from "./next-step.js";

// Volontairement dans le désordre, et avec des trous dans l'order (pas de 4, pas de 6).
const workshopSteps = () => [
  { id: 7, name: "Cuisson émail", order: 7, isLoss: false },
  { id: 1, name: "À faire", order: 1, isLoss: false },
  { id: 9, name: "Perte", order: 9, isLoss: true },
  { id: 3, name: "Séchage", order: 3, isLoss: false },
  { id: 2, name: "Façonnage", order: 2, isLoss: false },
  { id: 5, name: "Cuisson biscuit", order: 5, isLoss: false },
];

test("passe de Façonnage à Séchage", () => {
  assert.equal(nextStep(workshopSteps(), 2).name, "Séchage");
});

test("saute les trous dans la numérotation", () => {
  assert.equal(nextStep(workshopSteps(), 3).name, "Cuisson biscuit");
});

test("ne propose jamais l'étape Perte comme étape suivante", () => {
  assert.equal(nextStep(workshopSteps(), 7), null);
});

test("throw une erreur si l'étape actuelle n'existe pas", () => {
  assert.throws(() => nextStep(workshopSteps(), 42), /Étape inconnue : 42/);
});

test("accepte un id reçu sous forme de texte (formulaire HTML, glisser-déposer)", () => {
  assert.equal(nextStep(workshopSteps(), "1").name, "Façonnage");
});

test("ne modifie pas le tableau reçu", () => {
  const steps = workshopSteps();
  nextStep(steps, 1);
  assert.deepEqual(steps, workshopSteps());
});
