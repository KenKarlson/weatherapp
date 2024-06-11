//'use strict';
const start = function(){
  const searchBox = document.querySelector('.search input');
  const searchBtn = document.querySelector('.search button');
  const weatherIcon = document.querySelector('.weather-icon');
  const weather = document.querySelector('.weather');
  const temp = document.querySelector('.temp');
  const city = document.querySelector('.city');
  const humidity = document.querySelector('.humidity');
  const wind = document.querySelector('.wind');
  const apiKey = '073a3401d1f073571f149fde27f8bb3c';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  async function checkWeather(cityName = 'Moscow'){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    let data  = await response.json();
    console.log(data);
    if (data.cod === 200){
      temp.innerHTML  = Math.round(data.main.temp) + ' °C';
      city.innerHTML   = data.name;
      humidity.innerHTML= data.main.humidity+ ' %';
      wind.innerHTML    = Math.round(data.wind.speed) + ' km/h';
    }else if(data.cod  ===  '404'){
      city.innerHTML = 'City not found';
      temp.innerHTML = 'XX °C';
    }
    let weatIco = data.weather[0].main.toLowerCase();
    switch (weatIco){
      case 'clear':
        weatherIcon.src =  './assets/img/clear.png';
        break;
      case 'drizzle':
        weatherIcon.src =  './assets/img/drizzle.png';
        break;
      case 'mist':
        weatherIcon.src =  './assets/img/mist.png';
        break;
      case 'snow':
        weatherIcon.src =  './assets/img/snow.png';
        break;
      case 'clouds':
        weatherIcon.src = './assets/img/clouds.png';
        break;
      case 'rain':
        weatherIcon.src =  './assets/img/rain.png';
        break;
      case 'thunderstorm':
        weatherIcon.innerHTML  =  '&#xf01e;';
        break;
      default :
        weatherIcon.src = './assets/img/clouds.png';
    }
    
  }
  searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);

    if (weather.style.display  ===  'block') {
    weather.style.display = 'none';
    weather.style.opacity = 0; 
    // *  Скрываем блок и делаем его полностью прозрачным  * /
  } else {
    weather.style.display = 'block';
    weather.style.opacity = 1; 
    // *  Показываем блок и делаем его непрозрачным  * /
  }
    //weather.style.display  =  'block';
  });



  // searchBtn.addEventListener('click',  function(){searchBox.addEventListener('keyup',  function(){
  //     if  (searchBox.value  ===  ''){
  //       temp.innerHTML   =  ' ';
  //       city.innerHTML    =  ' ';
  //       humidity.innerHTML=  ' ';
  //       wind.innerHTML    =  ' ';
  //     }else{
  //       checkWeather(searchBox.value);
  //     }
  //   });
  // });
checkWeather('Moscow');
};

start();