const frmTodo = document.querySelector('.todo'),
    inputTodo = frmTodo.querySelector('input'),
    listTodo = document.querySelector('.js-todo-list');


const TODOS_LS = 'toDos';

let arrToDos = []; // todo를 오브젝트에 담아 배열로 저장

const handleDelBtnClick = event => {
    const target = event.target.parentNode;
    listTodo.removeChild(target);

    const resetTodos = arrToDos.filter(todo => {
        return todo.id !== target.id;
    });

    arrToDos = resetTodos;
    saveToDos();
    
    //foreach를 이용한 방법
    // arrToDos.forEach(todo => {
    //     if(todo.id === target.id){
    //         const targetIndex = arrToDos.indexOf(todo);
    //         arrToDos.splice(targetIndex,1);
    //     }
    // });
    // saveToDos();
}

//입력한 투두를 리스트에 출력하는 함수
const printTodo = value => {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');

    delBtn.innerHTML = 'X';
    delBtn.classList.add('delBtn');

    delBtn.addEventListener('click', handleDelBtnClick);
    const objTodo = {
        id:'todo_' + (arrToDos.length +1),
        text:value,
    };
    span.innerText = objTodo.text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = objTodo.id;
    arrToDos.push(objTodo);
    saveToDos();

    listTodo.appendChild(li);
}

//텍스트 인풋 영역에 투두 입력 후 제출 시 발생하는 이벤트
const handleSubmit = event => {
    event.preventDefault();
    const todoValue = inputTodo.value;
    printTodo(todoValue);
    inputTodo.value = "";
}

//todo배열을 localstorage에 저장하는 함수
const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(arrToDos));
}

//로컬스토리지에 저장된 투두리스트를 불러오는 함수
const loadToDos = () => {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedToDos = JSON.parse(toDos);
        parsedToDos.forEach(todo => {
            printTodo(todo.text);
        });
    }
}

const todoInit = () => {
    loadToDos();
    frmTodo.addEventListener('submit', handleSubmit);
}

todoInit();