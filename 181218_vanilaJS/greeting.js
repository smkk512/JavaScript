const greetings = document.querySelector(".greetings");
const inputName = greetings.querySelector(".inputName");

const welcomeText = document.querySelector(".welcomeText");

const CURRENT_USER = 'currentUser';
const SHOW_LS = 'showing';


const askForName = () => {
    greetings.classList.add('showing');
    inputName.classList.add('showing');

    inputName.addEventListener('keypress', handleNameSubmit);
}

const loadName = () => {

    const localName = localStorage.getItem(CURRENT_USER);
    console.log(localName);
    
    if(localName === undefined){
        askForName();
    } else {
        welcomeText.classList.remove('nonShowing');
        welcomeText.classList.add('showing');
    }
    welcomeText.innerText = "welcome "+localName;
}

const setName = (name) => {
    localStorage.setItem(CURRENT_USER, name);
}

const handleNameSubmit = (event) =>{
    const key = event.which || event.keyCode; 
    if(key === 13){
        const value = event.currentTarget.value;
        setName(value);
    }
}

const greetingInit = () => {
    loadName();
}

const greetingMain = () => {
    greetingInit();
    
    
}

greetingMain();