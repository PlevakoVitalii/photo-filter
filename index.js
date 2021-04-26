const inputs = document.querySelectorAll(".filters input");
const outputs = document.querySelectorAll(".filters output");
const btnFullscreen = document.querySelector(".fullscreen");

/*FILTERS*/
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );

  //outputs[2].output.name[`--${this.name}`].innerHTML = this.value;
  //alert(outputs[2].name);
  //outputs.value = this.value;
  //document.getElementById(id).innerHTML = this.value
}

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
//outputs.forEach((input) => outputs.value = this.value;
console.log(inputs);
console.log(outputs);

/* FOOLSCREEN */
btnFullscreen.addEventListener(
  "click",
  function (e) {
    toggleFullScreen();
  },
  false
);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
