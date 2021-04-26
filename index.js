const inputs = document.querySelectorAll('.filters input')
const btnFullscreen = document.querySelector('.fullscreen');



/*FILTERS*/

function handleUpdate() {
  const suffix = this.dataset.sizin || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


/* FOOLSCREEN */
btnFullscreen.addEventListener("click", function (e) {
  toggleFullScreen();
}, false);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}