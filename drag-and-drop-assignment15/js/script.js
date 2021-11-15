const pluses = document.querySelectorAll('.fa-plus-js');
let mainDiv;

for (let i = 0; i < pluses.length; i++) {
    pluses[i].addEventListener('click', () => {
        plus = pluses[i];
        hide(plus, i);
    });
}

function removeHide(el) {
    el.classList.remove('hide');
}
function hide(el, i) {
    el.classList.add('hide');
    const createTasks = document.querySelectorAll('.create-task-js');
    const createTask = createTasks[i];
    removeHide(createTask);
}
const submit = document.querySelectorAll('.submit-js');
const input = document.querySelectorAll('.input-task-js');

submit.forEach((btnSubmit) => {
    btnSubmit.addEventListener('click', () => {
        const index = parseInt(btnSubmit.value);
        const inputValue = input[index].value;
        createTask(index, inputValue);
        plus.classList.remove('hide');
        const createTaskArticles = document.querySelectorAll('.create-task-js');
        const createTaskArticle = createTaskArticles[index];
        createTaskArticle.classList.add('hide');
    });
});

function createTask(num, inputValue) {
    const newTask = document.createElement('article');
    newTask.classList.add('task');
    newTask.classList.add('task-js');
    newTask.setAttribute('draggable', 'true');
    const h3 = document.createElement('h3');
    h3.innerText = `${inputValue}`;
    newTask.appendChild(h3);
    sections[num].appendChild(newTask);
    //saveMain(); /* u momentu kreiranja svakog novog zadatka (ARTICLE elementa) pozivam ovu funkciju */
    addFunctions();
}
/* SPORNI MOMENTAT 

function saveMain() {
    mainDiv = document.querySelector('body');
    localStorage.setItem('body', mainDiv.innerHTML);
}

window.addEventListener('load', init);
function init() {
    let saved = localStorage.getItem('body');
    if (saved) {
        ispis(saved);
    }
}
function ispis(mainDiv) {
    console.log(mainDiv);
    let body = document.querySelector('body');
    body.innerHTML = mainDiv;
}
*/
const sections = document.querySelectorAll('.section');

function addFunctions() {
    tasks = document.querySelectorAll('.task-js');
    for (task of tasks) {
        task.addEventListener('dragstart', dragStart);
        task.addEventListener('dragend', dragEnd);
    }
}

function dragStart() {
    this.classList.add('hold');
    setTimeout(() => ((this.className += 'hide'), 0));
    this.setAttribute('data-num', tasks.length - 1);
}

function dragEnd() {
    this.classList.remove('hold');
    this.classList.remove('hide');
    this.removeAttribute('data-num');
}

for (const part of sections) {
    part.addEventListener('dragover', dragOver);
    part.addEventListener('dragEnter', dragEnter);
    part.addEventListener('dragleave', dragLeave);
    part.addEventListener('drop', dragDrop);
}
function dragEnter(e) {
    e.preventDefault();
}
function dragLeave() {}
function dragOver(e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(this, e.clientY);
    const data = document.querySelector('[data-num]');
    dragDrop(this, data, afterElement);
}
function dragDrop(m, data, afterElement) {
    if (!afterElement) {
        m.appendChild(data);
    } else {
        m.insertBefore(data, afterElement);
    }
    m.className = 'section';
}
function getDragAfterElement(el, y) {
    const draggableElements = [
        ...el.querySelectorAll('.task-js:not([data-num])'),
    ];
    console.log(draggableElements);
    return draggableElements.reduce(
        (closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        },
        { offset: Number.NEGATIVE_INFINITY }
    ).element;
}
