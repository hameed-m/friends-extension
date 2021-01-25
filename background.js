chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://egybest.com/";
  chrome.tabs.create({ url: newURL });
});
