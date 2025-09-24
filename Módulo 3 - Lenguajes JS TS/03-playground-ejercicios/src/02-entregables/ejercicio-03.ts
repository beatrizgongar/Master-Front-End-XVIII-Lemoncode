console.log("************** EJERCICIO 03 - CLONE MERGE ********************");
//https://unicode.org/emoji/charts/full-emoji-list.html

console.log("===> CLONE");
const clone = (source: any) => {
  return { ...source };
};

const objeto = {
  nombre: "Pepe",
  apellido: "Sánchez",
  edad: 23,
  ciudad: "Cáceres",
};

console.log("El objeto original");
console.log(objeto);
console.log("El objeto clonado");
console.log(clone(objeto));
console.log("Comparamos objeto === clone(objeto)");
console.log(objeto === clone(objeto));
console.log("Comparamos una propiedad objeto.nombre === clone(objeto).nombre");
console.log(objeto.nombre === clone(objeto).nombre);

console.log("===> MERGE");
const merge = (source: any, target: any) => {
  return { ...clone(target), ...clone(source) };
};

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
console.log("El objeto a: ");
console.log(a);
const b = { name: "Luisa", age: 31, married: true };
console.log("El objeto b: ");
console.log(b);

console.log("El nuevo objeto mergeado");
console.log(merge(a, b));
