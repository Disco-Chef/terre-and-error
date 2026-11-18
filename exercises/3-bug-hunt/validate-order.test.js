import { test } from "node:test";
import assert from "node:assert/strict";
import { validateOrder } from "./validate-order.js";

test("une commande correcte n'a aucune erreur", () => {
  const order = { customerName: "Terry Cotta", pieces: [{ piece: "Bol", quantity: 4 }] };
  assert.deepEqual(validateOrder(order), []);
});

test("refuse un nom de client vide", () => {
  const order = { customerName: "", pieces: [{ piece: "Bol", quantity: 4 }] };
  assert.deepEqual(validateOrder(order), ["Le nom du client est obligatoire"]);
});

test("refuse une commande sans pièce", () => {
  const order = { customerName: "Kiln Eastwood", pieces: [] };
  assert.deepEqual(validateOrder(order), ["Une commande doit contenir au moins une pièce"]);
});

test("refuse une quantité trop grande", () => {
  const order = { customerName: "Emma Taillage", pieces: [{ piece: "Tasse", quantity: 99 }] };
  assert.deepEqual(validateOrder(order), ["Quantité invalide pour Tasse : entre 1 et 50"]);
});

// À toi : ajoute ici les cas qui manquent.
