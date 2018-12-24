const greetings = document.querySelector(".greetings");
const inputName = document.querySelector(".inputName");

const welcomeText = document.querySelector(".welcomeText");

const CURRENT_USER_LS = 'currentUser';
const SHOWING_CN = 'showing';
const NONSHOWING_CN = 'nonShowing'


const askForName = () => {
    greetings.classList.add(SHOWING_CN);
    greetings.addEventListener('submit', handleNameSubmit);
}

const printGreeting = (name) => {
    greetings.classList.remove(SHOWING_CN);
    greetings.classList.add(NONSHOWING_CN);
    welcomeText.classList.remove(NONSHOWING_CN);
    welcomeText.classList.add(SHOWING_CN);
    welcomeText.innerText = "welcome "+ name;
}

const loadName = () => {
    const localName = localStorage.getItem(CURRENT_USER_LS);
    
    if(localName === null){
        askForName();
    } else {
        printGreeting(localName);
    }
    
}

const setName = (name) => {
    localStorage.setItem(CURRENT_USER_LS, name);
}

const handleNameSubmit = (event) =>{
    event.preventDefault();
    const name = inputName.value;
    printGreeting(name);
    setName(name);
}

const greetingInit = () => {
    loadName();
}

const greetingMain = () => {
    greetingInit();
}

greetingMain();