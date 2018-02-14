// Workaround for autoplay blocking on popoular browsers in 2017.
document.onclick = () => {
  document.querySelector("audio").play();
};
