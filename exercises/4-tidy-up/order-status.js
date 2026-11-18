// calcule le statut
export function calc(t) {
  let s = "a_faire";
  let x = 0;
  let y = 0;
  if (t.length == 0) {
    return "a_faire";
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i].step == "Terminé" || t[i].step == "Perte") {
      x = x + 1;
    }
    if (t[i].step != "À faire") {
      y = y + 1;
    }
  }
  if (x == t.length) {
    s = "terminee";
  } else {
    if (y > 0) {
      s = "en_cours";
    } else {
      // s = 'a_faire'
      s = "a_faire";
    }
  }
  // console.log(s)
  return s;
}
