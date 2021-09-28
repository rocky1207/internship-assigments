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

