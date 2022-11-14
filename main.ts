input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
if (input.lightLevel() > led.brightness()) {
    led.setBrightness(255)
} else if (false) {
	
} else {
	
}
