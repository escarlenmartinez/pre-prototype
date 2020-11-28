while True:
    print("Current Room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F" + " - " + input.temperature(TemperatureUnit.CELSIUS) + "°C")
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 65:
        light.set_all(light.rgb(122,73,196))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 60:
        light.set_all(light.rgb(255,0,0))
    else:
        light.set_all(light.rgb(76,182,185))
