/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
  <book category="CHILDREN">
    <title lang="en">Harry Potter</title>
    <author>J. K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const bookNode = xmlDOM.querySelector("book");
const titleNode = bookNode.querySelector("title");
const authorNode = bookNode.querySelector("author");
const yearNode = bookNode.querySelector("year");
const priceNode = bookNode.querySelector("price");
// console.log('bookNode', bookNode);
// console.log('titleNode', titleNode);
// console.log('authorNode', authorNode);
// console.log('yearNode', yearNode);
// console.log('priceNode', priceNode);

// Получение данных из атрибутов
const categoryAttr = bookNode.getAttribute('category');
const langAttr = titleNode.getAttribute('lang');
// console.log('categoryAttr', categoryAttr);
// console.log('langAttr', langAttr);

/* Этап 3. Запись данных в результирующий объект */
const result = {
  category: categoryAttr,
  lang: langAttr,
  title: titleNode.textContent,
  author: authorNode.textContent,
  year: Number(yearNode.textContent),
  price: Number(priceNode.textContent),
};
console.log('result', result);