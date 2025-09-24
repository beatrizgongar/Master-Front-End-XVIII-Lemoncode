console.log(
  "************** EJERCICIO 01 - ARRAY OPERATIONS *********************"
);
//https://unicode.org/emoji/charts/full-emoji-list.html

const animales = [
  "🦝 Mapache",
  "🦚 Pavo Real",
  "🐼 Panda",
  "🦥 Mono",
  "🦩 Flamenco",
  "🐤 Pollito",
  "🦜 Loro",
  "🐸 Rana",
  "🐰 Conejo",
  "🐳 Ballena",
  "🦀 Cangrejo",
  "🐝 Abeja",
  "🦔 Erizo",
  "🐷 Cerdo",
  "🐮 Vaca",
  "🐶 Perro",
];

const ElementosArray = (array: string[], name: string) => {
  console.log(`Los elementos del array ${name} son :`);
  array.forEach(function (item) {
    console.log(item);
  });
};

ElementosArray(animales, "Animales");

console.log("===> HEAD");

const head = (array: string[]) => {
  const [primero] = array;
  console.log(`El primer elemento del array es: ${primero}`);
};

head(animales);

console.log("===> TAIL");

const tail = (array: string[]) => {
  const [, ...resto] = array;
  console.log(`El array sin el primer elemento es: ${resto}`);
};

tail(animales);

console.log("===> INIT");

const init = (array: string[]) => {
  console.log(`El array menos el último elemento es: ${array.slice(0, -1)}`);
};

init(animales);

console.log("===> LAST");

const last = (array: string[]) => {
  console.log(`El último elemento del array es: ${array.slice(-1)}`);
};

last(animales);

console.log("Comprobamos que el array original no ha cambiado");
ElementosArray(animales, "Animales");
