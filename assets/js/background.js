(function() {
  let currentBlocks = {};

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if(changeInfo.url && changeInfo.url.indexOf('facebook') > -1) {
      chrome.storage.sync.get(['fb'], (result) => {
        if(result['fb']) {
          chrome.tabs.update(tab.id, {
            url: 'https://en.wikipedia.org/wiki/Special:Random'
          });
        }
      });
    }
  });

  chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    currentBlocks = msg;
    console.log(currentBlocks);
    chrome.storage.sync.set(msg);
  })
})();

