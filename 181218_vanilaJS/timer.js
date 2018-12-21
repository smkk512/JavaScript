
const clockText = document.querySelector("#Clock");
const clockClicked = 'ClockClicked';

const getTime = () =>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours<10? '0'+hours:hours}:${minutes<10 ? '0'+minutes:minutes}:${seconds < 10 ? '0'+seconds:seconds}`;
}

const handleClick = () => {
    const hasID = clockText.classList.contains(clockClicked);
    if(hasID){
        clockText.classList.remove(clockClicked);
    } else {
        clockText.classList.add(clockClicked);
    }
}

const timerMain = () =>{
    clockText.innerHTML = getTime();
    clockText.addEventListener("click", handleClick);

    setInterval(()=>{
        clockText.innerHTML = getTime();
    }, 1000);
}

timerMain();