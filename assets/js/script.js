
function startApp(){
  const container = document.querySelector('.container');
  const inputBox = document.querySelector('.search-box input');
  const searchBtn = document.querySelector('.search-btn');
  const temp = document.querySelector('.weather.temp');
  const weatherIcon  = document.querySelector('.weather-icon');
  const descriptions = document.querySelector('.weather.description');
  const weatherBox = document.querySelector('.weather-box');
  const weatherDetails = document.querySelector('.weather-details');
  //const city = document.querySelector('.search-box input').value;

  const image = document.querySelector('.weather img');
  const temperature = document.querySelector('.temp');
  const description  = document.querySelector('.description');
  const humidity = document.querySelector('.humidity-info span');
  const wind  = document.querySelector('.wind-info span');

  
  const apiKey = '073a3401d1f073571f149fde27f8bb3c';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

    //const APIKey = '073a3401d1f073571f149fde27f8bb3c';
    //const APIKey = '36752c07c4a6e661a3505d677493b0df';
    const cityName = document.querySelector('.search-box input').value;

    async function checkWeather(cityN = "Moscow"){
      if(!cityN)cityN = 'Moscow';

        const response = await fetch(apiUrl + cityN + `&appid=${apiKey}`);
        const data  = await response.json();
        console.log(data);
        console.log( data.weather[0].description);
        //let data  = await response.json();
      
      if (data.cod === 200){
        temperature.innerHTML  = Math.round(data.main.temp) + ' °C';
        description.innerHTML   = data.weather[0].description;
        humidity.innerHTML= data.main.humidity+ ' %';
        wind.innerHTML    = Math.round(data.wind.speed) + ' km/h';

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
      }else {
        description.innerHTML = 'City not found';
        temperature.innerHTML  = 0 + ' °C';
        humidity.innerHTML= 0+ ' %';
        wind.innerHTML    = 0 + ' km/h';
        
      }
      //Add weather image
      
      
    } 

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkWeather(inputBox.value);
  });
  inputBox.addEventListener('keypress', (e)=>{
    if (e.code == `Enter`){
      checkWeather(inputBox.value);
    }    
  });
}


startApp();