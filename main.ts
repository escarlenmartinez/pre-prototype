while (true) {
    console.log("Current Room Temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + "°F" + " - " + input.temperature(TemperatureUnit.Celsius) + "°C")
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 100) {
        light.setAll(light.rgb(200, 135, 227))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 100) {
        light.setAll(light.rgb(260, 0, 15))
    } else {
        light.setAll(light.rgb(209, 201, 201))
    }
    
}
