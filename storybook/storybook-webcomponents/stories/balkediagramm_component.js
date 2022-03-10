import {
    LitElement,
    html,
    css
} from "lit-element";

export class Balkendiagramm extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
            #data rect {
                filter: brightness(50%);
            }

            #data rect:hover {
                filter: brightness(100%);
            }

            #data-numbers {
                fill: lightyellow;
                stroke-width: 1px;
                stroke: black;
                display: none;
            }
        `;
    }

    render() {
        return html`
            <svg width="1000" height="600">
                <text x="600" y="25" id="title"></text>
                <text x="500" y="50" id="source"></text>
                <g id="lines">
                    <line
                        x1="250"
                        y1="410"
                        x2="250"
                        y2="80"
                        style="stroke:lightgrey;stroke-width:1"
                    ></line>
                    <line
                        x1="350"
                        y1="410"
                        x2="350"
                        y2="80"
                        style="stroke:lightgrey;stroke-width:1"
                    ></line>
                    <line
                        x1="450"
                        y1="410"
                        x2="450"
                        y2="80"
                        style="stroke:lightgrey;stroke-width:1"
                    ></line>
                    <line
                        x1="550"
                        y1="410"
                        x2="550"
                        y2="80"
                        style="stroke:lightgrey;stroke-width:1"
                    ></line>
                    <line
                        x1="650"
                        y1="410"
                        x2="650"
                        y2="80"
                        style="stroke:lightgrey;stroke-width:1"
                    ></line>
                    <line
                        x1="750"
                        y1="410"
                        x2="750"
                        y2="80"
                        style="stroke:lightgrey;stroke-width:1"
                    ></line>
                </g>
                <g id="xLabels">
                    <text x="25" y="100"></text>
                    <text x="25" y="150"></text>
                    <text x="25" y="200"></text>
                    <text x="25" y="250"></text>
                    <text x="25" y="300"></text>
                    <text x="25" y="350"></text>
                    <text x="25" y="400"></text>
                </g>
                <g id="yLabels">
                    <text x="250" y="450"></text>
                    <text x="350" y="450"></text>
                    <text x="450" y="450"></text>
                    <text x="550" y="450"></text>
                    <text x="650" y="450"></text>
                    <text x="750" y="450"></text>
                </g>
                <g id="data">
                    <rect x="250" y="85" height="20"></rect>
                    <rect x="250" y="135" height="20"></rect>
                    <rect x="250" y="185" height="20"></rect>
                    <rect x="250" y="235" height="20"></rect>
                    <rect x="250" y="285" height="20"></rect>
                    <rect x="250" y="335" height="20"></rect>
                    <rect x="250" y="385" height="20"></rect>
                </g>
                <rect
                    id="data-numbers"
                    x="650"
                    y="300"
                    height="50"
                    width="200"
                ></rect>
                <text x="660" y="320" id="partei"></text>
                <text x="660" y="340" id="value"></text>
            </svg>
        `;
    }

    firstUpdated() {
        let shadow = this.shadowRoot;
        const dataset = {
            title: "Sitzverteilung im Deutschen Bundestag",
            source: "Source: https://www.bundestag.de/parlament/plenum/sitzverteilung_20wp",
            xAxis: [
                "SPD",
                "CDU/CSU",
                "Bündnis 90/Die Grünen",
                "FDP",
                "AfD",
                "Die Linke",
                "fraktionslos"
            ],
            yAxis: [0, 50, 100, 150, 200, 250],
            data: [206, 197, 118, 92, 82, 39, 2],
            colors: [
                "#fc0303",
                "#4103fc",
                "#03f4fc",
                "#03fc2c",
                "#fcf403",
                "#d303fc",
                "#030303"
            ]
        };
        const title = shadow.getElementById("title");
        const source = shadow.getElementById("source");
        const xLabels = shadow.getElementById("xLabels").children;
        const yLabels = shadow.getElementById("yLabels").children;
        const data = shadow.getElementById("data").children;

        title.innerHTML = dataset.title;
        source.innerHTML = dataset.source;
        for (let i = 0; i < dataset.xAxis.length; i++) {
            xLabels[i].innerHTML = dataset.xAxis[i];
            data[i].setAttribute("width", dataset.data[i] * 2);
            data[i].style.fill = dataset.colors[i];
            data[i].dataset.name = dataset.xAxis[i];
            data[i].dataset.value = dataset.data[i];
            data[i].addEventListener("mouseenter", function (e) {
                let element = e.target;
                setCurrentRect(
                    `${element.dataset.name}:`,
                    element.dataset.value,
                    true
                );
            });
            data[i].addEventListener("mouseout", function (e) {
                setCurrentRect("", "", false);
            });
        }
        for (let i = 0; i < dataset.yAxis.length; i++) {
            yLabels[i].innerHTML = dataset.yAxis[i];
        }
        function setCurrentRect(text, value, display) {
            const rect = shadow.getElementById("data-numbers");
            rect.style.display = display ? "block" : "none";
            const partei = shadow.getElementById("partei");
            const number = shadow.getElementById("value");
            partei.innerHTML = `${text}`;
            number.innerHTML = value;
        }
    }
}

customElements.define("balken-diagramm", Balkendiagramm);
