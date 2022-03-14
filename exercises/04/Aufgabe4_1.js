let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${input.value} <button>Delete</button>`;
  let deleteButton = listItem.querySelector("button");
  deleteButton.addEventListener("click", function () {
    ul.removeChild(listItem);
  });
  ul.appendChild(listItem);
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") button.click();
});
