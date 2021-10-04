function start() {
  let mode = document.getElementsByClassName("upperSmall");
  mode[0].addEventListener("click", function () {
    let body = document.getElementsByTagName("body");
    body[0].classList.toggle("darkBckg");
    document.getElementById("switch").removeAttribute("src");
    document
      .getElementById("switch")
      .setAttribute("src", "assets/icon-sun.svg");
  });
}
