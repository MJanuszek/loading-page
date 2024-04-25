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
  }, 50);
}

loagindPage();
