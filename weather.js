let weather = {
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [
        {
            "id": 2643743,
            "name": "London",
            "coord": {
                "lat": 51.5085,
                "lon": -0.1258
            },
            "main": {
                "temp": 7,            // Current temperature
                "pressure": 1012,
                "humidity": 81,
                "temp_min": 5,
                "temp_max": 8
            },
            "dt": 1485791400,
            "wind": {
                "speed": 4.6,     // I want this info - wind speed
                "deg": 90
            },
            "sys": {
                "country": "GB"
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": 90
            },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",   // description
                    "icon": "50d"
                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",  // description
                    "icon": "09d"
                }
            ]
        }
    ]
}

// Get the array out first
let weatherList = weather.list
console.log(weatherList)

let weatherInfo = weatherList[0]
console.log(weatherInfo)

// Get the temperature
// main contains the temperature
let main = weatherInfo.main
// console.log(main)

// Getting the wind speed
let wind = weatherInfo.wind
let speed = wind.speed
console.log('Current wind speed is ' + speed)

let currentTemp = main.temp
console.log('The current temperature is ' + currentTemp)

// Another way to get the above data 
let temp = weather.list[0].main.temp
// console.log(temp)

// Get the last weather array 
let weatherDescriptionArray = weatherInfo.weather

let descriptions = []

weatherDescriptionArray.forEach( function(weatherDescription) {
    // you can either console.log or add the descriptions to the array descriptions
    // console.log(weatherDescription.description)
    descriptions.push(weatherDescription.description)
})

let descriptionsString = descriptions.join(', ')
console.log('The weather is ' + descriptionsString)
