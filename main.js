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

    if(data.currently.icon === "partly-cloudy-day"){
        icon.src = "images/cloudy-day-3.svg"
        let src = document.getElementById(src)
        src.appendChild(img);
    }
    else if(data.currently.icon === "clear-day"){
        icon.src = "images/day.svg"
        let src = document.getElementById(src)
        src.appendChild(img);
    }
    else if(data.currently.icon === "rain"){
        icon.src = "images/rainy-7.svg"
        let src = document.getElementById(src)
        src.appendChild(img);
    }
    else if(data.currently.icon === "sleet"){
        icon.src = "images/snowy-2.svg"
        let src = document.getElementById(src)
        src.appendChild(img);
    }
    else if(data.currently.icon === "sleet"){
        icon.src = "images/snowy-2.svg"
        let src = document.getElementById(src)
        src.appendChild(img);
    } 
    else if(data.currently.icon === "cloudy"){
        icon.src = "images/cloudy.svg"
        let src = document.getElementById(src)
        src.appendChild(img);
    } 

}
request.send(`https://api.darksky.net/forecast/dc706de2c3db16cd623c690a61a8551c/${lat},${lon}`);
} 