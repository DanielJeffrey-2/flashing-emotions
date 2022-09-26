input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1e+127; index++) {
        basic.showIcon(IconNames.Angry)
        basic.pause(250)
        basic.showIcon(IconNames.Sad)
        basic.pause(250)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(250)
        basic.showIcon(IconNames.Fabulous)
        basic.pause(250)
        basic.clearScreen()
    }
})
