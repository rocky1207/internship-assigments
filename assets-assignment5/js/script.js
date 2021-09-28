function start() {
    var w = window.innerWidth;
    if(w>1274) {
        var main = document.getElementsByTagName('main');
        main[0].removeAttribute('class');
        main[0].setAttribute('class', 'wrappBig');
        var footer = document.getElementsByTagName('footer');
        footer[0].removeAttribute('class');
        footer[0].setAttribute('class', 'wrappBig');
    }
}
function validateForm(f) {
    if(f.email.value != '') {
        var p = document.createElement('p');
        var form = document.getElementsByTagName('form');
        
        p.innerHTML = 'Kralju';
        p.style.color = '#fff';
        form[0].appendChild(p);
        
       //alert('Kralju');
    }
    //return true;
}

