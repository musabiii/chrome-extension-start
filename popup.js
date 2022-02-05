console.log("s");
// console.log(chrome.bookmarks);
const checkbox = document.querySelector("#checkbox");
console.log(checkbox);
checkbox.addEventListener("click", (e) => {

  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, checkbox.checked);
  });

  console.log(checkbox.checked);
});

console.log('open');
