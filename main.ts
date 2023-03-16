input.onSound(DetectedSound.Loud, function () {
    Stop.showColor(neopixel.colors(NeoPixelColors.Red))
    Stop.show()
    basic.pause(2000)
    Gauche.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Gauche.showColor(neopixel.colors(NeoPixelColors.Orange))
        Gauche.show()
        basic.pause(50)
        Gauche.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(50)
    }
})
input.onSound(DetectedSound.Quiet, function () {
    Stop.showColor(neopixel.colors(NeoPixelColors.Black))
    Stop.show()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        Droite.showColor(neopixel.colors(NeoPixelColors.Orange))
        Droite.show()
        basic.pause(50)
        Gauche.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(50)
    }
})
let Stop: neopixel.Strip = null
let Droite: neopixel.Strip = null
let Gauche: neopixel.Strip = null
let Strip = neopixel.create(DigitalPin.P16, 5, NeoPixelMode.RGB)
Gauche = Strip.range(1, 2)
Droite = Strip.range(3, 4)
Stop = Strip.range(0, 5)
basic.forever(function () {
	
})
