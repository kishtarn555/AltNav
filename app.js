
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
}


function changeUrl() {
    urlBar.value = iframeBody.contentWindow.location.href;
}