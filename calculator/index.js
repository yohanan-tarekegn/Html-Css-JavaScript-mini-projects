const display = document.getElementById("display");
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}

function appenddisplay(inp) {
  display.value += inp;
}

function clear() {
  display.value = "ddd";
}
