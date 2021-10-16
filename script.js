let omikujiButton = document.getElementById("omikuji-button");
let result = document.getElementById("result");

function omikuji() {
  let r = Math.random();
  //document.write(r);
  if (r < 0.2) {
    result.textContent = "大吉";
    result.style.color = "red";
  } else if (r >= 0.2 && r <= 0.7) {
    result.textContent = "吉";
    result.style.color = "black";
  } else {
    result.textContent = "凶";
    result.style.color = "blue";
  }
}
omikujiButton.onclick = omikuji;
