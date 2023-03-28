function showAlert() {
  alert("今日も楽しく開発しよう！");
}

document.getElementById("alertButton").onClick = function () {
  showAlert();
};

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showAlert,
  });
});
