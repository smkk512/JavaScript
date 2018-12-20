
const clockText = document.querySelector("#Clock");
const welcomeText = document.querySelector("#welcomeText")
const inputName = document.querySelector("#inputName")
const clockClicked = 'ClockClicked';

const getTime = () =>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours<10? '0'+hours:hours}:${minutes<10 ? '0'+minutes:minutes}:${seconds < 10 ? '0'+seconds:seconds}`;
}

const handleNameSubmit = (event) =>{
    const key = event.which || event.keyCode;
    if(key === 13){
        const value = event.currentTarget.value;
        setName(value);
    }
}

const setName = (name) => {
    const localName = localStorage.getItem('currentUser');
    if(localName === null){
        localStorage.setItem('currentUser', name);    
    }
    
    welcomeText.innerHTML = "welcome "+localName;
}

const handleClick = () => {
    const hasID = clockText.classList.contains(clockClicked);
    if(hasID){
        clockText.classList.remove(clockClicked);
    } else {
        clockText.classList.add(clockClicked);
    }
}

const init = () =>{
    clockText.innerHTML = getTime();
    clockText.addEventListener("click", handleClick);
    inputName.addEventListener("keypress", handleNameSubmit);

    setInterval(()=>{
        clockText.innerHTML = getTime();
    }, 1000);
}

init();