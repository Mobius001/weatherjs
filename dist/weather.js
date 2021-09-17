class Weather {
    constructor(city, countryCode) {
        //In future applications or sites, I would not allow the api key to be visible. Am still learning on my own.
        this.apiKey = 'e6d28479d588d2703edb9f02d0f51dec';
        this.city = city;
        this.countryCode = countryCode;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}&units=imperial`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}


