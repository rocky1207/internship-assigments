if (window.innerWidth > 767) {
    document.querySelector('[alt=hamburger]').setAttribute('class', 'hidden');
    const flexibile = document.querySelectorAll('.flexibile');
    for (let i = 0; i < flexibile.length; i++) {
        flexibile[i].classList.add('flex-div');
    }
    document.querySelector('.bookmark').classList.remove('hidden');
}
if (window.innerWidth > 1199) {
    document.querySelector('.head').classList.add('wide');
}

document.querySelector('.action').addEventListener('click', function () {
    document.querySelector('main').classList.add('hidden');
    document.querySelector('.selection').classList.remove('hidden');
    backgroundChange();
});

document.querySelectorAll('.selectReward-js').forEach((button) => {
    button.addEventListener('click', function() {
        document.querySelector('main').classList.add('hidden');
        document.querySelector('.selection').classList.remove('hidden');
        backgroundChange();
    });
});
function backgroundChange() {
    if (window.innerWidth < 767) {
        document.querySelector('#background').classList.add('gradient');
        
    } else {
        document.querySelector('#background').classList.add('blackBackground');
        
        console.log(window.innerHeight);
    }
}
document.querySelector('[alt=close]').addEventListener('mouseover', function () {
        document.querySelector('[alt=close-hover]').classList.remove('hidden');
        document.querySelector('[alt=close]').classList.add('hidden');
    });
document.querySelector('[alt=close]').addEventListener('mouseout', function () {
    document.querySelector('[alt=close-hover]').classList.add('hidden');
    document.querySelector('[alt=close]').classList.remove('hidden');
});

document.querySelector('[alt=close-hover]').addEventListener('click', function () {
    document.querySelector('main').classList.remove('hidden');
    document.querySelector('.selection').classList.add('hidden');
    document.querySelector('#background').classList.remove('blackBackground');
});

const openPledge = document.querySelectorAll('.open-pledge-js');
const choosePledge = document.querySelectorAll('.choose-pledge');
const innerCircle = document.querySelectorAll('.inner-circle');
for (let i = 0; i < openPledge.length; i++) {
    openPledge[i].addEventListener('click', function () {
        choosePledge[i].classList.toggle('hidden');
        innerCircle[i].classList.toggle('hidden');
    });
}

const sendAmmount = document.querySelectorAll('.sendAmmount-js');
const inputField = document.querySelectorAll('.inputField-js');
for(let i=0; i<inputField.length; i++) {
inputField.forEach((click) => {
click.addEventListener('keyup', function() {
    const pattern = /^[0-9]+$/;
    for(let i=0; i<inputField.length; i++) {
        if(!inputField[i].value.match(pattern)) {
            inputField[i].value = '';
        }
    }
})
})

    inputField[i].addEventListener('click', function() {
        if(inputField[i].value == '0') {
            inputField[i].value = '';
        }
    })
    inputField[i].addEventListener('blur', function() {
        if(inputField[i].value == '') {
            inputField[i].value = '0';
        }
    })
}   
const barWidth = document.querySelector('.bar').offsetWidth;
const ammount = document.querySelector('.ammount');
const progress = document.querySelector('.progress');
let ammountValue = ammount.innerText;

progressBar(ammountValue);
function progressBar(amm) {
    ammountValue = amm.slice(1, ammount.length).replace(',', '');
    progress.style.width = ((parseInt(ammountValue)/1000)*(barWidth/100)).toString()+'px';
}
for(let i=0; i<sendAmmount.length; i++) {
    sendAmmount[i].addEventListener('click', function() {
        document.querySelector('.success').classList.remove('hidden');
        document.querySelector('.selection').classList.add('hidden');
        document.querySelector('main').classList.remove('hidden');
        let backersNum = 1;
            if(inputField[i].value == '0') {
                backersNum = 0;
            }
        const val = inputField[i].value;
        ammountValue = parseInt(ammountValue) + parseInt(val);
        backers(backersNum);
        rewards(1,i);
        writeAmmountValue(ammountValue);
    })
}

const rewardsLeft = document.querySelectorAll('.rewardsLeft-js');
const rewardsLeftDouble = document.querySelectorAll('.rewardsLeftDouble-js');
const product = document.querySelectorAll('.product');
const productJs = document.querySelectorAll('.product-js');
const selectRewardJs = document.querySelectorAll('.selectReward-js');
function rewards(dec,i) {
    if(i <=0) {
        i=1;
    } else {
    let numOfRewards = rewardsLeft[i-1].innerText;
    numOfRewards = parseInt(numOfRewards);
    numOfRewards = numOfRewards-dec;
    numOfRewards = numOfRewards.toString();
    if(numOfRewards <= 0) {
        numOfRewards = '0';
        productJs[i].classList.add('specialEdition');
        product[i-1].classList.add('specialEdition');
        selectRewardJs[i-1].disabled = 'true';
        selectRewardJs[i-1].innerText = 'Out of Stock';
        sendAmmount[i].disabled = 'true';
    }
    rewardsLeft[i-1].innerText = numOfRewards;
    rewardsLeftDouble[i-1].innerText = numOfRewards;
}
}
const backer = document.querySelector('.backer');
function backers(inc) {
    let backerValue = backer.innerText;
    backerValue = backerValue.replace(',', '');
    let numOfBackers = parseInt(backerValue)+inc;
    numOfBackers = numOfBackers.toString();
    if(numOfBackers.length > 3) {
        let part1 = numOfBackers.slice(0,  (numOfBackers.length-(numOfBackers.length-(numOfBackers.length-3))));
        let part2 = numOfBackers.slice((numOfBackers.length-3), (numOfBackers.length));
        numOfBackers = part1+','+part2;
    } 
    backer.innerText = numOfBackers;
} 

function writeAmmountValue(ammountValue) {
    if(ammountValue >100000) {
        ammountValue = 100000;
    }
    ammountValue = ammountValue.toString();
    if(ammountValue.length>3) {
        ammountValue = parseInt(ammountValue);
        ammountValue = (ammountValue/1000);
        ammountValue = ammountValue.toFixed(3);
    }
    ammountValue = ammountValue.toString();
    ammount.innerText = `$${ammountValue}`.replace('.', ',');
    ammountValue = ammountValue.replace('.', '');
    
    progressBar(`$${ammountValue}`);
}
document.querySelector('.refresh').addEventListener('click', function() {
    document.querySelector('.success').classList.add('hidden');
    if (window.innerWidth < 767) {
        document.querySelector('#background').classList.remove('gradient');
        
    } else {
        document.querySelector('#background').classList.remove('blackBackground');
    }
})


