function showMenu() {
    let menuBox = document.getElementById("menu");
    menuBox.classList.toggle("hidden");
    //let everythingElse = document.getElementById("container");
    //everythingElse.classList.toggle("hidden");
}

document.getElementById("navtext").onclick = showMenu;

