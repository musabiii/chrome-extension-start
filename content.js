const video = document.querySelector("video");

let extActive = false;

document.addEventListener("mouseleave", function (e) {
    if (extActive) {
        video.pause();
        console.log('pause');
    }
});

document.addEventListener("mouseenter", function (e) {
    if (extActive) {
        video.play();
        console.log('play');
    }
});

chrome.runtime.onMessage.addListener((req)=>{
    extActive = req;
})
