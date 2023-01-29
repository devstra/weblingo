// Extension state control flow
const extensions = "https://developer.chrome.com/docs/extensions"

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});
var currentState;
chrome.action.onClicked.addListener(async () => {
    const prevState = await chrome.action.getBadgeText({});
    const nextState = prevState === "ON" ? "OFF" : "ON";
    currentState = prevState;
    
    await chrome.action.setBadgeText({
        text : nextState,
    })
});