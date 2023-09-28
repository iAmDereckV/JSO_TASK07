const display = document.getElementById("display");

function addNumber(item) {
  display.value += item;
}
function clearAllDisplay() {
  display.value = "";
}
function clearDisplay() {
  display.value = display.value.slice(0, -1);
}
function calculateDisplay() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
const btn = document
  .querySelector(".buttons")
  .addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      addNumber(e.target.value);
    }
    if (e.target.matches("#clearAll")) {
      clearAllDisplay();
    }
    if (e.target.matches("#calculate")) {
      calculateDisplay();
    }
    if (e.target.matches("#clear")) {
      clearDisplay();
    }
  });
