console.log("************** EJERCICIO 04 - READ BOOKS *********************");

interface Book {
  title: string;
  isRead: boolean;
}
const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const isBookRead = (books: Book[], titleToSearch: string): boolean => {
  const encontrado = books.find((book) => book.title === titleToSearch);
  if (encontrado === undefined) {
    return false;
  } else {
    return encontrado.isRead;
  }
};

const ElementosArray = (array: Book[], name: string) => {
  console.log(`Los elementos del array ${name} son :`);
  array.forEach(function (item) {
    console.log(item);
  });
};

ElementosArray(books, "Books");

console.log("Buscamos Devastacion");
console.log(isBookRead(books, "Devastación"));
console.log("Buscamos Canción de hielo y fuego");
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log("Buscamos Los Pilares de la Tierra");
console.log(isBookRead(books, "Los Pilares de la Tierra"));
