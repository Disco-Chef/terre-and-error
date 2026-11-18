# Terre and error 🏺

Petit kata d'entretien technique. Le décor : un atelier de céramique qui suit ses
pièces à travers les étapes de fabrication (façonnage, séchage, cuisson…).

Comme dans la plupart des équipes, les consignes sont en français et le code en anglais.

Il n'y a pas de piège caché dans l'installation, et pas besoin de tout finir.
Ce qui compte, c'est **comment tu réfléchis** : dis à voix haute ce que tu penses,
ce que tu essaies, et ce qui te surprend.

## Installation

Il te faut seulement [Node.js](https://nodejs.org) 20 ou plus. Aucune dépendance à installer.

```bash
git clone <url-de-ce-repo>
cd terre-and-error
node --version   # v20 ou plus
npm test         # lance tous les tests (certains échouent au départ, c'est normal)
```

Chaque exercice a sa commande : `npm run test:1`, `npm run test:2`, etc.

## Exercice 0 : avant de commencer

1. Crée une branche pour ton travail, et dis-nous pourquoi tu la nommes ainsi : quelle
   convention tu suis, et à quoi elle sert dans une équipe.
2. Fais un commit à la fin de chaque exercice, avec un message qui dira quelque chose
   à la personne qui relira ton travail dans six mois.

## Exercice 1 : l'étape suivante

📁 `exercises/1-next-step/`

Quand une pièce est prête, on la fait passer à l'étape suivante. Le pseudo-code est
déjà écrit dans `next-step.js` : à toi de le transformer en code qui marche.

Lance `npm run test:1` souvent. Si un test échoue alors que tu pensais avoir
fini, lis bien son message : il te dit quelque chose sur les données réelles.

## Exercice 2 : où casse-t-on ?

📁 `exercises/2-losses/`

Ella Gile, qui dirige l'atelier, veut savoir **à quelle étape** les pièces cassent,
pour savoir quoi améliorer en premier.

Chaque ticket garde l'historique (`history`) des étapes par lesquelles la pièce est
passée. Quand une pièce casse, sa dernière étape est `"Perte"`. L'étape où elle a
cassé est donc celle juste avant.

**Avant d'écrire du code**, explique ta démarche : à voix haute, en commentaire ou
en pseudo-code. Ensuite seulement, implémente `lossesByStep` (`npm run test:2`).
Les règles exactes sont en haut de `losses.js`.

## Exercice 3 : chasse aux bugs

📁 `exercises/3-bug-hunt/`

`validateOrder` vérifie une commande avant de l'enregistrer. Elle return une liste
de messages d'erreur ; une liste vide veut dire que la commande est valide. Les règles métier :

| Champ | Règle |
|---|---|
| `customerName` | obligatoire, pas seulement des espaces, 100 caractères maximum |
| `pieces` | au moins une ligne |
| `quantity` (de chaque ligne) | nombre entier, entre 1 et 50 inclus |

Tous les tests passent… et pourtant, le code contient plusieurs bugs.

1. **Sans lire `validate-order.js`**, liste les cas de test que tu lancerais : un tableau
   ou des scénarios Gherkin, sur papier ou en commentaire en haut du fichier de test.
2. Ajoute-les dans `validate-order.test.js`, sous les tests existants. Un nouveau test
   qui échoue a trouvé un bug. (Les tests existants montrent les messages d'erreur exacts.)
3. Corrige `validate-order.js` jusqu'à ce que tous les tests passent.

## Exercice 4 : le ménage

📁 `exercises/4-tidy-up/`

`order-status.js` marche (les tests passent), mais personne n'ose y toucher.
Rends-le lisible pour la prochaine personne, **sans changer son comportement** :

- ne change pas ce que les tests attendent ;
- lance `npm run test:4` après chaque petit changement : les tests doivent rester verts tout du long ;
- tu peux renommer la fonction, à condition de mettre à jour l'import dans le fichier de test.

Question bonus : en relisant les tests, y a-t-il une règle métier qui te semble
bizarre ? Ne la change pas dans le code : dis-nous ce que tu ferais.
