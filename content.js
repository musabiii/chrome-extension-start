const video = document.querySelector("video");

document.addEventListener("mouseleave", function (e) {
  video.pause();
});

document.addEventListener("mouseenter", function (e) {
  video.play();
});
