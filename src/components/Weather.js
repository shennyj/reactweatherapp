import React,{useState} from 'react'
import moment from 'moment'

function Weather({weather},{setWeather}){
    const [tempFahrenheit,setTempUnit] = useState(true)

    const setTempUnitFunc = () => {
        setTempUnit(!tempFahrenheit)
      }
    
      const convertToCelcius = (f) => {
        let celcius = Math.round((f - 32) * (5/9))
        return celcius
      }
      const isFahrenheit = (f) => {
        let currentTemp
        currentTemp = tempFahrenheit? `${Math.round(f)}°F` : `${convertToCelcius(f)}°C`
        return currentTemp
      }
      const getDate = () => { 
    

    
        let day = moment().format('dddd')
        let date = moment().format('LL')
        let currentDate = `${day} ${date}` 
        return currentDate
      }

    return(
    
    <div>
    {(typeof weather.main!='undefined')?(
        <div>
        <div className="location-div">
            <div className="location">
            {weather.name} {weather.sys.country}
            </div>
      
             <div className="date" >{getDate()}</div>
        </div>

        <div className="weather-div">
            <div className="temperature">

        {isFahrenheit(weather.main.temp)}
        
        
            
                <div className="temp-switch">
                {!tempFahrenheit?<button onClick={setTempUnitFunc}>°F</button>
                : <button onClick={setTempUnitFunc}>°C</button>}
                
                </div>
            </div>
            <div className="temp-stats">
                <div className="temp-humidity">
                    <div class="temp-title">HUMIDITY</div>
                    <div>{weather.main.humidity}%</div>
                </div>
                <div className="temp-pressure">
                    <div class="temp-title">PRESSURE</div>
                    <div>{weather.main.pressure} hPa</div>
                </div>
                <div className="temp-windspeed">
                    <div class="temp-title">WIND SPEED</div>
                    <div>{weather.wind.speed} m/s</div>
                </div>
                <div className="temp-mintemp">
                    <div class="temp-title">MIN TEMP</div>
                    <div>{isFahrenheit(weather.main.temp_min)}</div>
                </div>
                <div className="temp-maxtemp">
                    <div class="temp-title">MAX TEMP</div>
                    <div>{isFahrenheit(weather.main.temp_max)}</div>
                </div>
                <div className="temp-img">
                    <div class="temp-title" style={{textTransform:'capitalize'}}>{weather.weather[0].description}</div>
                    <div class="img-div"><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img></div>
                </div>
                
            </div>
            
        </div>
       
      </div>
        ):(
            <h1 className="cannotFindHeader">
                Cannot find location...
            </h1>)}
        </div>
        
    
    
    )

}

export default Weather