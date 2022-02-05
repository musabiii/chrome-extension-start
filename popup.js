const extActive = localStorage.getItem("ExtensionActive");
const checkbox = document.querySelector("#checkbox");

if ((extActive === "true")) {
  checkbox.checked = true;
} else {
  checkbox.checked = false;
}
console.log(checkbox);
checkbox.addEventListener("click", (e) => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, checkbox.checked);
  localStorage.setItem("ExtensionActive", checkbox.checked + "");

  });

  console.log(checkbox.checked);
});

console.log("open");
