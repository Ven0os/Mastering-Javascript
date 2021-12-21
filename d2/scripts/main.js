let js = document.createElement(script);
js.type = text / javascript;
js.src = countries.js;

let js2 = document.createElement(script);
js2.type = text / javascript;
js2.src = web_techs.js;

countries.include("Morocco");

web_techs.include("Sass");
web_techs.unshift("Sass");
console.log("Sass est un préprocesseur CSS");

const frontEnd = ["HTML", "CSS", "JS", "VueJs", "VueX"];
const backEnd = ["Node", "Express", "MongoDB"];

console.log(frontEnd + backEnd);
