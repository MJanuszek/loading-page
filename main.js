const loadingTitle = document.getElementById("loading-nb");
const loadingBar = document.getElementById("loading-progress");

let number = 0;

function loagindPage() {
  let loading = setInterval(() => {
    number++;
    loadingTitle.textContent = number + "%";
    loadingBar.style.width = number / 5 + "%";

    if (number >= 100) {
      clearInterval(loading);
      return;
    }
  }, 100);
}

loagindPage();
