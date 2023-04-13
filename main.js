const button = document.getElementById('click-counter-btn');
const clickCounter = document.getElementById('click-counter');

let clickCount = getClickCountFromCookie();

button.addEventListener('click', () => {
  clickCount++;
  clickCounter.innerText = clickCount;
  setClickCountCookie(clickCount);
});

function getClickCountFromCookie() {
  const name = 'clickCount=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return parseInt(cookie.substring(name.length, cookie.length));
    }
  }
  return 0;
}

function setClickCountCookie(clickCount) {
  const date = new Date();
  date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + date.toUTCString();
  document.cookie = 'clickCount=' + clickCount + ';' + expires + ';path=/';
}
