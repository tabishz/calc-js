const display = document.getElementById('display');

const numberBtnHandler = (event) => {
  const number = parseInt(event.target.id);
  display.value += number;
  resizeDisplayFonts();
}

const clearDisplayBtnHandler = () => {
  display.value = '';
}

document.querySelectorAll('.num-btn').forEach(
  (btn) => {
    btn.addEventListener('click', numberBtnHandler);
  }
);

const resizeDisplayFonts = () => {
  const textLength = display.value.length;
  const fontSize = Math.min(5, 5 - textLength / 4);
  display.style.fontSize = fontSize + 'em';
  console.log(`setting font size to ${fontSize}em`);
};