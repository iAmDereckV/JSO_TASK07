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

cambiar.addEventListener("click", () => {
  display.style.background = fondo.value;
  display.style.color = color.value;
});
verNav.addEventListener("click", () => {
  var nombre;
  var cpu;
  var sistema;
  nombre = navigator.appName;
  cpu = navigator.cpuClass;
  sistema = navigator.platform;

  alert(
    "Navegador: " +
      nombre +
      "\n" +
      "Sistema: " +
      sistema +
      "\n" +
      "Micro: " +
      cpu
  );
});

setTimeout("reloj()", 500);
function reloj() {
  var tiempo = new Date();
  var hora = tiempo.getHours();
  var minuto = tiempo.getMinutes();
  var segundo = tiempo.getSeconds();
  var textohora = hora + ":" + minuto + ":" + segundo;
  timenow.value = textohora;
  setTimeout("reloj()", 500);
}
