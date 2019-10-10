//getting userLocation
navigator.geolocation.getCurrentPosition(getPosition);
function getPosition(position){
   
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    console.log(lon,lat);
    let location = document.getElementById("location");
    
                        
 //getting Data
let request = new XMLHttpRequest(); 
request.open('GET', `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/dc706de2c3db16cd623c690a61a8551c/${lat},${lon}`, true)
request.onload = function() {
    
    let data = JSON.parse(this.responseText)
    console.log(data);
    let temp = (Math.floor(data.currently.temperature))
    let temperature = document.getElementById("temperature");
    temperature.innerHTML = temp +"°F"
    let weatherDescription = data.currently.summary;
    console.log(weatherDescription)
    document.getElementById("weather").innerHTML = weatherDescription;
    console.log(data);  
    console.log(data.timzone)
    let loc = data.timezone;
    console.log(loc)
    location.innerHTML = loc;
    icon.src = data.weather[0].icon;
        var src = document.getElementById(src);
        src.appendChild(img);
    //wheater images
    /*
    if(data.weather[0].description === "fog"){
        icon.src = "images/cloudy.svg";
        var src = document.getElementById(src);
        src.appendChild(img);
    }
    else if(data.weather[0].description === "light rain"){
        icon.src = "images/rainy-7.svg";
        var src = document.getElementById(src);
        src.appendChild(img);

    }
    else
    icon.src = "images/cloudy.svg";
        var src = document.getElementById(src);
        src.appendChild(img);

   */ 
 
}

request.send(`https://api.darksky.net/forecast/dc706de2c3db16cd623c690a61a8551c/${lat},${lon}`);
  
}

