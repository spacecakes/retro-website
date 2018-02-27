// I'm sorry for this. So sorry.
document.onload = () => {
  document.querySelector("audio").play();
};

// Change to WAP site at 200px width
let image = document.getElementById("me");
let headline = document.getElementById("headline");
let windowWidth = window.matchMedia("(max-width: 300px)");
function mediaQuery(windowWidth) {
  if (windowWidth.matches) {
    image.src = "assets/me-wap.png";
    headline.innerText = "Welcome to my WAP page";
  } else {
    image.src = "assets/me.gif";
    headline.innerText = "Welcome to my homepage";
  }
}

mediaQuery(windowWidth);
windowWidth.addListener(mediaQuery);
