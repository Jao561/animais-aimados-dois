basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Giraffe)
    basic.showLeds(`
        . . . # #
        . . . # .
        . . . # .
        . # # # .
        . # . # .
        `)
})
basic.forever(function() {
    music.play(music.stringPlayable("B C5 B C5 A D G F ", 120), music.PlaybackMode.UntilDone)
})