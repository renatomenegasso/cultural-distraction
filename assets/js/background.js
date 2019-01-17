(function() {
  let currentBlocks = {};

  let checkTabBlock = (tabId, changeInfo, tab) => {
    if(!changeInfo.url || changeInfo.url.indexOf('facebook') == -1) {
      return;
    }

    chrome.storage.sync.get(['fb'], (result) => {
      if(result['fb']) {
        chrome.tabs.update(tab.id, {
          url: 'https://en.wikipedia.org/wiki/Special:Random'
        });
      }
    });
  };

  chrome.tabs.onUpdated.addListener(checkTabBlock);

  chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    currentBlocks = msg;
    console.log(currentBlocks);
    chrome.storage.sync.set(msg);
  })
})();
