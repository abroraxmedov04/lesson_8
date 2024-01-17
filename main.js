var carBrands = ["Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen"];

var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elBtnBefore = document.querySelector(".js-btn-before");
var elBtnAfter = document.querySelector(".js-btn-after");
var elLists = document.querySelector(".js-list");
var elDeleteBtn = document.querySelector(".js-remove-btn");

function renderList() {
  elLists.innerHTML = "";
  carBrands.forEach(renderListItem);
}

function renderListItem(brand) {
  var li = document.createElement("li");
  li.textContent = brand;
  elLists.appendChild(li);
}

function addListToTheEnd() {
  var inputValue = elInput.value.trim();
  if (inputValue !== "") {
    carBrands.push(inputValue);
    elInput.value = "";
    renderList();
  }
}

function addElementToTheTop() {
  var inputValue = elInput.value.trim();
  if (inputValue !== "") {
    carBrands.unshift(inputValue);
    elInput.value = "";
    renderList();
  }
}

function removeItemFromTheArray() {
  if (carBrands.length == 0) {
    alert("no data to remove");
  } else {
    var res = carBrands.pop();
    renderList();
    return res;
  }
}

function removeItemFromTheArrayTop() {
  if (carBrands.length == 0) {
    alert("no data to remove");
  } else {
    var res = carBrands.shift();
    renderList();
    return res;
  }
}

elDeleteBtn.addEventListener("click", removeItemFromTheArray);
elBtnAfter.addEventListener("click", addListToTheEnd);
elBtnBefore.addEventListener("click", addElementToTheTop);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
renderList();
