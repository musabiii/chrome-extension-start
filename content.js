
const flex = document.querySelector('.ytp-left-controls');
const checkbox = document.createElement('input');

const checkboxContainer = document.createElement('div');
checkboxContainer.classList.add('checkbox-container');

// const pic = document.createElement('img');
// pic.classList.add('checkbox-pic');
// pic.src = './icon.png';


const boxCkeck = document.createElement('div');
boxCkeck.classList.add('box-check');

const boxCircle = document.createElement('div');
boxCircle.classList.add('box-circle');

// checkboxContainer.insertAdjacentElement('afterbegin',pic);

boxCkeck.insertAdjacentElement('afterbegin',boxCircle);
checkboxContainer.insertAdjacentElement('afterbegin',boxCkeck);
flex.insertAdjacentElement('beforeend',checkboxContainer);



boxCkeck.addEventListener("click", () => {
    checkbox.checked = !boxCkeck.classList.contains('active');
    boxCkeck.classList.toggle("active");
});





// const label = document.createElement('label');
// label.innerText = 'Mouse play'
// const div = document.createElement('input');
// div.type = 'checkbox';
// div.style.cursor = 'pointer';
// label.style.cursor = 'pointer';
// label.insertAdjacentElement('afterbegin',div);
// flex.insertAdjacentElement('beforeend',label);

// div.checked

const video = document.querySelector("video");

let extActive = false;

document.addEventListener("mouseleave", function (e) {
  if (checkbox.checked) {
    video.pause();
  }
});

document.addEventListener("mouseenter", function (e) {
  if (checkbox.checked) {
    video.play();
  }
});

chrome.runtime.onMessage.addListener((req) => {
  extActive = req;
});

