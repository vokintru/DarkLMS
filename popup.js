document.addEventListener('DOMContentLoaded', function () {
    var toggleSwitch = document.getElementById('toggle');
    var toggleBanersSwitch = document.getElementById('toggle-baners');

    chrome.storage.sync.get(['enabled', 'enabled-baners'], function (data) {
        toggleSwitch.checked = data.enabled || false;
        toggleBanersSwitch.checked = data['enabled-baners'] || false;
    });

    toggleSwitch.addEventListener('change', function () {
        chrome.storage.sync.set({ 'enabled': toggleSwitch.checked });
        chrome.tabs.query({url: "https://lms.yandex.ru/*"}, function(tab) {
            chrome.tabs.reload(tab[0].id)
        })
    });

    toggleBanersSwitch.addEventListener('change', function () {
        chrome.storage.sync.set({ 'enabled-baners': toggleBanersSwitch.checked });
        chrome.tabs.query({url: "https://lms.yandex.ru/*"}, function(tab) {
            chrome.tabs.reload(tab[0].id)
        })
    });
});
