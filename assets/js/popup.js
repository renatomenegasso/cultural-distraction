(function() {
  let blocks = {
    'fb': true
  };

  let fbToggler = document.querySelector('#toggle-fb');

  chrome.storage.sync.get(['fb'], (result) => {
    blocks = result;
    chrome.runtime.sendMessage(blocks);
    fbToggler.checked = blocks['fb'];
  });

  fbToggler.addEventListener('change', function() {
    blocks['fb'] = !blocks['fb'];
    chrome.runtime.sendMessage(blocks);
  });
})();
