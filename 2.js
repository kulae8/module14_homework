const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const data = JSON.parse(jsonString);

const list = data.list;


const resultList = [];

const result = {
  list: data.list,
}; 
resultList.push(result)

console.log(resultList);