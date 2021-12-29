input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.rgb(255, 0, 0))
    basic.pause(500)
    strip.showColor(neopixel.rgb(0, 0, 255))
    basic.pause(500)
    strip.showColor(neopixel.rgb(0, 255, 0))
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.rgb(255, 0, 0))
    basic.pause(500)
    strip.showColor(neopixel.rgb(255, 97, 0))
    basic.pause(500)
    strip.showColor(neopixel.rgb(255, 255, 0))
    basic.pause(500)
    strip.showColor(neopixel.rgb(0, 255, 0))
    basic.pause(500)
    strip.showColor(neopixel.rgb(0, 0, 255))
    basic.pause(500)
    strip.showColor(neopixel.rgb(75, 0, 128))
    basic.pause(500)
    strip.showColor(neopixel.rgb(160, 32, 240))
    basic.pause(500)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
while (input.lightLevel() < 100) {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
}
