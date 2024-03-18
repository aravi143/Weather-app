import { useEffect, useState } from "react";
import { SearchCity } from "./SearchCity";
import { getWeatherReportByCity } from "./api";
import WeatherReport from "./WeatherReport";
import "./app.css"

export default function App(){
    const [cityName,setCityName] = useState("");
    const [response,setResponse] = useState(null);
    const[error,setError] = useState("");
    


    const changeCityName = (newCityName) => {
        setCityName(newCityName);
    }
    useEffect(() => {
        if (cityName.trim()) {
        (async function () {
            const response = await getWeatherReportByCity(cityName);
            response.status === "success" ? setResponse(response.data):setError(response.data)
        })();
      }
    },[cityName])
     useEffect (() => {
        if(error) {
            setTimeout(() => setError(""), 3000);
        }
     })

    return (
        <div>
            <SearchCity changeCityName={changeCityName}/>
            {error && <p style={{color: "red"}}>{error}</p>}
            {
               response && <WeatherReport response={response} />
            }
        </div>
    );
}