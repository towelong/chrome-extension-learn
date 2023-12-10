chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, payload } = request;
    console.log(request);
    sendResponse("content got!")
})

window.onload = () => {
    console.log('content loaded')
    console.log(document.getElementsByClassName("main-nav"))
    const nav = document.getElementsByClassName("main-nav")[0]
    let btn = document.createElement('button')
    btn.innerHTML = "发送消息"
    btn.addEventListener('click', () => {
        chrome.runtime.sendMessage({
            action: 'content click',
            payload: 'I come from content.js',
        })
    })
    nav.appendChild(btn)
}