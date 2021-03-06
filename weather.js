const api = '{{api key here}}'
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&appid=';


const getWeather = () => {
  return fetch(url + api)
    .then(response => response.json())
    .then(data => {
      const city = data.name;
      const kTemp = data.main.temp;
      const fTemp = Math.round((kTemp - 273.15) * 1.8 + 32);
      const weather = data.weather[0].main;
      const wxIcon = data.weather[0].icon;
      console.log(`City: ${city}, Temp: ${fTemp}F, Weather: ${weather}, Weather Icon: ${wxIcon}`);
    })
    .catch(console.error);
}

let para = document.createElement('p')
const weather = document.querySelector('#weather');
weather.appendChild(para);

para.textContent = `City: ${city}`;



getWeather();
