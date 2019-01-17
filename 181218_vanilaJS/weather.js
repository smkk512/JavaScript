(function(){
    const body = document.querySelector('body');

    const WHEATER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
    const WHEATER_API_KEY = 'ec1af28a6484cc1d0274cb33e52ff886';
    const LS_COORD = 'coord';

    function printWeahter(place, temp){
        const span = document.createElement('div');
        const placeSpan = document.createElement('div');

        span.classList.add('js-temp');
        span.innerText = temp;

        placeSpan.classList.add('js-place');
        placeSpan.innerText = place;

        body.appendChild(placeSpan);
        body.appendChild(span);
        
    }


    function getWeather(lat, lng){  //위도, 경도 입력 시 날씨 정보를 가져옴
        const latitude = 'lat=' + lat;
        const longitude = '&lon=' + lng;
        const apiKey = '&appid=' + WHEATER_API_KEY;
        const units = '&units=metric';

        const apiUrl = WHEATER_URL + latitude + longitude + apiKey + units;
        fetch(apiUrl).then(response=>{
            if(response.ok){
                return response.json();
            }
            throw new Error('Request Failed.');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse=>{
            const temp = jsonResponse.main.temp;
            const place = jsonResponse.name;
            printWeahter(place, temp);
        });
    }

    function askForCoord(){ //사용자의 위치 정보를 가져오는 함수
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(position => {
                const myLatitude = position.coords.latitude;
                const myLongtitude = position.coords.longitude;
                const myCoordObj = {
                    myLatitude,
                    myLongtitude,
                };
                saveCoords(myCoordObj);
                getWeather(myCoordObj.myLatitude, myCoordObj.myLongtitude);
            }, error => {
            console.log('Sorry, cannot access your location'); 
            });
        } else{
            console.log('Cannot use Geolocation in this broswer')
        }
    }

    function saveCoords(coordObj){ //로컬 스토리지에 사용자의 위치 정보를 저장하는 함수
        localStorage.setItem(LS_COORD, JSON.stringify(coordObj));
    }

    function loadCoord(){ //로컬 스토리지에 저장된 coord 정보에 따라 분기를 처리하는 함수
        const loadedCoord = localStorage.getItem(LS_COORD);
        if (loadedCoord === null){
            askForCoord();
        } else{
            const parseCoord = JSON.parse(loadedCoord);
            getWeather(parseCoord.myLatitude, parseCoord.myLongtitude);
        }
    }

    function init(){
        loadCoord();
    }

    init();
})();