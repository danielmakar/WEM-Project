let toolbar = document.getElementById("toolbar");
let toolbarElements = toolbar.querySelectorAll("a");
toolbarElements.forEach((element) => {
  element.onclick = (event) => {
    let target = event.target;
    let command = target.dataset.command;

    if (["h1", "h2", "h3"].includes(command)) {
      document.execCommand("formatBlock", false, command);
    } else if (["createLink"].includes(command)) {
      let url = prompt("Enter the link here: ", "http://");
      document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, null);
    }
  };
});
