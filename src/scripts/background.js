
var serverhost = 'http://127.0.0.1:8000';
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.requestType === "en_to_learn") {
            url = serverhost + '/weblingo/en_to_learn/?text=' + encodeURIComponent(request.text) + '&lang=' + encodeURIComponent(request.lang);
        } else if (request.requestType === "learn_to_en") {
            url = serverhost + '/weblingo/learn_to_en/?text=' + encodeURIComponent(request.text) + '&lang=' + encodeURIComponent(request.lang);
        }
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(response => console.log(response))
            .then(response => sendResponse({farewell: response}))
            .catch(error => console.log(error))
            return true;
        });



/** 
        (async () => {chrome.runtime.sendMessage(
            {text: inputText, lang: "french"},
            function(response) {
                result = response.farewell;
                alert(result.summary);
                var notifOptions = {
                    type: "basic",
                    title: "Translation",
                    message: result.summary
                };
                chrome.notifications.create('Translation', notifOptions);
            }) });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        (async () => {
            const response = await chrome.runtime.sendMessage({greeting: "test"});
            console.log(response);
        })();
    }
});

**/