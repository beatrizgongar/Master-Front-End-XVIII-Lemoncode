# Módulo 3 - Laboratorio de Lenguajes

El [enunciado](/Módulo%203%20-%20Lenguajes%20JS%20TS/Enunciado%20entregables%20Módulo%20lenguajes.pdf) de los entregables.

En todos los ejercicios para recorrer los array se utilizará:

```TypeScript
const ElementosArray = (array: string[], name: string) => {
  console.log(`Los elementos del array ${name} son :`);
  array.forEach(function (item) {
    console.log(item);
  });
};
```

## Ejercicio 1 - Array Operations

Para este ejercicio se utilizará el siguiente array:

```TypeScript
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
```

### Head

Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
y devuelva su primer elemento. Utiliza destructuring

Solución:

```TypeScript
const head = (array: string[]) => {
  const [primero] = array;
  console.log(`El primer elemento del array es: ${primero}`);
};

head(animales);
```

### Tail

Implementa una función tail (inmutable), tal que, dado un array como entrada
devuelta todos menos el primer elemento. Utiliza rest operator.

Solución:

```TypeScript
const tail = (array: string[]) => {
  const [,...resto] = array;
  console.log(`El array sin el primer elemento es: ${resto}`);
};

tail(animales);
```

### Init

Implementa una función init (inmutable), tal que, dado un array como entrada
devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
Array.prototype.

Solución:

```TypeScript
const init = (array: string[]) => {
  console.log(`El array menos el último elemento es: ${array.slice(0, -1)}`);
};

init(animales);
```

### Last

Implementa una función last (inmutable), tal que, dado un array como entrada
devuelva el úl􀦞mo elemento.

Solución:

```TypeScript
const last = (array: string[]) => {
  console.log(`El último elemento del array es: ${array.slice(-1)}`);
};

last(animales);
```

Y el código completo del [ejercicio 1](./ejercicio-01.ts).

## Ejercicio 2 - Concat

Para este ejercicio se utilizarán los siguientes arrays:

```TypeScript
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
```

Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
devuelva la concatenación de ambos. Utiliza rest / spread operators.

Solución:

```TypeScript
const concat = (array1: string[], array2: string[]) => {
  ElementosArray([...array1, ...array2], "Concat");
};

concat(animales, frutas);
```

<b>Opcional</b>:

Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

Solución:

```TypeScript
const multiConcat = (...arrays: any[]) => {
  const resultado = [];
  for (let item of arrays) {
    resultado.push(...item);
  }
  ElementosArray(resultado, "Múltiples Arrays");
};

multiConcat([1], animales, [2], frutas, [3], animales, [4], frutas);
```

Y el código completo del [ejercicio 2](./ejercicio-02.ts)

## Ejercicio 3 - Clone Merge

### Clone

Implementa una función clone que, a partir de un objeto de entrada _source_ devuelva un nuevo objeto con las propiedades de _source_.

Solución:

```TypeScript
const clone = (source: any) => {
  return { ...source };
};

const objeto = {
  nombre: "Pepe",
  apellido: "Sánchez",
  edad: 23,
  ciudad: "Cáceres",
};

console.log(clone(objeto));
```

### Merge

Implementa una función merge que, dados dos objetos de entrada _source_ y _target_ , devuelva un nuevo objeto con todas las propiedades de _target_ y de _source_ , y en caso de propiedades con el mismo nombre, _source_ sobreescribe a _target_.

Solución:

```TypeScript
const merge = (source: any, target: any) => {
  return { ...clone(target), ...clone(source) };
};
console.log(merge(a, b));
```

Y el código completo del [ejercicio 3](./ejercicio-03.ts)

## Ejercicio 4 - Read Books

Crea una función _isBookRead_ que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.

Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false.

<b>Opcional</b>

Uliza Typescript para añadir los tipos adecuados.

Solución:

Se ha utilizado Typescript.
Creamos una interface Book:

```TypeScript
interface Book {
  title: string;
  isRead: boolean;
}
const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
```

Y la función isBookRead:

```TypeScript
const isBookRead = (books: Book[], titleToSearch: string): boolean => {
  const encontrado = books.find((book) => book.title === titleToSearch);
  if (encontrado === undefined) {
    return false;
  } else {
    return encontrado.isRead;
  }
};

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
```

Y el código completo del [ejercicio 4](./ejercicio-04.ts)

## Ejercicio 5 - Slot Machine

El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.

Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método _play_ el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.

El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.

En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".

Solución:

```TypeScript
//Utilizamos un random para crear el booleano

const randomBoolean = (): boolean => {
  return Math.random() >= 0.5;
};

class SlotMachine {
  coins: number;
  ruleta1: boolean;
  ruleta2: boolean;
  ruleta3: boolean;

  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;

    this.ruleta1 = randomBoolean();
    this.ruleta2 = randomBoolean();
    this.ruleta3 = randomBoolean();

    if (this.ruleta1 && this.ruleta2 && this.ruleta3) {
      if (this.coins === 1) {
        console.log(`Congratulations!!!. You won ${this.coins} coin!!`);
      } else {
        console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      }
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlotMachine();

for (let i = 0; i < 10; i++) {
  let jugada = i + 1;
  console.log(`Jugada ${jugada}`);
  machine1.play();
}
```

Y el código completo del [ejercicio 5](./ejercicio-05.ts)

## Instrucciones

`npm install` Instala las dependencias.

`npm start` Arranca el playground.
