function start() {
    var question = document.getElementsByClassName('question');
    
    for(var i=0; i<question.length; i++) {
        question[i].setAttribute('onclick', 'showAnswer(this,'+i+')');
    }
    
}

function showAnswer(obj,i) {
    var text = ['You can invite 10 members, maximum.', 'No more than 2GB. All files in your account must fit your allotted storage space.', 'You should call an operator!', 'Of course You can...', 'Yes, we do...'];
    obj.style.fontWeight = '700';
    obj.style.color = '#1E1F36';
    obj.children[1].style.transform = 'rotate(180deg)';
    var div = document.getElementsByClassName('pHolders');
    var p = document.createElement('p');
    p.style.paddingTop = '3px';
    div[i].appendChild(p);
    if(div[i].children.length >2) {
        p.remove();
    } else {
        p.innerHTML = text[i];
        setInterval(deleteAnswer, 3500, p);
    }
}
function deleteAnswer(p) {
    p.remove();
}

