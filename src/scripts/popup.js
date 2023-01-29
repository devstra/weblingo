    $(function() {
        $('#keywordsubmit').onClick(function() {
            var attemptValue = $('#keyword').val();
            if (attemptValue) {
                chrome.runtime.sendMessage(
                    {word: attemptValue},
                    function(response) {
                        result = response.farewell;
                        alert(result.summary);
                        var notifOptions = {
                            type: "basic",
                            title: "Translation for word",
                            message: result.summary
                        };
                        chrome.notifications.create('Translation', notifOptions);
                    })
            }
        });
    });