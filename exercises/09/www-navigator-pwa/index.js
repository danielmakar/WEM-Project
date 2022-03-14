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

const mainNav = document.getElementById("mainnav");
const subNav = document.getElementById("subnav");
const content = document.getElementById("content");
const source = document.getElementById("source");
const backButton = document.getElementById("back");

(async function () {
  try {
    var data = await (await fetch("data.json")).json();
  } catch {
    console.log("Es ist ein Fehler aufgetreten");
    content.innerHTML = "<p>Es ist ein Fehler aufgetreten.</p>";
  }

  var stateManager = (function () {
    var dataStack = [];
    return {
      add: function (main, sub) {
        dataStack.push([main, sub]);
        backButton.disabled = false;
      },
      undo: function () {
        if (dataStack.length != 0) {
          let oldState = dataStack.pop();
          if (dataStack.length != 0) {
            let newState = dataStack[dataStack.length - 1];
            loadMenu(newState[0], newState[1], oldState);
          } else {
            returnToStart();
            backButton.disabled = true;
          }
        }
      }
    };
  })();

  for (let main in data) {
    let mainButton = document.createElement("button");
    mainButton.innerText = main;
    mainButton.onclick = () => {
      window.history.pushState({ main: main, sub: "" }, `Title: ${main}`, main);
      loadSubNav(main, mainButton);
      stateManager.add(main);
    };
    mainNav.insertBefore(mainButton, mainNav.lastChild);
  }

  function loadSubNav(main, mainButton) {
    while (subNav.firstChild) {
      subNav.removeChild(subNav.firstChild);
    }

    for (let i = 0; i < mainNav.children.length; i++) {
      mainNav.children[i].disabled = false;
    }
    mainButton.disabled = true;

    content.innerHTML = `<p>${data[main]["_doc"]}</p>`;

    for (let sub in data[main]) {
      if (sub == "_doc") continue;
      let subButton = document.createElement("button");
      subButton.innerText = sub;
      subButton.onclick = () => {
        window.history.pushState(
          { main: main, sub: sub },
          `Title: ${main} ${sub}`,
          `${main}=${sub}`
        );
        loadContent(main, sub, subButton);
        stateManager.add(main, sub);
      };
      subNav.appendChild(subButton);
    }
  }

  function loadContent(main, sub, subButton) {
    for (let i = 0; i < subNav.children.length; i++) {
      subNav.children[i].disabled = false;
    }
    subButton.disabled = true;
    content.innerHTML = "<p>" + data[main][sub]["content"] + "</p>";
    source.innerHTML = "<p>" + data[main][sub]["references"][0] + "</p>";
  }

  backButton.onclick = stateManager.undo;

  function loadMenu(mainToReach, subToReach, oldMain) {
    if (mainToReach != oldMain && !subToReach) {
      let mainButton;
      for (let i = 0; i < mainNav.children.length; i++) {
        if (mainNav.children[i].innerText == mainToReach) {
          mainButton = mainNav.children[i];
        }
      }
      loadSubNav(mainToReach, mainButton);
    } else if (subToReach) {
      let subButton;
      for (let i = 0; i < subNav.children.length; i++) {
        if (subNav.children[i].innerText == subToReach) {
          subButton = subNav.children[i];
        }
      }
      loadContent(mainToReach, subToReach, subButton);
    }
  }

  function returnToStart() {
    while (subNav.firstChild) {
      subNav.removeChild(subNav.firstChild);
    }
    for (let i = 0; i < mainNav.children.length; i++) {
      mainNav.children[i].disabled = false;
    }
    content.innerHTML = `<p>Herzlich Wilkommen!</p>
            <p>Sie können ein Hauptthema auswählen und anschließend ein Unterthema, um sich eine passende Beschreibung anzuschauen.</p>`;
    source.innerHTML = "<p>https://www.w3schools.com/</p>";
  }
  window.onpopstate = stateManager.undo;
})();
