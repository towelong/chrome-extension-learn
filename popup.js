const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
btn.addEventListener('click', event => {
    chrome.tabs.create({
        url: 'index.html',
    })
})
btn2.addEventListener('click', async event => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    })
    chrome.tabs.sendMessage(tab.id, {
        action: 'click',
        payload: 'i come form popop',
    })
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, payload } = request
    console.log(action, payload, 'popop got!')
    sendResponse('popop got!')
})