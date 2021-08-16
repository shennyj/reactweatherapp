import React,{useState} from 'react'
import Weather from './Weather'

function Input(){
    const [input,setInput] = useState('')
    const [location,setLocation] = useState('')
    const [weather,setWeather]  = useState({})
    const [onSubmit,setOnSubmit] = useState(false)

    const searchLocation = (e) =>{
        setOnSubmit(true)
        setLocation(input)
        e.preventDefault()
        console.log(location)
       
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`)
            .then(res=>res.json())
            .then(data=>{
                
              setWeather(data)//data is an object
            })
        
        
      }
    
      const apiKey = '0a330a454a1ad0ff544079653191e957'
      const handleInput = (e) => {
            setInput(e.target.value)
      }
    return(
        <div>

          <div className="search-div"> 
            <h1 class="title">Weather Forecast</h1>
            <div class="form-div">
            <form class="form">
                <input
                type="text"
                className="search-bar"
                placeholder="Search for City..."
                onChange={handleInput}
                value={input}
                />
                <button onClick={searchLocation} className="search-button">SEARCH</button>
        </form>
            </div>
        </div> 
        {onSubmit&&<Weather
            weather={weather}
            setWeather={setWeather}
        />}
        
        </div>
       
    )
}

export default Input