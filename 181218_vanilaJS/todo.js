const frmTodo = document.querySelector('.frm-todo'),
    inputTodo = frmTodo.querySelector('input'),
    listTodo = document.querySelector('.list-todo');


const TODOS_LS = 'toDos';

const handleDelBtnClick = event => {
    console.log(event);
}

//입력한 투두를 리스트에 출력하는 함수
const printTodo = value => {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');

    delBtn.innerHTML = 'X';
    span.innerText = value;
    li.appendChild(delBtn);
    li.appendChild(span);
    listTodo.appendChild(li);
}

//텍스트 인풋 영역에 투두 입력 후 제출 시 발생하는 이벤트
const handleSubmit = event => {
    event.preventDefault();
    const todoValue = inputTodo.value;
    printTodo(todoValue);
    inputTodo.value = "";
}

//로컬스토리지에 저장된 투두리스트를 불러오는 함수
const loadToDos = () => {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

const todoInit = () => {
    loadToDos();
    frmTodo.addEventListener('submit', handleSubmit);

    const delBtn = listTodo.querySelector('button');
    delBtn.addEventListener('click', handleDelBtnClick);
}

todoInit();