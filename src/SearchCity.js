import { useState } from "react"

export const SearchCity = ({changeCityName}) => {
     const [cityName,setCityName] = useState("");


      const  onChangeName = (e) => {
          setCityName(e.target.value)
      }
      return (
        <div className="searchBar">
           <input value={cityName} onChange={onChangeName}/>
           <button onClick={() => changeCityName(cityName)}>Search</button>
        </div>
   ) 
}