while True:
    print("Current Room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F" + " - " + input.temperature(TemperatureUnit.CELSIUS) + "°C")
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 100:
        light.set_all(light.rgb(200,135,227))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 100:
        light.set_all(light.rgb(260,0,15))
    else:
        light.set_all(light.rgb(209,201,201))
