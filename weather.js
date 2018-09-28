const api = 'f76d4358d0078025c2a282a82459560e'
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&appid=';

fetch(url + api)
  .then(response => response.json())
  .then(data => {
    const city = data.name;
    const kTemp = data.main.temp;
    const fTemp = Math.round((kTemp - 273.15) * 1.8 + 32);
    const wx = data.weather[0].main;
    const wxIcon = data.weather[0].icon;
    let para = document.createElement('p')
    const weather = document.querySelector('#weather');
    weather.appendChild(para);
    para.textContent = `City: ${city}`;
    console.log(`City: ${city}, Temp: ${fTemp}F, Weather: ${wx}, Weather Icon: ${wxIcon}`);
  })
  .catch(console.error);
