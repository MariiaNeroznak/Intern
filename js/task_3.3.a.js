/* Given a list of the following major Houses of Westeros and their respective mottos:
var houses = [
{name: "Targaryen", motto: "Fire and Blood"},
{name: "Stark", motto: "Winter is Coming"},
{name: "Bolton", motto: "Our Blades Are Sharp"},
{name: "Greyjoy", motto: "We Do Not Sow"},
{name: "Tully", motto: "Family, Duty, Honor"},
{name: "Arryn", motto: "As High as Honor"},
{name: "Lannister", motto: "Hear Me Roar!"},
{name: "Tyrell", motto: "Growing Strong"},
{name: "Baratheon", motto: "Ours is the Fury"},
{name: "Martell", motto: "Unbowed, Unbent, Unbroken"}
];
Write two versions of a function that, when passed the name of a House, returns its motto.
a) Do not use any ES6 methods
b) Use a suitable ES6 method
Example:
motto("Tyrell") // returns "Growing strong" */

var houses = [
  { name: "Targaryen", motto: "Fire and Blood" },
  { name: "Stark", motto: "Winter is Coming" },
  { name: "Bolton", motto: "Our Blades Are Sharp" },
  { name: "Greyjoy", motto: "We Do Not Sow" },
  { name: "Tully", motto: "Family, Duty, Honor" },
  { name: "Arryn", motto: "As High as Honor" },
  { name: "Lannister", motto: "Hear Me Roar!" },
  { name: "Tyrell", motto: "Growing Strong" },
  { name: "Baratheon", motto: "Ours is the Fury" },
  { name: "Martell", motto: "Unbowed, Unbent, Unbroken" },
];

export function getMotto(name) {
  var findedObj = houses.filter(function (item) {
    return item.name === name;
  });
  if (findedObj.length > 0) return findedObj[0].motto;
}

// console.log(getMotto("Stark"));
// module.exports = getMotto;
