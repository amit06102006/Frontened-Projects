const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// initiallly variables need??

let currentTab = userTab;
const API_KEY = "168771779c71f3d64106d8a88376808a";
currentTab.classList.add("current-tab");
getfromSessionStorage();


function switchTab(clickedTab) {
    if(clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            // kya serach wala form container is invisible , if yes then make it visisble
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            // main pahle search wale tab per tha to ab your weather tab ko visible krna hoga
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            // ab main your wearther tab me aa gya hoon , to weather bhi display krna hoga , so let;s 
            // check local storage first for cordinates , if we have saved there ;
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    // passed clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    // passed search tab as input parameter
    switchTab(searchTab);
});

// check if coordinates are already present in session storage 
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        // agar local coordinates nhi mille 
        grantAccessContainer.classList.add("active");
    }
    else {
        // coordinates hai session storage me
        const coordinates = JSON.parse(localCoordinates);
        // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const {lat,lon} = coordinates;
    // make grant container invisible
    grantAccessContainer.classList.remove("active");
    // loading dikhao
    loadingScreen.classList.add("active");

    // API call
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        // data fetch ho gya api se to ab loading invisible karo
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        // ab data to aa gya per uski values nikal ke ui per show karana hoga in weather info me
        renderWeatherInfo(data); 


    }
    catch(err) {
        loadingScreen.classList.remove("active");
        // hw

    }


}

function renderWeatherInfo(weatherInfo) {
    const cityName = document.querySelector('[data-cityName]');
    const countryIcon = document.querySelector('[data-countryIcon]');
    const desc = document.querySelector('[data-weatherDesc]');
    const weatherIcon = document.querySelector('[data-weatherIcon]');
    const temp = document.querySelector('[data-temp]');
    const windspeed = document.querySelector('[data-windspeed]');
    const humidity = document.querySelector('[data-humidity]');
    const clouds = document.querySelector('[data-cloud]');

    // fetch values from weather info object and pt in the ui elements 
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity.toFixed(2)} %`;
    clouds.innerText = `${weatherInfo?.clouds?.all.toFixed(2)} %`;



}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        // hw show an alert for no geolocation support
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat:position.coords.latitude,
        lon:position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
} 

const grantAccessButton  = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click",getLocation);


const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;
    console.log(cityName);

    if(cityName == "") {
        return;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }

})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");


    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        const data = await res.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
        console.log(data);
        }
    catch(err){


    }
    
}