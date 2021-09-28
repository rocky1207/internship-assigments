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
    if(w<768) {
        const form = document.querySelector('.contactTab');
        const ignore = document.querySelector('.ignore');
        form.remove();
        ignore.remove();
    }
    const form = document.querySelector('.contact');
    const input = document.querySelector('.input');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value === '') {
            document.querySelector('.check').innerHTML = 'Oops! Please add your email';
            document.querySelector('.check').style.color = '#FB3E3E';
            if(w<768) {
                document.querySelector('.check').style.padding = '8px 10%';
            } else {
                document.querySelector('.check').style.padding = '8px 0 0 32px';
            }
        } else {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!input.value.match(pattern)) {
                document.querySelector('.check').innerHTML = 'Oops! Please check your email';
                document.querySelector('.check').style.color = '#FB3E3E';
                if(w<768) {
                    document.querySelector('.check').style.padding = '8px 10%';
                } else {
                    document.querySelector('.check').style.padding = '8px 0 0 32px';
                }
            } else {
                document.querySelector('.check').innerHTML = 'Succeess!!!';
                document.querySelector('.check').style.color = '#54E6AF';
                if(w<768) {
                    document.querySelector('.check').style.padding = '8px 10%';
                } else {
                    document.querySelector('.check').style.padding = '8px 0 0 32px';
                }
            }
        }
    })
}
