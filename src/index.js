import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
startBtnRef.addEventListener('click', startAction);
stopBtnRef.addEventListener('click', stopAction);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval;

function startAction() {
  interval = setInterval(() => {
    document.body.setAttribute(
      'style',
      `background-color: ${
        colors[randomIntegerFromInterval(0, colors.length - 1)]
      }`,
    );
  }, 1000);
  startBtnRef.disabled = true;
}

function stopAction() {
  clearInterval(interval);
  startBtnRef.disabled = false;
}
