import { getEndpoint } from "./endpoints";


export async function getWeatherReportByCity(cityName) {
  try {
    if(!cityName.trim()) {
        throw new Error ("Please enter city name");
    }
    const response = await fetch (getEndpoint(cityName));
    const data = await response.json();
    return {status : "success", data}
  }
  catch (error) {
    return{status : "error", data: error.message || "something went wrong"}

  }
}