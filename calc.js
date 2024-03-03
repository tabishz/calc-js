
const numberBtnHandler = (event) => {
  const display = document.getElementById('display');
  const number = parseInt(event.target.id);
  display.value += number;
}

const clearDisplayBtnHandler = () => {
  const display = document.getElementById('display');
  display.value = '';
}

document.querySelectorAll('.num-btn').forEach(
  (btn) => {
    btn.addEventListener('click', numberBtnHandler);
  }
);