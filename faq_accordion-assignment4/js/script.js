function start() {
    var question = document.getElementsByClassName('question');
    
    for(var i=0; i<question.length; i++) {
        question[i].setAttribute('onclick', 'showAnswer(this,'+i+')');
    }
    
}

function showAnswer(p,i) {
    var text = ['You can invite 10 members, maximum.', 'No more than 2GB. All files in your account must fit your allotted storage space.', 'You should call an operator!', 'Of course You can...', 'Yes, we do...'];
    p.style.fontWeight = '700';
    p.style.color = '#1E1F36';
    p.children[1].style.transform = 'rotate(180deg)';
    var div = document.getElementsByClassName('pHolders');
    var write_p = document.createElement('p');
    div[i].appendChild(write_p);
    
    write_p.setAttribute('class', 'ispis');
    var ispis = document.getElementsByClassName('ispis');
    
    
    if(ispis.length == 1) {
        ispis[0].innerHTML = text[i];
        
        console.log(i);
    } else {
        ispis[i].innerHTML = '';
    } 
}
/*
function deleteAnswer(el) {
    var num = 1;
    num += el;
    console.log(num);
}*/