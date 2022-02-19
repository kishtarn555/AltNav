
window.onload=init;

let deferredPrompt;
let urlBar;
let btnInstall;
let iframeBody;
window.addEventListener('beforeinstallprompt', (e)=> {
    e.preventDefault();
    deferredPrompt=e;
    btnInstall.style.display="block";
});
function init() {
    btnInstall =document.getElementById('btnInstall');
    urlBar=document.getElementById('urlBar');
    iframeBody=document.getElementById('iframeBody');
    navigator.serviceWorker.register("/serviceWorker.js"); 

    btnInstall.addEventListener('click', (e)=> {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((result)=> {
            deferredPrompt=null;
        })
    })
    urlBar.addEventListener('keydown', search)
}


function changeUrl() {
    urlBar.value = iframeBody.contentWindow.location.href;
}

function search(ev) {
    console.log
    if (ev.key=='Enter') {
        iframeBody.src=urlBar.value;
    }
}