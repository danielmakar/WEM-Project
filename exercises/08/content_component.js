import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class Content extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <p>Herzlich Wilkommen!</p>
        <p>Sie können ein Hauptthema auswählen und anschließend ein Unterthema, um sich eine passende Beschreibung
            anzuschauen.</p>
            `;
    }

    firstUpdated() {
        
    }

    loadContent(text) {
        let shadow = this.shadowRoot;
        shadow.innerHTML = "<p>" + text + "</p>";
    }
}

customElements.define("content-component", Content);