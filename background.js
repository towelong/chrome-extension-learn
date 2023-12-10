console.log('background')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, payload } = request
    console.log(action, payload, 'background got!')
    sendResponse('background got!')
})

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: 'translateMenu',
        title: '翻译 %s',
        //只有当选中了内容，右键后才会出现插件menu
        contexts: ['selection'],
    })
})