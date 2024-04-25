const loadingTitle = document.getElementById("loading-nb");
const loadingBar = document.getElementById("loading-progress");
const page = document.getElementById("container-div");

let number = 0;
let loaded = false;

function loadedAnimation() {
  if (loaded === true) {
    page.style.backgroundImage = 'url("/scott-webb-oRWRlTgBrPo-unsplash.jpg")';
    loadingTitle.textContent = "WELCOME";
    loadingTitle.classList.add("welcome");
    loadingBar.style.width = 0;
    page.addEventListener("mousemove", (event) => {
      let x = event.offsetX;
      let y = event.offsetY;
      let div = document.createElement("div");
      div.classList.add("leaf");
      div.style.left = x + "px";
      div.style.right = y + "px";
      const size = Math.random() * 100;
      div.style.width = size + "px";
      div.style.height = size + "px";

      page.appendChild(div);
      setTimeout(() => {
        div.remove();
      }, 5000);
    });
  } else {
    return;
  }
}

function loagindPage() {
  let loading = setInterval(() => {
    number++;
    loadingTitle.textContent = number + "%";
    loadingBar.style.width = number / 5 + "%";

    if (number >= 100) {
      loaded = true;
      console.log(loaded);
      loadedAnimation();
      clearInterval(loading);
      return;
    }
  }, 40);
}

loagindPage();
