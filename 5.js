const pageInput = document.getElementById('pageInput');
const limitInput = document.getElementById('limitInput');
const imageGallery = document.getElementById('imageGallery');

// Проверка числа на соответствие диапазону 
function validateNumber(num) {
  return num >= 1 && num <= 10;
}

// Получение данных из localStorage
function getStoredData() {
  const data = localStorage.getItem('imageData');
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

// Сохранение данных в localStorage
function storeData(data) {
  localStorage.setItem('imageData', JSON.stringify(data));
}

// Отправка запроса
function handleRequest() {
  const pageNumber = parseInt(pageInput.value);
  const limit = parseInt(limitInput.value);
  
  // Проверка ввода на соответствие диапазону и числу
  const isPageValid = validateNumber(pageNumber);
  const isLimitValid = validateNumber(limit);

  // Если номер страницы и лимит не в диапазоне 
  if (!isPageValid && !isLimitValid) {
    imageGallery.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    return;
  }
  // Если номер страницы не в диапазоне 
  if (!isPageValid) {
    imageGallery.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    return;
  }
  // Если лимит не в диапазоне 
  if (!isLimitValid) {
    imageGallery.innerHTML = 'Лимит вне диапазона от 1 до 10';
    return;
  }

  // Формирование URL и выполнение запроса
  const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Сохранение данных в localStorage
      storeData(data);
      // Отображение списка картинок
      displayImages(data);
    })
    .catch(error => console.log(error));
}

// Отображение списка картинок
function displayImages(images) {
  imageGallery.innerHTML = '';
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.download_url;
    imgElement.alt = `Image by ${image.author}`;
    imgElement.style.marginRight = '10px';
    imgElement.style.marginBottom = '10px';
    imgElement.style.width = '150px';
    imgElement.style.height = '150px';
    imageGallery.appendChild(imgElement);
  });
}

// Проверка наличия данных в localStorage и отображение их
const storedData = getStoredData();
if (storedData) {
  displayImages(storedData);
}

