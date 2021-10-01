function start() {
    let form = document.querySelector('.mainForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let input = document.querySelectorAll('[name]');
        for (let i = 0; i < input.length; i++) {
            switch (input[i].name) {
                case 'fname': {
                    validation(
                        input[i].value,
                        input[i].name,
                        input[i].placeholder
                    );
                    break;
                }
                case 'lname': {
                    validation(
                        input[i].value,
                        input[i].name,
                        input[i].placeholder
                    );
                    break;
                }
                case 'email': {
                    validation(
                        input[i].value,
                        input[i].name,
                        input[i].placeholder
                    );
                    break;
                }
                case 'password': {
                    validation(
                        input[i].value,
                        input[i].name,
                        input[i].placeholder
                    );
                    break;
                }
            }
        }
    });
}
function validation(val, name, placeholder) {
    let emptyText = placeholder + ' field cannot be empty';
    let wrongText = 'Looks like this is not ' + placeholder;
    let text = 'SUCCESS!';
    const patternName = /^[A-Za-z]+$/;
    const patternEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternPassword = /^(?=.*\d.*).{8,}$/;
    let notification = document.getElementsByClassName('notification');
    let image = document.getElementsByName('img');
    if (val == '') {
        switch (name) {
            case 'fname':
                notification[0].innerHTML = emptyText;
                notification[0].style.color = '#FF7979';
                image[0].removeAttribute('class');
                image[0].setAttribute('class', 'error');
                break;
            case 'lname':
                notification[1].innerHTML = emptyText;
                notification[1].style.color = '#FF7979';
                image[1].removeAttribute('class');
                image[1].setAttribute('class', 'error');
                break;
            case 'email':
                notification[2].innerHTML = emptyText;
                notification[2].style.color = '#FF7979';
                image[2].removeAttribute('class');
                image[2].setAttribute('class', 'error');
                break;
            case 'password':
                notification[3].innerHTML = emptyText;
                notification[3].style.color = '#FF7979';
                image[3].removeAttribute('class');
                image[3].setAttribute('class', 'error');
                break;
        }
    } else if (val != '') {
        switch (name) {
            case 'fname':
                if (val.match(patternName)) {
                    notification[0].innerHTML = text;
                    notification[0].style.color = '#38CC8B';
                    image[0].removeAttribute('class');
                    image[0].setAttribute('class', 'noError');
                } else {
                    notification[0].innerHTML = wrongText;
                    notification[0].style.color = '#5E54A4';
                    image[0].removeAttribute('class');
                    image[0].setAttribute('class', 'error');
                }
                break;
            case 'lname':
                if (val.match(patternName)) {
                    notification[1].innerHTML = text;
                    notification[1].style.color = '#38CC8B';
                    image[1].removeAttribute('class');
                    image[1].setAttribute('class', 'noError');
                } else {
                    notification[1].innerHTML = wrongText;
                    notification[1].style.color = '#5E54A4';
                    image[1].removeAttribute('class');
                    image[1].setAttribute('class', 'error');
                }
                break;
            case 'email':
                if (val.match(patternEmail)) {
                    notification[2].innerHTML = text;
                    notification[2].style.color = '#38CC8B';
                    image[2].removeAttribute('class');
                    image[2].setAttribute('class', 'noError');
                } else {
                    notification[2].innerHTML = wrongText;
                    notification[2].style.color = '#5E54A4';
                    image[2].removeAttribute('class');
                    image[2].setAttribute('class', 'error');
                }
                break;
            case 'password':
                if (val.match(patternPassword)) {
                    notification[3].innerHTML = text;
                    notification[3].style.color = '#38CC8B';
                    image[3].removeAttribute('class');
                    image[3].setAttribute('class', 'noError');
                } else {
                    notification[3].innerHTML = wrongText;
                    notification[3].style.color = '#5E54A4';
                    image[3].removeAttribute('class');
                    image[3].setAttribute('class', 'error');
                }
                break;
        }
    }
}
