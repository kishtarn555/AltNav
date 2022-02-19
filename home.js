
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
    urlBar=document.getElementById('searchBar');
    navigator.serviceWorker.register("/serviceWorker.js"); 
    
    // btnInstall.addEventListener('click', (e)=> {
    //     deferredPrompt.prompt();
    //     deferredPrompt.userChoice.then((result)=> {
    //         deferredPrompt=null;
    //     })
    // })
    urlBar.addEventListener('keydown', searchBar)
}



function searchBar(ev) {    
    if (ev.key=='Enter') {
        let text = urlBar.value
        text.replaceAll(" ", "%20");
        window.location.href="index.html?q="+text
        console.log("LOL")

    }
}