function start() {
    let mode = document.getElementsByClassName('upperSmall');
    mode[0].addEventListener('click', function () {
        let body = document.getElementsByTagName('body');
        body[0].classList.toggle('darkBckg');
    });
    search();
    let form = document.querySelector('.mainForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let input = document.querySelector('input');
        let value = input.value;
        search(value);
    });
}
function ajaxFunction() {
    let ajaxRequest;
    try {
        ajaxRequest = new XMLHttpRequest();
    } catch (e) {
        try {
            ajaxRequest = new ActiveXObject('MSXML2.XMLHTTP');
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
                alert('Your browser broke!');
                return false;
            }
        }
    }
    return ajaxRequest;
}
//function search(value = 'asdasd') {
function search(value = 'octocat') {
    let xhttp = ajaxFunction();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            let res = JSON.parse(xhttp.responseText);
            console.log(res);
            if (res.message == 'Not Found') {
                if (window.innerWidth < 768) {
                    document.querySelectorAll('.searchResult')[1].innerHTML =
                        'No results';
                    document.querySelectorAll(
                        '.searchResult'
                    )[1].style.textAlign = 'center';
                } else {
                    document.querySelectorAll('.searchResult')[0].innerHTML =
                        'No results';
                }
            } else {
                document.querySelectorAll('.searchResult')[0].innerHTML = '';

                document.querySelectorAll('.searchResult')[1].innerHTML = '';
                write(res);
            }
        }
        document.querySelector('input').value = '';
    };
    //xhttp.open('GET', value + '.json', true);
    xhttp.open('GET', 'https://api.github.com/users/' + value, true);
    xhttp.send();
}
function write(res) {
    let hTwo_dinamic = document.getElementsByClassName('hTwo_dinamic');
    if (res.name == null || res.name == '') {
        hTwo_dinamic[0].innerHTML = res.login;
    } else {
        hTwo_dinamic[0].innerHTML = res.name;
    }

    hTwo_dinamic[1].innerHTML = '@' + res.login;
    hTwo_dinamic[1].setAttribute('href', res.html_url);
    hTwo_dinamic[1].setAttribute('target', 'blank');
    hTwo_dinamic[2].innerHTML = displayTimeText(res.created_at);

    let avatar = document.getElementsByClassName('avatar');
    avatar[0].src = res.avatar_url;

    let numbers = document.getElementsByClassName('numbers');
    numbers[0].innerHTML = res.public_repos;
    numbers[1].innerHTML = res.followers;
    numbers[2].innerHTML = res.following;

    let text_dinamic = document.getElementsByClassName('text_dinamic');
    text_dinamic[0].innerHTML = res_bio(res.bio);

    let link = document.getElementsByClassName('link');
    const text = 'Not Avialable';
    const info = ['blog', 'twitter_username', 'company'];

    for (var i = 0; i < link.length; i++) {
        if (res[info[i]] == null || res[info[i]] == '') {
            writeLinkFalse(link, i, text);
        } else {
            writeLinkTrue(link, i, res, info);
        }
    }

    if (res.location == null || res.location == '') {
        document.getElementById('alone').innerHTML = text;
        document.getElementById('alone').classList.add('opacity');
        document.querySelectorAll('.socialImg')[0].classList.add('opacity');
    } else {
        document.getElementById('alone').innerHTML = res.location;
    }
}
function writeLinkFalse(link, i, text) {
    link[i].innerHTML = text;
    link[i].classList.add('opacity');
    document.querySelectorAll('.socialImg')[i + 1].classList.add('opacity');
}
function writeLinkTrue(link, i, res, info) {
    link[i].innerHTML = res_company(res[info[i]]);
    link[i].href = res[info[i]];
    link[i].setAttribute('target', 'blank');
}
function res_company(resCompany) {
    let word = '';
    let valueArray = Array.from(resCompany);
    if (valueArray[0] == '@') {
        let cut = valueArray.slice(1, valueArray.length);
        cut.forEach((letter) => {
            if (letter == ',') {
                letter = '';
            } else {
                word += letter;
            }
        });
        return word;
    } else {
        return resCompany;
    }
}
function res_bio(bioText) {
    if (!bioText) {
        return 'This profile has no bio.';
    } else {
        return bioText;
    }
}
function displayTimeText(info) {
    let year = '';
    let day = '';
    let month = '';
    let lines = 0;
    const stringArr = Array.from(info);
    stringArr.slice(0, stringArr.indexOf('T')).forEach((letter) => {
        if (letter !== '-' && lines === 0) {
            year += letter;
        } else if (letter !== '-' && lines === 1) {
            month += letter;
        } else if (letter !== '-' && lines === 2) {
            day += letter;
        } else if (letter === '-') {
            lines++;
        }
    });
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const currentMonth = months[Number(month) - 1];
    console.log(`Joined ${day} ${currentMonth} ${year}`);
    return `Joined ${day} ${currentMonth} ${year}`;
}

