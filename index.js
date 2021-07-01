import * as colorsSwitch from './colors.js';

const rfs = {
  bodyColor: document.querySelector('.body'),
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]'),
}
let timerId = null;

rfs.startButton.addEventListener('click', () => {
  timerId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colorsSwitch.colors.length - 1);
    rfs.bodyColor.style.backgroundColor = colorsSwitch.colors[randomColor];
  }, 1000);
    rfs.startButton.disabled = true;
});

rfs.stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  rfs.startButton.disabled = false;
});

function randomIntegerFromInterval (min, max)  {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; 