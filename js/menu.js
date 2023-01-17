const mocktail = document.getElementById("mocktail");
const shakes = document.getElementById("shakes");
const hot_coffee = document.getElementById("hot-coffee");
const mocktail_btn = document.getElementById("mocktail-btn");
const shakes_btn = document.getElementById("shakes-btn");
const hot_coffee_btn = document.getElementById("hot-coffee-btn");

mocktail_btn.addEventListener("click", myFunction1);
shakes_btn.addEventListener("click", myFunction2);
hot_coffee_btn.addEventListener("click", myFunction3);

function myFunction1() {
  mocktail.style.display = "block";
  shakes.style.display = "none";
  hot_coffee.style.display = "none";
}
function myFunction2() {
  mocktail.style.display = "none";
  shakes.style.display = "block";
  hot_coffee.style.display = "none";
}
function myFunction3() {
  mocktail.style.display = "none";
  shakes.style.display = "none";
  hot_coffee.style.display = "block";
}