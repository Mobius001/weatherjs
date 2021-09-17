class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.sunrise = document.getElementById('w-sunrise');
        this.cloudiness = document.getElementById('w-cloudiness');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        // Converting the sunrise time provided by the OpenWeatherMap API to Local Time
        var sec = `${weather.sys.sunrise}`;
        var date = new Date(sec * 1000);
        // var timestr = date.toLocaleTimeString(date);
        // End of conversion

        // Translating wind direction in degrees to a easily readable string for the user
        var windCompass = Math.round((`${weather.wind.deg}` - 11.25) / 22.5);
        var windNames = new Array("North", "North Northeast", "Northeast", "East Northeast", "East", "East Southeast", "Southeast", "South Southeast", "South", "South Southwest", "Southwest", "West Southwest", "West", "West Northwest", "Northwest", "North Northwest");

        var easyWindDirection = (windNames[windCompass % 16]);


        // Converting wind direction from degrees to something like North, South, East, West, etc...
        // var deg = `${weather.wind.deg}`;

        // console.log(date, timestr); <-- //Proof of concept to change the time provided by the OpenWeatherMap API to Local Time

        this.location.textContent = weatherLocation.city + ', ' + weatherLocation.countryCode;
        this.desc.textContent = weather.weather[0].description; // If using the OpenWeather API, "weather" is an array and an object
        this.string.textContent = weather.main.temp + ' Fahrenheit';
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);  // Set to the source of the image from the API
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.sunrise.textContent = 'Sunrise: ' + date;
        this.cloudiness.textContent = `Cloudiness: ${weather.clouds.all} %`;
        this.wind.textContent = `Wind: ${weather.wind.speed} mph, ${weather.wind.deg} degrees ` + easyWindDirection;
    }


}