const apiKey = "e7de373e8cdcbb4118c09b82abfb2bde";

export function getEndpoint(cityName){
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
}