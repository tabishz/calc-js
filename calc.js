const display = document.getElementById('display');

const numberBtnHandler = (event) => {
  display.textContent += event.target.id;
  resizeDisplayFonts();
}

const clearDisplayBtnHandler = () => {
  display.textContent = '';
}

const doCalc = () => {
  const displayValue = display.textContent;
  if (displayValue === '') {
    return;
  }
  // const lastChar = displayValue[displayValue.length - 1];
  // if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
  //   display.textContent += lastChar;
  // } else {
  //   display.textContent += eval(displayValue);
  // }
  const answer = eval(displayValue);
  display.textContent = answer;
  resizeDisplayFonts();
}

document.querySelectorAll('.num-btn').forEach(
  (btn) => {
    btn.addEventListener('click', numberBtnHandler);
  }
);

document.querySelectorAll('.op-btn').forEach(
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

const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', doCalc);