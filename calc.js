const display = document.getElementById('display');

const numberBtnHandler = (event) => {
  const number = parseInt(event.target.id);
  display.textContent += number;
  resizeDisplayFonts();
}

const clearDisplayBtnHandler = () => {
  display.textContent = '';
}

document.querySelectorAll('.num-btn').forEach(
  (btn) => {
    btn.addEventListener('click', numberBtnHandler);
  }
);

const resizeDisplayFonts = () => {
  const textLength = display.textContent.length;
  const fontSize = Math.max(2, 5 - textLength / 4);
  display.style.fontSize = fontSize + 'em';
  console.log(`setting font size to ${fontSize}em`);
};