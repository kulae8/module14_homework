const input = document.querySelector(".input");
const submitButton = document.querySelector(".button");
const outputDiv = document.querySelector(".output");
const photosContainer = document.querySelector(".photos");

submitButton.addEventListener("click", submitButtonHandle);

function submitButtonHandle() {
    const value = input.value;

    if (value >= 1 && value <= 10) {
        useRequest("https://picsum.photos/v2/list?limit=" + value, loadPhotos);
        write("Загружаю фото...");
    } else {
        write("Число вне диапазона от 1 до 10.");
    }
}

function write(text) {
    outputDiv.innerHTML = text;
}

function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = () => {
        if (xhr.status !== 200) {
            write("Статус ответа: ", xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
            write("Фото загружены.");
        }
    };

    xhr.onerror = () => {
        write("Ошибка! Статус ответа: ", xhr.status);
    };

    xhr.send();
};

function loadPhotos(apiData) {
    let cards = String();

    apiData.forEach(item => {
        const cardBlock =     `<div>
                                <img
                                  src="${item.download_url}"
                                  style="width: 200px; margin-right: 20px"
                                />
                                <p>${item.author}</p>
                              </div>`;
        cards += cardBlock;
    });

    photosContainer.innerHTML = cards;
}   