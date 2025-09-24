console.log("************** EJERCICIO 02 - CONCAT *********************");
//https://unicode.org/emoji/charts/full-emoji-list.html

const animales = [
  "🦝 Mapache",
  "🦩 Flamenco",
  "🐤 Pollito",
  "🐸 Rana",
  "🐳 Ballena",
  "🦀 Cangrejo",
  "🐼 Panda",
  "🐮 Vaca",
  "🐶 Perro",
];

const frutas = [
  "🍇 Uva",
  "🍉Sandía",
  "🍋 Limón",
  "🍎 Manzana",
  "🍒 Cereza",
  "🥝 Kiwi",
  "🍑 Melocotón",
];
const ElementosArray = (array: string[], name: string) => {
  console.log(`Los elementos del array ${name} son :`);
  array.forEach(function (item) {
    console.log(item);
  });
};

ElementosArray(animales, "Animales");
ElementosArray(frutas, "Frutas");

console.log("===> CONCAT");

const concat = (array1: string[], array2: string[]) => {
  ElementosArray([...array1, ...array2], "Concat");
};

concat(animales, frutas);

console.log("===> Opcional Concat");

const multiConcat = (...arrays: any[]) => {
  const resultado = [];
  for (let item of arrays) {
    resultado.push(...item);
  }
  ElementosArray(resultado, "Múltiples Arrays");
};

multiConcat([1], animales, [2], frutas, [3], animales, [4], frutas);
