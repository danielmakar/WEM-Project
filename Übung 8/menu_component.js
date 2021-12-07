import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class Menu extends LitElement {
    constructor() {
        super();
        this.orientation = "horizontal";
    }

    static properties = {
        orientation: { type: String }
    };

    static get styles() {
        return css`
            .navigation {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .navigation button {
                width: 150px;
                margin: 10px;
                border: rgb(103, 189, 223) solid 3px;
                border-radius: 8px;
                background-color: blanchedalmond;
            }
            .navigation button:hover {
                background-color: #C9B899;
            }
            .horizontal {
                flex-flow: no wrap;
            }
            .vertical {
                flex-flow: column wrap;
                padding: 0;
            }
        `;
    }

    render() {
        let elements = Array.from(this.getElementsByTagName("a"));
        console.log(elements);
        //https://stackoverflow.com/questions/62110373/lit-element-cant-get-an-array-of-objects-to-render-output-in-loop
        return html`
            <div class="navigation ${this.orientation}">
                ${elements.map((e) => html`<button>${e.textContent}</button>`)}
            </div >
            `;
    }
}

customElements.define("menu-component", Menu);