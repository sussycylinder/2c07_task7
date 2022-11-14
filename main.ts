let mode = 0
while (true) {
    if (mode == 1) {
        led.setBrightness(255 - input.lightLevel())
    } else if (mode == 0) {
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.lightLevel())
        mode = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        led.setBrightness(255 - input.lightLevel())
        led.plotBarGraph(
        255,
        255
        )
        mode = 1
    }
}
