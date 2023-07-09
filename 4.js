const btn = document.querySelector(".button");
const image = document.querySelector(".image");
   
btn.addEventListener('click', () => {   
  const inputWight = document.querySelector("#input1").value;
  const inputHeight = document.querySelector("#input2").value; 
  let wrongNumber = document.querySelector(".result");
      
    if (!(inputWight >= 100 && inputWight <= 300 && inputHeight >= 100 && inputHeight <= 300)) {
      image.src = ""
      wrongNumber.textContent = "Одно из чисел вне диапазона от 100 до 300";
        return;
    }
                    
    fetch(`https://picsum.photos/${inputWight}/${inputHeight}`)
        
      .then(response => {
        wrongNumber.textContent = "";
        image.src = response.url;
      });
}) 