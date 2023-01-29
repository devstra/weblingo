  $(function() {
        $('#keywordsubmit').click(function() {
            var inputText = $('#keyword').val();
            if (inputText) {
                chrome.runtime.sendMessage(
                    {text: inputText, lang: "french", requestType: "en_to_learn"},
                    function(response) {
                        result = response.farewell;
                        alert(result.summary);
                        var notifOptions = {
                            type: "basic",
                            title: "Translation",
                            message: result.summary
                        };
                        chrome.notifications.create('Translation', notifOptions);
                    });
            }
        });
    });

    $(function(){
        $('#keywordsubmit').click(function(){
            var search_topic = $('#keyword').val();
            if (search_topic){
                    chrome.runtime.sendMessage(
                        {topic: search_topic},
                        function(response) {
                            result = response.farewell;
                            alert(result.summary);
                            var notifOptions = {
                                type: "basic",
                                iconUrl: "icon48.png",
                                title: "WikiPedia Summary For Your Result",
                                message: result.summary
                            };
                            
                            chrome.notifications.create('WikiNotif', notifOptions);
                            
                        });
            }
                
            $('#keyword').val('');
            
        });
    });

    

    