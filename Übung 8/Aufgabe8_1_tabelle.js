import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class Tabellenkalkulation extends LitElement {
    constructor() {
        super();
        this.rows = 3;
        this.columns = 3;
    }

    static properties = {
        rows: { type: Number },
        columns: { type: Number }
    };

    static get styles() {
        return css`
            td {
                width: 100px;
                height: 30px;
                border: 1px solid black;
            }

            table {
                border-collapse: collapse;
            }
        `;
    }

    render() {
        return html`
            <h1>Tabellenkalkulation mit contentEditable</h1>
            <table></table>
        `;
    }

    firstUpdated() {
        let shadow = this.shadowRoot;
        let table = shadow.querySelector("table");
        let rows = this.rows;
        let columns = this.columns;
        let map = new Map();

        let columnsHead = document.createElement("tr");
        columnsHead.innerHTML += `<th></th>`;
        for (let i = 0; i < columns; i++) {
            columnsHead.innerHTML += `<th>${String.fromCharCode(i + 65)}</th>`;
        }
        table.appendChild(columnsHead);

        for (let i = 1; i < rows + 1; i++) {
            let row = document.createElement("tr");
            row.innerHTML += `<th>${i}</th>`;

            for (let j = 0; j < columns; j++) {
                row.innerHTML += `<td class="cell" id=${String.fromCharCode(
                    j + 65
                )}${i}></td>`;
            }

            table.appendChild(row);
        }

        let cells = shadow.querySelectorAll(".cell");

        for (let i = 0; i < cells.length; i++) {
            cells[i].setAttribute("contentEditable", "true");
            cells[i].addEventListener("focusout", function () {
                map.set(cells[i].id, cells[i].textContent);
                calc(cells[i], cells[i].textContent);
            });
            cells[i].addEventListener("focusin", function () {
                cells[i].textContent = map.get(cells[i].id);
            });
        }

        function calc(cell, content) {
            if (content.startsWith("=")) {
                let calcValue = content.substring(1);

                let valuesString = calcValue.split("(")[1].split(")")[0];
                let values = valuesString.split(",");

                if (calcValue.startsWith("SUM")) {
                    let calcResult = 0;
                    for (let i = 0; i < values.length; i++) {
                        calcResult += getInt(values[i]);
                    }
                    cell.textContent = calcResult;
                }

                if (calcValue.startsWith("SUB")) {
                    let calcResult = getInt(values[0]);
                    for (let i = 1; i < values.length; i++) {
                        calcResult -= getInt(values[i]);
                    }
                    cell.textContent = calcResult;
                }

                if (calcValue.startsWith("MUL")) {
                    let calcResult = getInt(values[0]);
                    for (let i = 1; i < values.length; i++) {
                        calcResult *= getInt(values[i]);
                    }
                    cell.textContent = calcResult;
                }

                if (calcValue.startsWith("DIV")) {
                    let calcResult = getInt(values[0]);
                    for (let i = 1; i < values.length; i++) {
                        calcResult /= getInt(values[i]);
                    }
                    cell.textContent = calcResult;
                }
            }
        }

        function getInt(value) {
            if (Number.isInteger(value)) return;

            let cell = shadow.getElementById(value);
            if (cell) return parseInt(cell.textContent);
        }
    }
}

customElements.define("tabellen-kalkulation", Tabellenkalkulation);
