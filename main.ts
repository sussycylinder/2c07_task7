input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
if (led.brightness() < input.lightLevel()) {
    led.setBrightness(255)
    basic.showNumber(led.brightness())
} else {
    led.setBrightness(0)
    basic.showNumber(led.brightness())
}
