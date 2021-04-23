const addForm = document.querySelector('.add-form');
const listInfo = document.querySelector('.list-info');
const listContainer = document.querySelector('.list-container');
const ul = document.querySelector('ul');
const editionContainer = document.querySelector('.edition-container');
const buttonAccept = document.querySelector('.button-accept');
const buttonCancel = document.querySelector('.button-cancel');
const editionInfo = document.querySelector('.edition-info');
const inputEdit = document.querySelector('.input-edit');
const inputText = document.querySelector('.input-tasks');
const inputInfo = document.querySelector('.input-info');
let editableP;

const addInfo = (e) => {
    e.preventDefault();
    
    if (inputText.value === '') {
        inputInfo.innerHTML = 'Wpisz treść zadania.';
        return;
    }
    inputInfo.innerHTML = '';
    const li = document.createElement('li');
    ul.appendChild(li);

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');
    li.appendChild(tasksContainer);

    const p = document.createElement('p');
    tasksContainer.appendChild(p);
    p.innerHTML = inputText.value;
    inputText.value = '';
    listInfo.innerHTML = '';

    const tasksButtons = document.createElement('div');
    tasksButtons.classList.add('tasks-buttons');
    tasksContainer.appendChild(tasksButtons);

    const buttonCheck = document.createElement('button');
    buttonCheck.classList.add('button-check');
    tasksButtons.appendChild(buttonCheck);

    const checkI = document.createElement('i');
    checkI.classList.add('fas', 'fa-check');
    buttonCheck.appendChild(checkI);
    buttonCheck.addEventListener('click', function () {
        p.classList.add('checked');
        checkI.classList.add('checked-icon');
        buttonCheck.setAttribute('disabled', '');
        buttonEdit.setAttribute('disabled', '');
    });

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('button-edit');
    buttonEdit.innerHTML = 'Edytuj';
    tasksButtons.appendChild(buttonEdit);
    buttonEdit.addEventListener('click', function () {
        editionInfo.innerHTML = '';
        editionContainer.classList.add('show');
        inputEdit.focus();
        inputEdit.value = p.innerHTML;
        editableP = p;
    });

    const buttonClose = document.createElement('button');
    buttonClose.classList.add('button-close');
    tasksButtons.appendChild(buttonClose);

    const closeI = document.createElement('i');
    closeI.classList.add('fas', 'fa-times');
    buttonClose.appendChild(closeI);
    buttonClose.addEventListener('click', function () {
        li.remove();
        if (ul.childElementCount === 0) {
            listInfo.innerHTML = 'Brak zadań na liście.';
        }
    });
};

addForm.addEventListener('submit', addInfo);

buttonCancel.addEventListener('click', function() {
    editionContainer.classList.remove('show');
 });

 buttonAccept.addEventListener('click', function() {
            
    if (inputEdit.value == '') {
        editionInfo.innerHTML = 'Musisz podać jakąś treść!';
        return;
    }
    editionInfo.innerHTML = '';
    editableP.innerHTML = inputEdit.value;
    inputEdit.value = '';
    editionContainer.classList.remove('show');
});







