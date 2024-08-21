const rollBtn = document.getElementById("rollBtn");
const genNum = document.getElementById("genNum");
const minNum = document.getElementById("minNum");
const maxNum = document.getElementById("maxNum");
const backBtn = document.getElementById("backBtn");

max = 10;
min = 0;

rollBtn.onclick = function () {
  console.log(minNum.value);
  console.log(maxNum.value);
  min = Number(minNum.value);
  max = Number(maxNum.value);
  if (min > max) {
    max = min + 1;
    maxNum.value = max;
    window.alert(`Max smaller than min, set max to ${max}.`);
    rando = Math.floor(Math.random() * max) + min;
  } else {
    rando = Math.floor(Math.random() * max) + min;
  }

  console.log(max, min, rando);
  genNum.textContent = rando;
};

backBtn.onclick = function () {
  window.location.href = "../../index.html";
};
