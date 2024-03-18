export default function WeatherReport({response}){
     
    const temperature = parseInt(response.main.temp - 273.15);
    
    
    return(
        <div className="card">
            <h1>City : {response.name}</h1>
            <h3>status : {response.weather[0].main}</h3>
            <p>{`Temperature: ${temperature}`}</p>
            <p>{`Wind Speed: ${response.wind.speed}`}</p>
            <p>{`Pressure: ${response.main.pressure}`}</p>
        </div>
    )
}