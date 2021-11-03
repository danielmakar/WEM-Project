let table = document.querySelector("table");
let size = 3;
let cells = [];
for (let i = 65; i < 65 + size; i++) {
  cells.push(String.fromCharCode(i));
}

for (let i = 0; i < size; i++) {
  let tableRow = document.createElement("tr");

  let tableElement1 = document.createElement("td");
  tableElement1.id = `${cells[i]}1`;

  let tableElement2 = document.createElement("td");
  tableElement2.id = `${cells[i]}2`;

  tableRow.append(tableElement1, tableElement2);
  table.appendChild(tableRow);
  tableElement1.setAttribute("contenteditable", "true");
  tableElement2.setAttribute("contenteditable", "true");

  tableElement2.addEventListener("blur", function () {
    let formula = tableElement2.innerText;
    let elements = document.querySelectorAll("td");
    let ids = [];
    let neededCells = [];
    for (let i = 0; i < elements.length; i++) {
      ids[i] = elements[i].id;
    }
    if (formula.startsWith("=SUM")) {
      for (let i = 0; i < ids.length; i++) {
        if (formula.includes(ids[i])) {
          neededCells.push(ids[i]);
        }
      }
      let result = 0;
      for (let i = 0; i < neededCells.length; i++) {
        result += parseInt(document.getElementById(neededCells[i]).innerText);
      }
      this.innerText = result;
    }
  });
}
