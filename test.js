/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
  "book": {
   "category": "CHILDREN",
   "title": {
      "lang": "en",
      "value": "Harry Potter"
    },
    "author": "J. K. Rowling",
    "year": "2005",
    "price": 29.99
  }
}
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const book = data.book;
// console.log('book', book);


/* Этап 3. Запись данных в результирующий объект */
const result = {
  category: book.category,
  lang: book.title.lang,
  title: book.title.value,
  author: book.author,
  year: Number(book.year),
  price: Number(book.price),
};
console.log('result', result);