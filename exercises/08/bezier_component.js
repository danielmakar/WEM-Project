import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class BezierAnimation extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
            .draggable {
                cursor: move;
            }

            path {
                fill: none;
                stroke: black;
                stroke-width: 1;
            }
        `;
    }

    render() {
        return html`
            <h1>Bezierkurven Animation</h1>
            <svg width="1000" height="600">
                <circle
                    class="draggable"
                    cx="100"
                    cy="100"
                    r="5"
                    style="fill: black"
                ></circle>
                <circle
                    class="draggable"
                    cx="200"
                    cy="100"
                    r="5"
                    style="fill: red"
                ></circle>
                <circle
                    class="draggable"
                    cx="100"
                    cy="200"
                    r="5"
                    style="fill: blue"
                ></circle>
                <circle
                    class="draggable"
                    cx="200"
                    cy="200"
                    r="5"
                    style="fill: green"
                ></circle>
                <g id="bezier"></g>
            </svg>
        `;
    }

    firstUpdated() {
        let shadow = this.shadowRoot;
        const svg = shadow.querySelector("svg");
        makeDraggable(svg);
        function makeDraggable(svg) {
            svg.addEventListener("mousedown", startDrag);
            svg.addEventListener("mousemove", drag);
            svg.addEventListener("mouseup", endDrag);
            svg.addEventListener("mouseleave", endDrag);

            let selectedElement = null;
            let offset = null;
            let bezier = shadow.getElementById("bezier");
            let circles = svg.querySelectorAll(".draggable");
            let bezierElements = setBezierElements(circles);
            bezier.innerHTML = bezierElements;

            function startDrag(evt) {
                if (evt.target.classList.contains("draggable")) {
                    selectedElement = evt.target;
                    offset = getMousePosition(evt);
                    offset.x -= parseFloat(selectedElement.getAttribute("cx"));
                    offset.y -= parseFloat(selectedElement.getAttribute("cy"));
                }
            }

            function drag(evt) {
                if (selectedElement) {
                    evt.preventDefault();
                    var coord = getMousePosition(evt);
                    selectedElement.setAttribute("cx", coord.x - offset.x);
                    selectedElement.setAttribute("cy", coord.y - offset.y);
                    let bezierElements = setBezierElements(circles);
                    bezier.innerHTML = bezierElements;
                }
            }

            function endDrag(evt) {
                selectedElement = null;
            }

            function getMousePosition(evt) {
                var CTM = svg.getScreenCTM();
                return {
                    x: (evt.clientX - CTM.e) / CTM.a,
                    y: (evt.clientY - CTM.f) / CTM.d
                };
            }

            function setBezierElements(circles) {
                return `<path d="M${circles[0].getAttribute(
                    "cx"
                )},${circles[0].getAttribute("cy")} C${circles[1].getAttribute(
                    "cx"
                )},${circles[1].getAttribute("cy")} ${circles[3].getAttribute(
                    "cx"
                )},${circles[3].getAttribute("cy")} ${circles[2].getAttribute(
                    "cx"
                )},${circles[2].getAttribute("cy")}"></path>
        <path d="M${circles[0].getAttribute("cx")},${circles[0].getAttribute(
                    "cy"
                )} L${circles[1].getAttribute("cx")},${circles[1].getAttribute(
                    "cy"
                )}"></path>
        <path d="M${circles[1].getAttribute("cx")},${circles[1].getAttribute(
                    "cy"
                )} L${circles[3].getAttribute("cx")},${circles[3].getAttribute(
                    "cy"
                )}"></path>
        <path d="M${circles[3].getAttribute("cx")},${circles[3].getAttribute(
                    "cy"
                )} L${circles[2].getAttribute("cx")},${circles[2].getAttribute(
                    "cy"
                )}"></path>`;
            }
        }
    }
}

customElements.define("bezier-animation", BezierAnimation);
