let menuShowing = false

function onClick(){
    let holder = document.getElementById("holder");
    let container = document.getElementById("container");

    if (menuShowing === true) {
        holder.style.display = "none";
        container.style.display = "flex";
        menuShowing = false;

    }
    else{
        holder.style.display = "block";
        container.style.display = "none";
        menuShowing = true;
    }
}

document.getElementById("navtext").onclick = onClick;