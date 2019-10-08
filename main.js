let request = new XMLHttpRequest()

request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139', true)
//request.open('GET', 'https://beeceptor.com/console/weatherapp', true)
request.onload = function() {
  
let data = JSON.parse(this.response)
let temp = data.main.temp
let temperature = document.getElementById("temperature");
temperature.innerHTML = temp +"F"

navigator.geolocation.getCurrentPosition(getPosition);

function getPosition(position)
{
  document.getElementById("location").innerHTML = 
	   + position.coords.longitude + "<br>" +
       + position.coords.latitude;
          
      
}
let weatherDescription = data.weather[0].description;
console.log(weatherDescription)
    document.getElementById("weather").innerHTML = weatherDescription;

  
}


    


request.send()