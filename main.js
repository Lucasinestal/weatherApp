//getting userLocation
navigator.geolocation.getCurrentPosition(getPosition);
function getPosition(position){
    let request = new XMLHttpRequest()
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    console.log(lon,lat);
    let location = document.getElementById("location");
    
                        
 //getting Data   
request.open('GET', `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`, true)
request.onload = function() {
    let data = JSON.parse(this.responseText)
    let temp = (Math.floor(data.main.temp))
    let temperature = document.getElementById("temperature");
    temperature.innerHTML = temp +"°C"
    let weatherDescription = data.weather[0].description;
    console.log(weatherDescription)
    document.getElementById("weather").innerHTML = weatherDescription;
    console.log(data);  
    console.log(data.sys.country)
    location.innerHTML = data.sys.country+" / "+ data.name;
    //icon.src =  data.weather[0].icon;
    var src = document.getElementById("icon");
    src.appendChild(img);
}

request.send(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`);
  
}


    


