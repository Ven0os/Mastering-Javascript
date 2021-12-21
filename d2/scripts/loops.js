for (let x = 0; x < 10; x++) {
  console.log(x);
}

for (let x = 10; x > 0; x--) {
  console.log(x);
}

let n = 51;

for (let x = 10; x > n; x--) {
  console.log(x);
}

function random(length) {
  let resultat = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let x = 0; x < length; x++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return resultat;
}

console.log(random(5));

function getRandomColor() {
  var letters = "0123456789ABCDEF";

  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function fullName(name) {
  return name;
}
fullName("Théo");

function fullPluslastName(name, last) {
  return name;
}
fullPluslastName("Théo", "Fredouelle");

function addNumbers(x, y) {
  return x + y;
}
addNumbers(21, 51);

function areaOfRectangle(x, y) {
  return x * y;
}

function perimeterOfRectangle(x, y) {
  return 2 * (x + y);
}

function areaOfCircle(r) {
  return Math.PI(r * r);
}
