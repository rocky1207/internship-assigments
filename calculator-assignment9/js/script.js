function start() {
  document.querySelector(".slider").addEventListener("input", inputMove);
  const display = document.querySelector("#display");
  display.innerText = "0";
  const buttons = Array.from(document.querySelectorAll(".val"));
  buttons.map((button) => {
    button.addEventListener("click", (e) => {
      newLineFunction();
      insertButtonCheck(e);
    });
  });
}
function insertButtonCheck(e) {
  if (e.target.innerText == "0" && display.innerText == "0") {
    display.innerText = e.target.innerText;
  } else if (
    display.innerText == "0" &&
    e.target.innerText != "0" &&
    e.target.innerText != "DEL" &&
    e.target.innerText != "RESET" &&
    e.target.innerText != "." &&
    e.target.innerText != "+" &&
    e.target.innerText != "-" &&
    e.target.innerText != "/" &&
    e.target.innerText != "*"
  ) {
    display.innerText = e.target.innerText;
  } else {
    switchFunction(e);
  }
}
function switchFunction(e) {
  switch (e.target.innerText) {
    case "RESET":
      display.innerText = "0";
      break;
    case "DEL":
      if (display.innerText) {
        if (display.innerText.length > 1) {
          display.innerText = display.innerText.slice(0, -1);
        } else if (
          (display.innerText.length == 1 && display.innerText == "0") ||
          (display.innerText.length == 1 && display.innerText != "0")
        ) {
          console.log(display.innerText);
          display.innerText = "0";
        }
      }
      break;
    case "=":
      const operations = ["+", "-", "x", "/"];
      for (let i = 0; i < display.innerText.length; i++) {
        if (
          display.innerText[i] == operations[0] ||
          display.innerText[i] == operations[1] ||
          display.innerText[i] == operations[2] ||
          display.innerText[i] == operations[3]
        ) {
          let operator = i;
          let number1 = display.innerText.slice(0, operator);
          let number2 = display.innerText.slice(
            operator + 1,
            display.innerText.length
          );
          display.innerText = calculate(
            number1,
            number2,
            display.innerText[operator]
          );
        }
      }
      break;
    default:
      display.innerText += e.target.innerText;
  }
}
function calculate(number1, number2, operator) {
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  let res;
  switch (operator) {
    case "+":
      res = number1 + number2;
      break;
    case "-":
      res = number1 - number2;
      break;
    case "x":
      res = number1 * number2;
      break;
    case "/":
      res = number1 / number2;
      break;
  }
  return res;
}
/***************
 style functions
*******************/
function newLineFunction() {
  if (window.innerWidth < 767) {
    let x = 13;
    while ((display.innerText.length + 1) % x == 0) {
      display.innerHTML += "<br>";
      x += x;
    }
  } else {
    let x = 15;
    while ((display.innerText.length + 1) % x == 0) {
      display.innerHTML += "<br>";
      x += x;
    }
  }
}
function inputMove() {
  const input = document.querySelector(".slider");
  const classes = ["default", "js-light", "js-dark"];
  themeSwitch(input.value, classes);
}
function themeSwitch(num, classes) {
  document.querySelector("body").removeAttribute("class");
  document.querySelector("body").classList.add(classes[num - 1]);
}
