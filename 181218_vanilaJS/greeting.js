const nameContainer = document.querySelector('.js-name');

const CURRENT_USER_LS = 'currentUser';

const printInputName = () => {
    const inputName = document.createElement('input');
    inputName.placeholder = 'Type your name here';
    inputName.type = 'text';
    inputName.classList.add('inputName');
    
    const form = document.createElement('form');
    form.addEventListener('submit', handleNameSubmit);

    form.appendChild(inputName);
    nameContainer.appendChild(form);
}

const askForName = () => {
    printInputName();
}

const printName = name => {
    nameContainer.innerHTML='';
    const nameSpan = document.createElement('span');
    nameSpan.innerText = 'Hello ' + name + '!' ;

    nameContainer.appendChild(nameSpan);
}

const loadName = () => {
    const localName = localStorage.getItem(CURRENT_USER_LS);
    if(localName === null){ //로컬 저장소에 이름이 저장되어 있지 않으면
        askForName(); //이름을 입력할 수 있는 입력 필드를 통해 이름을 로컬 저장소에 저장한다.
    } else {
        printName(localName); //저장된 이름과 환영 문구를 화면에 출력한다.
    }
}

const setName = name => {
    if(name){
        localStorage.setItem(CURRENT_USER_LS, name);
    }else{
        console.log('Name is null');
    }
}

const handleNameSubmit = event =>{
    event.preventDefault();  
    const name = event.target.querySelector('input').value;
    printName(name);
    setName(name);
}

const greetingInit = () => {
    loadName();
}

greetingInit();