
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
    
    urlBar=document.getElementById('urlBar');
    const urlParams = new URLSearchParams( window.location.search);
    
    btnInstall =document.getElementById('btnInstall');
    iframeBody=document.getElementById('iframeBody');
    navigator.serviceWorker.register("/serviceWorker.js"); 
    
    btnInstall.addEventListener('click', (e)=> {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((result)=> {
            deferredPrompt=null;
        })
    })
    urlBar.addEventListener('keydown', search)
    let q =urlParams.get('q');
    if (q) {
        urlBar.value=q;
        search({key:'Enter'});
    }
}



function search(ev) {    
    if (ev.key=='Enter') {
        let text = urlBar.value
        if (!text || text==="") return;
        let test = /^https:.*/.test(urlBar.value);
        if (test) {    
            iframeBody.src=urlBar.value;
            return;
        }
        test=/\.(org|com|net|mx)/.test(urlBar.value);
        if (test) {    
            iframeBody.src="https://"+urlBar.value;
            return;
        }
        text.replaceAll(" ", "%20");
        console.log("https://google.com/search?q="+text+"&igu=1");
        let t
        iframeBody.src="https://google.com/search?q="+text+"&igu=1";

    }
}