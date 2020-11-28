while (true) {
    console.log("Current Room Temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + "°F" + " - " + input.temperature(TemperatureUnit.Celsius) + "°C")
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 65) {
        light.setAll(light.rgb(122, 73, 196))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 60) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.setAll(light.rgb(76, 182, 185))
    }
    
}
