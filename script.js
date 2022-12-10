const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '24d2262880msh428b25cb1e813afp1b4b87jsn1d6cb51ffbd6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
        
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})


getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Cuttack', options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)

        cutcloud_pct.innerHTML = response.cloud_pct
        cuttemp.innerHTML = response.temp
        cutfeels_like.innerHTML = response.feels_like
        cuthumidity.innerHTML = response.humidity
        cutmin_temp.innerHTML = response.min_temp
        cutmax_temp.innerHTML = response.max_temp
        cutwind_speed.innerHTML = response.wind_speed
        cutwind_degrees.innerHTML = response.wind_degrees
        cutsunrise.innerHTML = response.sunrise
        cutsunset.innerHTML = response.sunset
        
        
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Moradabad', options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)

        morcloud_pct.innerHTML = response.cloud_pct
        mortemp.innerHTML = response.temp
        morfeels_like.innerHTML = response.feels_like
        morhumidity.innerHTML = response.humidity
        mormin_temp.innerHTML = response.min_temp
        mormax_temp.innerHTML = response.max_temp
        morwind_speed.innerHTML = response.wind_speed
        morwind_degrees.innerHTML = response.wind_degrees
        morsunrise.innerHTML = response.sunrise
        morsunset.innerHTML = response.sunset
        
        
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Kolkata', options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)

        kolcloud_pct.innerHTML = response.cloud_pct
        koltemp.innerHTML = response.temp
        kolfeels_like.innerHTML = response.feels_like
        kolhumidity.innerHTML = response.humidity
        kolmin_temp.innerHTML = response.min_temp
        kolmax_temp.innerHTML = response.max_temp
        kolwind_speed.innerHTML = response.wind_speed
        kolwind_degrees.innerHTML = response.wind_degrees
        kolsunrise.innerHTML = response.sunrise
        kolsunset.innerHTML = response.sunset
        
        
    })
    .catch(err => console.error(err));