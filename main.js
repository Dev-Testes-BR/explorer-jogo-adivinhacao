// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// funções
function handleTryClick(event) {
    event.preventDefault();
  
    const inputValue = document.querySelector("#inputNumber");
    const inputNumber = Number(inputValue.value);
  
    // Verificar se inputValue é um número
    if (isNaN(inputNumber)) {
      alert("Por favor, insira um número válido.");
      inputValue.value = "";
      return; // Saia da função se não for um número
    }
  
    if (inputNumber >= 1 && inputNumber <= 10) {
      if (inputNumber === randomNumber) {
        toggleScreen();
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa(s)`;
      }
  
      inputValue.value = "";
  
      xAttempts++;
    } else {
      alert("Por favor, insira um número entre 1 e 10.");
      inputValue.value = "";
    }
  }

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}