if ("serviceWorker" in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register("sw.js").then(registration => {
          console.log("Service Worker registered: ", registration);
      }).catch(error => {
          console.log("Service Worker Registration Failed: ", error);
      })
    });
  } else {
      console.log("Service Worker not suported");
  }

const nav = document.querySelector(".nav");
const content = document.querySelector(".content");

(async function () {
    let data = await (await fetch("data.json")).json();

    loadNav(data);

    loadHome();
})();

async function loadNav(data) {
    let ul = document.createElement("ul");
    let id = 0;
    for (let topic in data) {
        let li = document.createElement("li");
        li.innerHTML = `<a id=${id}>${topic}</a>`;
        li.addEventListener("click", function (e) {
            loadContent(data, topic)
        });
        ul.appendChild(li);
        id++;
    }
    nav.appendChild(ul);
}

async function loadContent(data, topic) {
    let htmlContent = await fetch(`./homepage-pages/${data[topic]}`).then(response => response.text());
    content.innerHTML = htmlContent;
}

async function loadHome() {
    let htmlContent = await fetch(`./homepage-pages/home`).then(response => response.text());
    content.innerHTML = htmlContent;
}