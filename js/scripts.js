// Change to WAP site at 200px width
const image = document.getElementById("me");
const headline = document.getElementById("headline");
const windowWidth = window.matchMedia("(max-width: 320px)");
const midi = document.querySelector("audio");

function mediaQuery(windowWidth) {
  if (windowWidth.matches) {
    image.src = "assets/me-wap.png";
    headline.innerText = "Welcome to my WAP page";
    midi.pause();
  } else {
    image.src = "assets/me.gif";
    headline.innerText = "Welcome to my homepage";
    midi.play();
  }
}

mediaQuery(windowWidth);
windowWidth.addListener(mediaQuery);

/* // I'm sorry for this. So sorry.
document.onload = () => {
  midi.play();
};
 */
