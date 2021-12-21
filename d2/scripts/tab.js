let tab = [];
let tab = [1, 2, 3, 4, 5];

tab.length;

console.log(tab[0]);
console.log(tab[2]);
console.log(tab[4]);
let mixedDataTypes = [
  "France",
  "Canada",
  "Suisse",
  "Allemagne",
  "Angleterre",
  "Ukraine",
];

mixedDataTypes.length;

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

let number = itCompanies.indexOf();

console.log(number);

itCompanies.sort();
console.log(itCompanies);

itCompanies.reverse();
console.log(itCompanies.slice(3));
console.log(itCompanies.slice(-3));

let text = [
  "I",
  "love",
  "teaching",
  "and",
  "empowering",
  "people",
  ".",
  "I",
  "teach",
  "HTML",
  ",",
  "CSS",
  ",",
  "JS",
  ",",
  "VueJs",
  ",",
  "Laravel.",
];
console.log(text);
console.log(text.length);
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");

console.log(shoppingCart);

console.log(tab.splice(3, 1, "Green Tea"));
