var count = 0;
var clickBtn = document.getElementById("clickBtn");
var countDisplay = document.getElementById("count");

clickBtn.onclick = function() {
  count++;
  countDisplay.innerHTML = count;
};

