/* Variable for FILTERS */
const inputs = document.querySelectorAll(".filters input");

/* Variable for FOOLSCREEN */
const btnFullscreen = document.querySelector(".fullscreen");

/* Variable for NEXT PICTURE */
const baseSrc = "assets/img/";
const images = ["01.jpg", "02.jpg", "03.jpg"];
let i = 0;
const showImg = document.querySelector("img");
const btnNextImage = document.querySelector(".btn-next");

/*FILTERS*/
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
inputs.forEach((input) => input.addEventListener("input", handleUpdate));

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

/*NEXT PICTURE*/
function viewBgImage(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    showImg.src = `${src}`;
  };
}

function getImage() {
  const index = i % images.length;
  const imageSrc = baseSrc + images[index];
  viewBgImage(imageSrc);
  i++;
  btnNextImage.disabled = true;
  setTimeout(function () {
    btnNextImage.disabled = false;
  }, 1000);
}
btnNextImage.addEventListener("click", getImage);

/*LOAD PICTURE*/
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector(".image-container");

fileInput.addEventListener("change", function (e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    imageContainer.innerHTML = "";
    imageContainer.append(img);
  };
  reader.readAsDataURL(file);
});
