document.getElementsByClassName('num-btn')
    .eventListener('click', numberBtnHandler);

const numberBtnHandler = () => {
  const display = document.getElementById('display');
  const number = parseInt(this.id);
  display.textContent += number;
}

const clearDisplayBtnHandler = () => {
  const display = document.getElementById('display');
  display.textContent = 0;
}