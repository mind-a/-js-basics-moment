const COORDS = "coords";
const API_KEY = "xxxx";
//https://openweathermap.org/ 의 api 키

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    //key값 value값 같게 하려면 latitude : latitude 라고 안하고 위처럼 해도 됨
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("Can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else {
        //getWeather
    }
}
function init() {
    loadCoords();
}
init();
