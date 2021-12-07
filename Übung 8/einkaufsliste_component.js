import {
    LitElement,
    html
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class Einkaufsliste extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <h1>Einkaufsliste</h1>
            Enter a new item:
            <input type="text" />
            <button>Add item</button>
            <ul></ul>
        `;
    }

    firstUpdated() {
        let shadow = this.shadowRoot;
        let input = shadow.querySelector("input");
        let button = shadow.querySelector("button");
        let ul = shadow.querySelector("ul");

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
    }
}

customElements.define("einkaufs-liste", Einkaufsliste);
