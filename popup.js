document.addEventListener('DOMContentLoaded', function () {
    var toggleSwitch = document.getElementById('toggle');

    chrome.storage.sync.get('enabled', function (data) {
        toggleSwitch.checked = data.enabled || false;
    });

    toggleSwitch.addEventListener('change', function () {
        // Сохранение состояния переключателя в хранилище браузера
        chrome.storage.sync.set({ 'enabled': toggleSwitch.checked });
        chrome.tabs.query({url: "https://lms.yandex.ru/*"}, function(tab) {
            // reload tab with one of the methods from linked answer
            chrome.tabs.reload(tab[0].id)
        })
    });
});


