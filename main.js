const button = document.getElementById('click-counter-btn');
const clickCounter = document.getElementById('click-counter');

let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
clickCounter.innerText = clickCount;

button.addEventListener('click', () => {
  clickCount++;
  clickCounter.innerText = clickCount;
  localStorage.setItem('clickCount', clickCount.toString());
});
