let footer = document.getElementById("footer");

footer.addEventListener("click", showingMenu);

let smallScreen = window.matchMedia("(max-width: 768px)");

window.addEventListener("resize", displayIssue);

function showingMenu(e) {
  if (e.target.tagName === "LI" && !e.target.firstElementChild && smallScreen.matches) {
    let ul = e.target.closest("ul");

    for (let i = 1; i < ul.children.length; i++) {
        ul.children[i].classList.toggle("hidden");
    }
  }
}


function displayIssue() {

    let uls = document.querySelectorAll("ul");

    if (smallScreen.matches) {
        for (let ul of uls) {
            for (let i = 1; i < ul.children.length; i++) {
                ul.children[i].classList.remove("list-item");
                ul.children[i].classList.add("hidden");
            }
        }
    } else {
        for (let ul of uls) {
            for (let i = 1; i < ul.children.length; i++) {
                ul.children[i].classList.add("list-item");
                ul.children[i].classList.remove("hidden");
            }
        }
    }
}