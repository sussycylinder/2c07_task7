input.onButtonPressed(Button.A, function () {
    led.setBrightness(255)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(0)
})
if (led.brightness() < input.lightLevel()) {
    led.setBrightness(117)
    basic.showNumber(led.brightness())
} else {
    led.setBrightness(132)
    basic.showNumber(led.brightness())
}
