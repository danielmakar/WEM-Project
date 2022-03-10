import {
    LitElement,
    html
} from "lit-element";

export class Rednerliste extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <h1>Rednerliste</h1>
            Neuer Redner:
            <input type="text" />
            <button>Hinzufügen</button>
            <ul></ul>
        `;
    }

    firstUpdated() {
        let shadow = this.shadowRoot;
        let input = shadow.querySelector("input");
        let button = shadow.querySelector("button");
        let ul = shadow.querySelector("ul");

        button.addEventListener("click", function () {
            resetTimers();

            let listItem = document.createElement("li");
            listItem.innerHTML = `${input.value} <span>00</span>:<span>00</span>:<span>00</span>`;

            let stopButton = document.createElement("button");
            stopButton.className = "stop";
            stopButton.innerHTML = "Stop!";

            let startButton = document.createElement("button");
            startButton.className = "start";
            startButton.innerHTML = "Start!";

            listItem.append(stopButton, startButton);

            let s = 0;
            let m = 0;
            let h = 0;

            let hours = listItem.querySelectorAll("span")[0];
            let minutes = listItem.querySelectorAll("span")[1];
            let seconds = listItem.querySelectorAll("span")[2];

            let timer = setInterval(runTimer, 1000);

            stopButton.style.display = "block";
            startButton.style.display = "none";

            stopButton.addEventListener("click", function () {
                stopTimer();
            });

            startButton.addEventListener("click", function () {
                resetTimers();
                startTimer();
            });

            ul.appendChild(listItem);
            input.value = "";
            input.focus();

            function runTimer() {
                s++;
                seconds.innerHTML = s < 10 ? "0" + s : "" + s;

                if (s == 60) {
                    s = 0;
                    seconds.innerHTML = "0" + s;

                    m++;
                    minutes.innerHTML = m < 10 ? "0" + m : "" + m;
                }

                if (m == 60) {
                    m = 0;
                    minutes.innerHTML = "0" + m;

                    h++;
                    hours.innerHTML = h < 10 ? "0" + h : "" + h;
                }
            }

            function stopTimer() {
                clearInterval(timer);
                stopButton.style.display = "none";
                startButton.style.display = "block";
            }

            function startTimer() {
                timer = setInterval(runTimer, 1000);
                stopButton.style.display = "block";
                startButton.style.display = "none";
            }

            function resetTimers() {
                let stopButtons = ul.querySelectorAll("button.stop");
                for (let i = 0; i < stopButtons.length; i++) {
                    if (stopButtons[i].style.display == "block")
                        stopButtons[i].click();
                }
            }
        });

        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") button.click();
        });
    }
}

customElements.define("redner-liste", Rednerliste);
