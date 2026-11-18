import { test } from "node:test";
import assert from "node:assert/strict";
import { lossesByStep } from "./losses.js";

test("aucun ticket, aucune perte", () => {
  assert.deepEqual(lossesByStep([]), {});
});

test("ignore les pièces qui n'ont pas cassé", () => {
  const tickets = [
    { id: 1, piece: "Vase", history: ["À faire", "Façonnage", "Séchage", "Terminé"] },
    { id: 2, piece: "Tasse", history: ["À faire", "Façonnage"] },
  ];
  assert.deepEqual(lossesByStep(tickets), {});
});

test("compte l'étape juste avant la perte", () => {
  const tickets = [
    { id: 1, piece: "Bol", history: ["À faire", "Façonnage", "Séchage", "Perte"] },
    { id: 2, piece: "Assiette", history: ["À faire", "Façonnage", "Séchage", "Perte"] },
    { id: 3, piece: "Vase", history: ["À faire", "Façonnage", "Séchage", "Cuisson biscuit", "Perte"] },
    { id: 4, piece: "Tasse", history: ["À faire", "Façonnage", "Séchage", "Terminé"] },
  ];
  assert.deepEqual(lossesByStep(tickets), { "Séchage": 2, "Cuisson biscuit": 1 });
});

test("une pièce perdue sans historique est rangée dans « Inconnue »", () => {
  const tickets = [{ id: 1, piece: "Bol", history: ["Perte"] }];
  assert.deepEqual(lossesByStep(tickets), { Inconnue: 1 });
});
