const body = document.querySelector('body');

const MAX_IMG = 5;
const TYPE_IMG = '.jpg';

const printImg = () => {
    const backgroundImg = new Image();
    backgroundImg.src = './images/bg_' + getRandNum(MAX_IMG) + TYPE_IMG;
    body.appendChild(backgroundImg);
    backgroundImg.classList.add('backgroundImg');
}

const getRandNum = maxNum => { //0~maxNum 1개의 난수 생성
    const number = Math.floor(Math.random() * maxNum) + 1;
    return number;
}

function init(){
    printImg();
}

init();