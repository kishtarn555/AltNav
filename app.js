let deferredPrompt;
let btnInstall =document.getElementById('btnInstall');
window.addEventListener('beforeinstallprompt', (e)=> {
    e.preventDefault();
    deferredPrompt=e;
    btnInstall.style.display="block";
});

btnInstall.addEventListener('click', (e)=> {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((result)=> {
        deferredPrompt=null;
    })
})
