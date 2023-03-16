input.onSound(DetectedSound.Loud, function () {
    Stop.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(2000)
    Stop.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Gauche.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(500)
        Gauche.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        Droite.showColor(neopixel.colors(NeoPixelColors.Orange))
        Droite.show()
        basic.pause(500)
        Droite.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
    }
})
let Droite: neopixel.Strip = null
let Stop: neopixel.Strip = null
let Gauche: neopixel.Strip = null
let Strip = neopixel.create(DigitalPin.P16, 5, NeoPixelMode.RGB)
Gauche = Strip.range(0, 2)
Stop = Strip.range(0, 5)
Droite = Strip.range(3, 2)
basic.forever(function () {
	
})
