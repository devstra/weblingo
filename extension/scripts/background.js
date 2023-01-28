// Extension state control flow
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

chrome.action.onClicked.addListener(async (tab) => {
    const prevState = await chrome.action.getBadgeText({ tabID : tab.id});
    const nextState = prevState === "ON" ? "OFF" : "ON";
    
    await chrome.action.setBadgeText({
        tabID : tab.id,
        text : nextState,
    })
    });