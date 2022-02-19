
window.onload=init;

let deferredPrompt;

let btnInstall;
window.addEventListener('beforeinstallprompt', (e)=> {
    e.preventDefault();
    deferredPrompt=e;
    btnInstall.style.display="block";
});
function init() {
    btnInstall =document.getElementById('btnInstall');
    

    btnInstall.addEventListener('click', (e)=> {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((result)=> {
            deferredPrompt=null;
        })
    })
}