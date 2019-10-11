document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded")
//getting userLocation
navigator.geolocation.getCurrentPosition(getPosition);
function getPosition(position){
   
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let location = document.getElementById("location");


    
                        
 //getting Data
let request = new XMLHttpRequest(); 
request.open('GET', `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/dc706de2c3db16cd623c690a61a8551c/${lat},${lon}`, true)
request.onload = function() {
    let data = JSON.parse(this.responseText)
    let temp = (Math.floor(data.currently.temperature))
    let temperature = document.getElementById("temperature");
    temperature.innerHTML = temp +"°F"
    let celsius = ((temp - 32) * (5/9));
    let c = Math.floor(celsius)
    let weatherDescription = data.currently.summary;
    document.getElementById("weather").innerHTML = weatherDescription;
    let loc = data.timezone;
    location.innerHTML = loc;
    console.log(data);

//Changing Between Farenheit and Celsius
    temperature.addEventListener("click", function(){
        if(temperature.innerText === temp +"°F"){
            temperature.innerText = c +"°C"
        }
        else if(temperature.innerText === c +"°C"){
                temperature.innerText = temp +"°F"
        }
        else{temperature.innerText === temp +"°F"}
    })
   console.log(temperature.innerText);
//Icons changing depending on Api description of weather.
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
})