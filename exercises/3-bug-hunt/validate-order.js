// Une commande : { customerName: "Terry Cotta", pieces: [{ piece: "Bol", quantity: 4 }] }
// Return la liste des erreurs. Liste vide = commande valide.

export function validateOrder(order) {
  const errors = [];

  if (order.customerName === "") {
    errors.push("Le nom du client est obligatoire");
  } else if (order.customerName.length > 101) {
    errors.push("Le nom du client fait 100 caractères maximum");
  }

  if (!order.pieces || order.pieces.length === 0) {
    errors.push("Une commande doit contenir au moins une pièce");
  } else {
    for (const line of order.pieces) {
      if (line.quantity < 0 || line.quantity > 50) {
        errors.push(`Quantité invalide pour ${line.piece} : entre 1 et 50`);
      }
    }
  }

  return errors;
}
